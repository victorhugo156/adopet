import React from "react";
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, ContainerContent, Btn, ContainerForm, Input, Label, BtnTextBG } from "../../style";

export default function Login() {

    const navigation = useNavigation();

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
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Label>Password</Label>
                    <Input 
                    placeholder='Type your name'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />
                </ContainerForm>
                <Btn onPress={handleAdoptionFeed}>
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