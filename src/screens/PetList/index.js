import React from "react";
import { Text, Image, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import pets from "../../Pets/pets";
import Card from "./Card";

export default function () {

    const navigation = useNavigation();

    function handleProfilePet(){
        navigation.navigate('profilePet')
    }
    return (
        <View style={styles.container}>
            <Image></Image>
            <View style={styles.containerContent}>
                <Text style={styles.title}>Hi...take a look at some friends{"\n"} waiting for adoption!</Text>
                <TouchableOpacity onPress={handleProfilePet}>
                    <FlatList
                        data={pets}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <Card {...item}
                            />
                        )}
                    />
                </TouchableOpacity>
               
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    containerContent:{
        width: "100%",

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        marginTop: 128,
        paddingLeft:16,
        paddingRight:16
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,

        color: '#203A40',

        marginBottom: 25
    }
})