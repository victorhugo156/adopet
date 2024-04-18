import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ContainerContent, Btn, ContainerForm, Input, Label, BtnTextBG } from "../../style";

import { AuthContext } from "../../contexts/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {

    const auth = useContext( AuthContext );

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    const navigation = useNavigation();

    const signIn = (email, password)=>{
        signInWithEmailAndPassword( auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential.user)
                handleAdoptionFeed()
            })
            .catch((error)=>{
             
                console.log(error.code, error.message)
            })
    }

    function handleAdoptionFeed(){
        navigation.navigate('petsList')
    }
    return (
        <Container>
            <ContainerContent>
                <Image
                    source={require('../../assets/logo_dark_blue.png')}
                    style={styles.logo}></Image>
                
                <Text style={styles.title}>
                    Do you have an account?{"\n"}Login into your account: 
                </Text>
                <ContainerForm>
                    <Label>Email</Label>
                    <Input 
                    placeholder='Type your name' 
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Label>Password</Label>
                    <Input 
                    placeholder='Type your name'
                    onChangeText={onChangePassword}
                    value={password}
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />
                </ContainerForm>
                <Btn onPress={()=>signIn(email, password)}>
                        <BtnTextBG>LOGIN</BtnTextBG>
                </Btn>
            </ContainerContent>
        </Container>

    )
}

const styles = StyleSheet.create({
   
    logo:{
        marginBottom: 35,
    },

    title:{
        width: 212,

        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'justify',
        lineHeight: 30

    },

})