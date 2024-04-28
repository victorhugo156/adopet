import { View, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { DBContext } from "../../contexts/Db";
import { StorageContext } from "../../contexts/Storage";
import { ref, getDownloadURL } from 'firebase/storage';

import ProfileCard from "./ProfileCard";

export default function ProfilePet({route}) {

    const { petData } = route.params ?? {};
    const { user } = route.params ?? {};

    const [pets, setPets] = useState([]);
    const [users, setUsers] = useState([]);
    const db = useContext(DBContext);
    const storage = useContext(StorageContext)

    useEffect(() => {
        const fetchPets = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "petfeed"));
      
            const petDataWithImages = [];
            for (const doc of querySnapshot.docs) {
              const petData = doc.data();
              const imageNames = petData.picture; // Array of image names
              console.log(imageNames)
      
              const imageUrls = [];
              for (const imageName of imageNames) {
                const imageRef = ref(storage, `pets/${imageName}`);
                const imageUrl = await getDownloadURL(imageRef);
                imageUrls.push(imageUrl); 
              }
      
              petDataWithImages.push({ id: doc.id, ...petData, images: imageUrls }); // Array of image URLs for each pet
            }

              // Fetch user data
              const userQuerySnapshot = await getDocs(collection(db, "users"));
              const users = [];
              userQuerySnapshot.forEach((userDoc) => {
                  const userData = userDoc.data();
                  users.push(userData);
              });
      
            setPets(petDataWithImages);
            setUsers(users);
          } catch (error) {
            console.error("Error fetching pets:", error);
          }
        };
      
        fetchPets();
      }, []);

    const navigation = useNavigation();

    function handlePetList(){
        navigation.navigate('petsList')
    }

    function handleMessage(){
        navigation.navigate('message', { petData: petData, user: user })
    }

    return (
        <View style={styles.profileContainer}>
            <ImageBackground source={require('../../assets/bg_pattern.png')}
            style={styles.imgBG}
                imageStyle={{
                    height: 220,
                    resizeMode: 'cover'
                }}>
                
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={handlePetList} >
                        <Image style={styles.icon} source={require('../../assets/btn_return.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMessage}  >
                        <Image style={styles.iconInbox} source={require('../../assets/inbox.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>


            <View style={styles.profileWrap}>
                {console.log("petData:", petData)}
                {console.log("user:", user)}
                <ProfileCard {...petData} user={user} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    imgBG: {
        width: '100%',
    },

    profileContainer: {
        flex: 1,
        alignItems: "center",
    },

    container_header:{
        marginTop: 35,
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },

    icon:{
        width: 30,
        height: 30,

    },

    iconInbox:{
        width: 40,
        height: 40,

    },

    profileWrap: {
        backgroundColor: '#F6F6F6',

        alignItems: 'center',

        width: 312,
        height: 710,

        borderRadius: 16,

        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,

        marginTop: 127

    }

})