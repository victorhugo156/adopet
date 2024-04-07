import React from "react";
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation();

    function handleAdoptionFeed(){
        navigation.navigate('petsList')
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <Image
                    source={require('../../assets/logo_dark_blue.png')}
                    style={styles.logo}></Image>
                
                <Text style={styles.title}>
                    Do you have an account?{"\n"}Login into your account: 
                </Text>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                    placeholder='Type your name' 
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                    placeholder='Type your name'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleAdoptionFeed}>
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

    title:{
        width: 212,

        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'justify',
        lineHeight: 30

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