import React from "react";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { AuthContext } from "../../contexts/auth";
import { collection, addDoc } from 'firebase/firestore';
import { DBContext } from "../../contexts/Db";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function SignUp() {

    const navigation = useNavigation();
    const auth = useContext( AuthContext )
    const db = useContext(DBContext);

    // const [email, onChangeEmail] = useState("");
    // const [name, onChangeName] = useState("");
    // const [password, onChangePassword] = useState("");


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user information in Firestore
            await addDoc(collection(db, 'users'), {
                userId: user.uid,
                name: name,
                email: email,
            });

            handleSendToFeed(); // Navigate to the petsList screen after signup
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };


    // const createAccount = (email, password)=>{
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential)=>{
    //             console.log(userCredential.user)
    //             handleSendToFeed()
    //         })
    //         .catch((error)=>{
    //             console.log(error.code, error.message)
    //         })
    // }

    function handleSendToFeed(){
        navigation.navigate('petsList')
    }


    
    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <Image
                    source={require('../../assets/logo_dark_blue.png')}
                    style={styles.logo}></Image>

                <View style={styles.containerForm}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput 
                    placeholder='Type your name'
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setName}
                    value={name}
                    style={styles.input} />

                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                    placeholder='Type your name' 
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input} />

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                    placeholder='Type your name'
                    placeholderTextColor={'#BCBCBC'}
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input} />
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
                        <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    containerContent:{
        width: "100%",

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        marginTop: 128,
        paddingLeft:112,
        paddingRight:112
    },
    logo:{
        marginBottom: 35,
    },
    containerForm:{
        display:'flex',
        alignItems: 'center',

        paddingTop: 23,

        marginBottom:42

    },
    label:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#737380',

        marginBottom: 12
    },
    input:{
        backgroundColor: '#F6F6F6',
        width:312,
        height: 40,

        textAlign:'center',

        borderRadius: 8,

        marginBottom: 18

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
    }



})