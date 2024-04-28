import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground,Image } from 'react-native';
import { ContainerContent } from "../../style";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from 'firebase/app'; // Import initializeApp from Firebase
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'; // Import Firebase Firestore functions
import { StorageContext } from "../../contexts/Storage";
import * as ImagePicker from 'expo-image-picker'; // Import Expo's image picker
import { uploadImageAsync } from '../../utils/uploadImage'; // Custom function for uploading images

const firebaseConfig = {
    apiKey: "AIzaSyCmhJkrLuURm_XzWslMisZPQIvQYCWy_Co",
    authDomain: "adopet-379b5.firebaseapp.com",
    projectId: "adopet-379b5",
    storageBucket: "adopet-379b5.appspot.com",
    messagingSenderId: "856122263928",
    appId: "1:856122263928:web:4859132d35657648c0a08d"
  };

  // Initialize Firebase
// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

export default function PostPet(){

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [size, setSize] = useState('');
    const [behavior, setBehavior] = useState('');
    const [location, setLocation] = useState('');
    const [picture, setPicture] = useState('sillhuete.jpg');
    const storage = useContext(StorageContext);

    // Get Firestore database instance
    const db = getFirestore(firebaseApp);

    
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

  // Function to add a new pet to Firestore
  const handleAddPet = async () => {
    try {
      const petData = {
        name,
        age,
        size,
        behavior,
        location,
        picture: "sillhuete.jpg", // You can update this with the URL of the uploaded image
      };

      // Add the pet data to the 'petfeed' collection
      const docRef = await addDoc(collection(db, 'petfeed'), petData);
      console.log('New pet added with ID:', docRef.id);

      // Reset form fields after adding the pet
      setName('');
      setAge('');
      setSize('');
      setBehavior('');
      setLocation('');
      setPicture("sillhuete.jpg");

      // Show success message or navigate to another screen
      Alert.alert('Success', 'Pet added successfully!');
    } catch (error) {
      console.error('Error adding pet:', error);
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
            <View style={styles.containerForm}>
                <Text style={styles.title} value={name} onChangeText={setName}>Post your Pet</Text>
                <View style={styles.boxPostForm}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput 
                    placeholder='Pet Name'
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setName}
                    value={name}
                    style={styles.input} />

                    <Text style={styles.label}>Age</Text>
                    <TextInput 
                    placeholder='Pet Ange'
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setAge}
                    value={age}
                    style={styles.input} />

                    <Text style={styles.label}>Pet Size</Text>
                    <TextInput 
                    placeholder='Pet Size'
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setSize}
                    value={size}
                    style={styles.input} />

                    <Text style={styles.label}>How is it like?</Text>
                    <TextInput 
                    placeholder='Type the Pet Behavior'
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setBehavior}
                    value={behavior}
                    style={styles.input} />

                    <Text style={styles.label}>Where are you at?</Text>
                    <TextInput
                        placeholder='Type the Pet Behavior'
                        placeholderTextColor={'#BCBCBC'}
                        onChangeText={setLocation}
                        value={location}
                        style={styles.input} />


                        {/**  <TouchableOpacity onPress={handleImageUpload}>
                        <Text style={styles.label}>Post Some Picture of the Cute one</Text>
                        <Text>Upload Image</Text>
                    </TouchableOpacity>

                   {picture && <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />} */}
                   
                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.btn} onPress={handleAddPet}>
                            <Text style={styles.btnText}>POST PET</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            
            </View>
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

    containerForm:{
        width: "100%",

        flexDirection: "column",
        alignItems: "center",
    
        marginTop: 100,
        paddingLeft: 112,
        paddingRight: 112
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