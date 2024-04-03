import React from "react";
import{Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Container } from "../../style";


export default function Home(){

    const navigation = useNavigation();

    function handleLogin(){
        navigation.navigate('login')
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <Image source={require('../../assets/logo_dark_blue.png')} 
                style={styles.logo}></Image>

                <Text style={styles.titleOne}>FIND YOUR BEST</Text>
                <Text style={styles.titleTwo}>COMPANION WITH US</Text>

                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>

                <Image source={require('../../assets/img_girl_pet.png')}>

                </Image>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#AAFF00',
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