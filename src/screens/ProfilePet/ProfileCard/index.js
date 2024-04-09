import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import { Container, ContainerContent, Btn, ContainerForm, Input, Label, BtnTextBG } from "../../style";

import profilePet from "../../../Pets/profilePet";

export function ProfileCard(){
    return(
        <View>
            <Image>

            </Image>
            <FlatList
                    data={profilePet}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <Card {...item}
                        />
                    )}
                />
        </View>
    )
}