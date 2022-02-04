import React, {useState} from "react";
import {View, Button} from "react-native";
import { TextInput } from "react-native-paper";

const Register = ({ navigation }) => {
    const [logMail, setMail] = useState('')
    const [logUsr, setUsr] = useState('')
    const [passText, setPass] = useState('')
    const handleSubmitPress = () => {
        if (logMail.trim() === "") {
            console.warn('Please inserisci la mail');
            return;
        }
        if (logUsr.trim() === "") {
            console.warn('Please inserisci un username');
            return;
        }
        if (passText.trim() === "") {
            console.warn('Please inserisci la password');
            return;
        }
        alert('Registrato con successo. Fai il login per accedere');
        navigation.goBack();
    }
    return (
        <View>
            <TextInput
                value={logMail}
                onChangeText={(value) => setMail(value)}
                label={"Email"}
                left={<TextInput.Icon name="mail" />}
            />
            <TextInput
                value={logUsr}
                onChangeText={(value) => setUsr(value)}
                label={"Username"}
                left={<TextInput.Icon name="account" />}
            />
            <TextInput
                value={passText}
                onChangeText={(value) => setPass(value)}
                label={"Password"}
                secureTextEntry
                left={<TextInput.Icon name="form-textbox-password" />}
            />
            <Button title={"Registrati"} onPress={handleSubmitPress} />
        </View>
    );
};

export default Register;
