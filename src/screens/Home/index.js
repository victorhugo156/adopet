import React from "react";
import{Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Container, ContainerContent, Btn, BtnText, BtnTextBG } from "../../style";


export default function Home(){

    const navigation = useNavigation();

    function handleLogin(){
        navigation.navigate('login')
    }
    return(
        <Container>
            <ContainerContent>
                <Image source={require('../../assets/logo_dark_blue.png')} 
                style={styles.logo}></Image>

                <Text style={styles.titleOne}>FIND YOUR BEST</Text>
                <Text style={styles.titleTwo}>COMPANION WITH US</Text>

                <Btn onPress={handleLogin}>
                    <BtnTextBG>LOGIN</BtnTextBG>
                </Btn>

                <Btn backgroundColor='transparent'>
                    <BtnText>SIGN UP</BtnText>
                </Btn>

                <Image source={require('../../assets/img_girl_pet.png')}>

                </Image>
            </ContainerContent>
            
        </Container>

    )
}

const styles = StyleSheet.create({

    logo:{
        marginBottom: 35,
    },

    titleOne:{
        width: 278,

        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',

        color: '#203A40',
    
    },

    titleTwo:{
        width: 278,

        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',

        color: '#203A40',

        marginBottom: 45
    },


})