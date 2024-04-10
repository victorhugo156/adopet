import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Linking } from "react-native";
import styled from "styled-components";


export default function ProfileCard(){
    return(
        <View style={styles.wrapContent} >
            <View style={styles.wrapImage}>
                <Image source={require('../../../../src/assets/Dunga.png')} />
            </View>
           
            <View>
                <Text style={styles.dogsName}>Dunga</Text>
            </View>
            <View style={styles.wrapInfo}>
                <Text style={styles.infos}>2 years</Text>
                <Text style={styles.infos}>Small</Text>
                <Text style={styles.infos}>Calm and Polite</Text>
                <Text style={styles.infos}>Play with kids and go for a walk</Text>
                <Image />
            </View>
            <View style={styles.wrapCTA}>
                <Text style={styles.infos} >Marubra</Text>

                <TouchableOpacity style={styles.msg} onPress={()=>Linking.openURL('mailto:somethingemail@gmail.com?')}>
                    <Image source={require('../../../assets/msgIcon.png')} />
                    <Text style={styles.infos}>Send a Message</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Image source={require('../../../assets/Dunga1.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    wrapContent:{
        width: 250,
    },

    wrapImage:{
        alignItems: 'center',

        marginBottom: 25
    },

    dogsName:{
        fontSize: 26,
        fontWeight: "bold",

        color: "#AAFF00",

        marginBottom: 15
    },

    wrapInfo:{
        height:130,
        justifyContent: 'space-between',

        marginBottom: 45
    },

    infos:{
        fontSize: 16,
        fontWeight: "regular",

        color: '#737380',

    },

    msg:{
        flexDirection: 'row',
        alignItems:  'center',
        gap: 8

    },

    wrapCTA:{
        width: '100%',
        flexDirection: 'row',
        alignItems:  'center',
        justifyContent: 'space-between',

        marginBottom: 30

    }

})