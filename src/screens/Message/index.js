import { Text, View, Image, TextInput,StyleSheet, TouchableOpacity, FlatList, Linking, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { DBContext } from "../../contexts/Db";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import serverTimestamp


export default function Message({route}){

    const navigation = useNavigation();
    const db = useContext(DBContext);
    const { user, petData } = route.params;

    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!user || !messageText.trim()) {
            return;
        }
    
        const newMessage = {
            uid: user.uid,
            displayName: user.displayName,
            text: messageText.trim(),
            timestamp: serverTimestamp(),
        };
    
        console.log("Message to be sent:", newMessage); // Add console.log here
    
        await addDoc(collection(db, "messages"), newMessage);
    
        setMessageText("");
    };

    function handlePetProfile(){
        navigation.navigate('petsList')
    }



    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bg_pattern.png')} 
            style={styles.imgBG}
            imageStyle={{
                height: 220,
                resizeMode: 'cover'
            }}> 
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={handlePetProfile} >
                        <Image style={styles.icon} source={require('../../assets/btn_return.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.containerContent}>
                <Text style={styles.title}>Messages</Text>

                <Text style={styles.label}>Name</Text>
                    <TextInput 
                    placeholder='Pet Name'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                <Text style={styles.label}>Email</Text>
                    <TextInput 
                    placeholder='Pet Name'
                    placeholderTextColor={'#BCBCBC'}
                    style={styles.input} />

                <Text style={styles.label}>Message</Text>
                <TextInput
                    placeholder='Pet Name'
                    placeholderTextColor={'#BCBCBC'}
                    multiline
                    numberOfLines={4}
                    onChangeText={setMessageText}
                    value={messageText}
                    style={styles.inputMessage} />

                <TouchableOpacity style={styles.btn} onPress={sendMessage}>
                    <Text style={styles.btnText}>SEND</Text>
                </TouchableOpacity>

                <View style={styles.messageContainer}>
                    <Text style={styles.label}>Message Inbox</Text>
                    <FlatList
                        data={messages}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.messageContainer}>
                                <Text style={styles.messageText}>{item.displayName}: {item.text}</Text>
                            </View>
                        )}
                    />
                </View>

                
            </View>
                
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    container_header:{
        marginTop: 35,
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    icon:{
        width: 30,
        height: 30,

    },

    containerContent:{
        width: "100%",

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

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
    },

    label:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#3772FF',

        marginBottom: 12
    },

    input:{
        backgroundColor: '#F6F6F6',
        width:270,
        height: 40,

        textAlign:'center',

        borderRadius: 8,

        marginBottom: 18

    },

    inputMessage:{

        backgroundColor: '#F6F6F6',
        width:270,
        height: 90,

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

        marginBottom: 40
    },

    btnText:{
        fontSize: 16,
        fontWeight: 'bold',

        color: 'white'
    },

    messageContainer:{
        backgroundColor: "#F6F6F6",
        width:270,
        height: 150,
    },
    messageText:{
        color: "#3772FF",
    }

    
})