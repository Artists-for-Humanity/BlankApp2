import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Intro = () => {   
    const [name, setName]= useState();
    const handleOnChangeText = (text) => {
        if (text.length <=20) {
            setName(text);
        }
    };
    const handleSubmit = async () => {
        const user = { name: name}
        await AsyncStorage.setItem('user', JSON.stringify(user))
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./BLANK.png')} />
            <Text style={styles.greet}>To get started, please enter your name:</Text>
            <TextInput 
                value={name} 
                onChangeText={handleOnChangeText} 
                style={styles.userName}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
        alignItems: 'center',
    },
    logo: {
        marginTop: 300,
        width: 260,
        height: 80,
    },
    greet: {
        marginTop: 25,
        marginLeft: -15,
        color: 'white',
        fontSize: 20,
    },
    userName: {
        width: 350,
        height: 50,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        borderColor: 'white',
        fontSize: 25,
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center',
    },
    submitButton: {
        width: 80,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#007AFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})

export default Intro;