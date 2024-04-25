import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground,Image } from 'react-native';
import { ContainerContent } from "../../style";
import { useNavigation } from "@react-navigation/native";
import { DBContext } from "../../contexts/Db";
import { StorageContext } from "../../contexts/Storage";
import * as ImagePicker from 'expo-image-picker'; // Import Expo's image picker
import { uploadImageAsync } from '../../utils/uploadImage'; // Custom function for uploading images


export default function PostPet(){
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [size, setSize] = useState('');
    const [behavior, setBehavior] = useState('');
    const [location, setLocation] = useState('');
    const [picture, setPicture] = useState(null);
    
    const storage = useContext(StorageContext);

    const db = useContext(DBContext);
    useEffect(() => {
        if (db) {
            console.log("There is DB")
        } else {
            console.error('There is no db');
        }
    }, []);

    // Function to handle image upload
  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPicture(result.uri);
    }
  };

  const handleAddPet = async () => {
    try {
        if (!db) {
            throw new Error('Firestore instance not available.');
        }

        if (!picture) {
            // No image uploaded, upload other fields without image URL
            await db.collection('petfeed').add({
                name,
                age,
                size,
                behavior,
                location,
            });
        } else {
            // Image uploaded, upload all fields including image URL
            const imageUri = await uploadImageAsync(picture, storage);
            await db.collection('petfeed').add({
                name,
                age,
                size,
                behavior,
                location,
                picture: imageUri,
            });
        }

        Alert.alert('Success', 'Pet added successfully!');
        // Reset input fields and picture state after adding the pet
        setName('');
        setAge('');
        setSize('');
        setBehavior('');
        setLocation('');
        setPicture(null);
    } catch (error) {
        console.error('Error adding pet:', error.message);
        Alert.alert('Error', 'Failed to add pet. Please try again later.');
    }
};

  function handleGoBack(){
    navigation.navigate('petsList')
}


    return(
        <View>
            <ImageBackground source={require('../../assets/bg_pattern.png')} 
            style={styles.imgBG}
            imageStyle={{
                height: 220,
                resizeMode: 'cover'
            }}>
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={handleGoBack} >
                        <Image style={styles.returnBtn_icon} source={require('../../assets/btn_return.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <ContainerContent>
                <Text style={styles.title} value={name} onChangeText={setName}>Post your Pet</Text>
                <View style={styles.boxPostForm}>
                    <Text style={styles.label}>Pet Name</Text>
                    <TextInput 
                    placeholder='Pet Name'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Text style={styles.label}>Pet Age</Text>
                    <TextInput 
                    placeholder='Pet Ange'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Text style={styles.label}>Pet Size</Text>
                    <TextInput 
                    placeholder='Pet Size'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Text style={styles.label}>How is it like?</Text>
                    <TextInput 
                    placeholder='Type the Pet Behavior'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Text style={styles.label}>Awhere are you at?</Text>
                    <TextInput
                        placeholder='Type the Pet Behavior'
                        placeholderTextColor={'#BCBCBC'}
                        style={styles.input} />

                    <TouchableOpacity onPress={handleImageUpload}>
                        <Text style={styles.label}>Post Some Picture of the Cute one</Text>
                        <Text>Upload Image</Text>
                    </TouchableOpacity>

                    {picture && <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />}
                   
                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.btn} onPress={handleAddPet}>
                            <Text style={styles.btnText}>POST PET</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            
            </ContainerContent>
        </View>

    )
}

const styles = StyleSheet.create({

    container_header:{
        width: "100%",

        paddingTop: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },

    returnBtn_icon:{
        width: 30,
        height: 30,

    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,

        color: '#203A40',

        marginBottom: 25
    },

    boxPostForm:{
        backgroundColor: "#EEEEEE",
        width: 312,

        padding: 20,

        borderRadius: 16,

    },

    label:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#3772FF',

        marginBottom: 12
    },
    input:{
        backgroundColor: '#F6F6F6',
        width:270,
        height: 40,

        textAlign:'center',

        borderRadius: 8,

        marginBottom: 18

    },

    containerBtn:{
        width: "100%",
        alignItems: "center",

        paddingTop: 25,

    },

    btn:{
        backgroundColor:'#72A603',
        width:180,
        height:40,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 8,

        marginBottom: 10
    },

    btnText:{
        fontSize: 16,
        fontWeight: 'bold',

        color: 'white'
    },

})