import React from "react";
import{Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Container, ContainerContent, Btn, BtnText, BtnTextBG } from "../../style";

import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../contexts/auth";


export default function Home(){

    const auth = useContext(AuthContext)

    const navigation = useNavigation();

    function handleLogin(){
        navigation.navigate('login')
    }
    function handleDignUp(){
        navigation.navigate('signUp')
    }
    function handleAdoptionFeed(){
        navigation.navigate('petsList')
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          handleAdoptionFeed()

          const uid = user.uid;
          // ...
        } else {
          return
        }
      });




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

                <Btn backgroundColor='transparent' onPress={handleDignUp}>
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