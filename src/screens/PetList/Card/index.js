import React from "react";
import{Text, View, Image, StyleSheet} from 'react-native';

export default function Card({name , age, size, image}){
    return(
        <View style ={styles.container}>

            <Image source={image} style={styles.dogImg}></Image>
            
            <View style={styles.containerLabels}>
                <Text style={styles.labelNameTitle}>{name}</Text>
                <Text style={styles.labelName}>{age}</Text>
                <Text style={styles.labelName}>{size}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#F6F6F6',
        width: 360,
        height: 204,

        display: 'flex',
        flexDirection: 'row',
        gap:30,

        paddingLeft: 25,
        paddingTop: 25,

        borderRadius: 15

    },
    dogImg:{
        width: 148,
        height:148,
    },
    containerLabels:{
        display:'flex',
        gap: 18
    },

    labelNameTitle:{
        fontSize: 24,
        fontWeight: 'bold',

        color: '#AAFF00'
    },
    labelName:{
        fontSize: 18,
        fontWeight: 'bold'
    }




})