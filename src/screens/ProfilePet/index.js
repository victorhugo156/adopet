import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, ContainerContent, Btn, BtnText, BtnTextBG } from "../../style";

import ProfileCard from "./ProfileCard";

export default function ProfilePet(){
    return(
        <View style={styles.profileContainer}>
            <ImageBackground source={require('../../assets/bg_pattern.png')} 
            style={styles.imgBG}
            imageStyle={{
                height: 220,
                resizeMode: 'cover'
            }}
            />
            <View style={styles.profileWrap}>
                <View>
                    <ProfileCard />
                </View>
            </View>
        </View>

        

    )
}

const styles = StyleSheet.create({

    imgBG:{
        width:'100%',
    },

    profileContainer:{
        flex:1,
        alignItems: "center",
    },

    profileWrap:{
        backgroundColor: '#F6F6F6',

        alignItems: 'center',

        width: 312,
        height: 710,

        borderRadius: 16,

        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,  

        marginTop: 127

    }
    
})