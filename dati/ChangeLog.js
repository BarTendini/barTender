import React, {useState} from "react";
import {Alert, View, TouchableOpacity, Text, StyleSheet, Platform, Keyboard, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView} from "react-native";

const cha = "bau";

const changes = [
    {version:"0.19.52", nome: "giangi", dataPush: "14/03 12:17", info:"added changelog"},
    {version:"0.19.51", nome: "giangi", dataPush: "14/03 12:17", info:"added changelog"},
    {version:"miao", nome: "miao", dataPush: "miao", info:"miao"}
];
export {changes, cha};


/*
const infoChange = () => {
    console.log("infoChange");
    
        
    if (Platform.OS === 'web') {
        showAlert()
    } else {
        Alert.alert(
            "Change log",
            cha,
            [
                { text: "Ok", }
            ]
        );
    }    
}

export default infoChange;
*/