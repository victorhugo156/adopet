import React from "react";
import { Text, ImageBackground, Image, View, FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { signOut } from "firebase/auth";

import { useContext, useState, useEffect } from "react";


//import pets from "../../Pets/pets";
import Card from "./Card";
import { AuthContext } from "../../contexts/auth";
import { DBContext } from "../../contexts/Db";
import { StorageContext } from "../../contexts/Storage";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';

export default function () {

    const auth = useContext( AuthContext)
    const navigation = useNavigation();

    const [pets, setPets] = useState([]);
    const db = useContext(DBContext);
    const storage = useContext(StorageContext)

    console.log("Now I'mm access the data base via PetList screen" + db)


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
      
            setPets(petDataWithImages);
          } catch (error) {
            console.error("Error fetching pets:", error);
          }
        };
      
        fetchPets();
      }, []);

   const signUserOut = ()=>{
    signOut(auth).then(() => {
        console.log("You are out!")
        sendUsertoLoginScreen()
      }).catch((error) => {
        console.log(error.message);
      });

   }
    function handleProfilePet(item){
        navigation.navigate('profilePet', { petData: item, user: auth.currentUser})
    }
    function handlePostPet(){
        navigation.navigate('postPet')
    }

    function sendUsertoLoginScreen(){
        navigation.navigate('home')
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bg_pattern.png')} 
            style={styles.imgBG}
            imageStyle={{
                height: 220,
                resizeMode: 'cover'
            }}>
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={signUserOut} >
                        <Image style={styles.icon} source={require('../../assets/logout_btn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePostPet} >
                        <Image style={styles.icon_paw} source={require('../../assets/btn_post_paw.png')} />
                    </TouchableOpacity>
                </View>
                
               
            </ImageBackground>

            <View style={styles.containerContent}>
                <Text style={styles.title}>Hi...take a look at some friends{"\n"} waiting for adoption!</Text>
               
                    <FlatList
                    style={styles.list}
                        data={pets}
                        scrollEnabled ={true}
                        ListFooterComponent={<View style={{height: 200}}/>}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleProfilePet(item)}>
                                <Card {...item} />
                            </TouchableOpacity>
                        )}
                    />
               
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    containerContent:{
        width: "100%",

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        marginTop: 128,
        paddingLeft:16,
        paddingRight:16
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

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,

        color: '#203A40',

        marginBottom: 25
    },

    icon:{
        width: 30,
        height: 30,

    }
})