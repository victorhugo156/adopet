import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Linking } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";


export default function ProfileCard({name , age, size, images, location, behavior, petData, user }){

    const navigation = useNavigation();

    const handleSendMessage = () => {
        navigation.navigate('message', { petData: petData, user: user });
      };
    
    return(
        <View style={styles.wrapContent} >
            <View style={styles.wrapImage}>
               <Image source={{ uri: images[0]}} />
            </View>
           
            <View>
                <Text style={styles.dogsName}>{name}</Text>
            </View>
            <View style={styles.wrapInfo}>
                <Text style={styles.infos}>Age: {age}</Text>
                <Text style={styles.infos}>Size: {size}</Text>
                <Text style={styles.infos}>Behavour: {behavior}</Text>
                <Image />
            </View>
            <View style={styles.wrapCTA}>
                <Text style={styles.infos} >Location: {location}</Text>

                <TouchableOpacity style={styles.msg} onPress={handleSendMessage}>
                    <Image source={require('../../../assets/msgIcon.png')} />
                    <Text style={styles.infos}>Email</Text>
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

        color: '#203A40',

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