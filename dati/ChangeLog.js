import React, {useRef, useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Platform} from 'react-native';


const changes = [
    {version:"0.19.51", nome: "giangi", dataPush: "14/03 12:17", info:"added changelog"},
    {version:"miao", nome: "miao", dataPush: "miao", info:"miao"}
] 
const cha = 'miao';

const infoChange = () => {
    if (Platform.OS === 'web') {
        showAlert()
    } else {
        Alert.alert(
            "Change log",
            cha,
            [
                {text: "Ok",}
            ]
        );
    }
}