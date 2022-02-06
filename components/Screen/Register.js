import React, {useState} from "react";
import {View, Button, StyleSheet, SafeAreaView} from "react-native";
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
        <SafeAreaView style={styles.Registrati}>
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
            <View style={styles.Bottoni}>
                <View style={styles.BottoneView}>
                    <Button title={"Registrati"} onPress={handleSubmitPress} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({
    Registrati: {
        flex: 1,
    },
    Bottoni: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    BottoneView: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10
    },
});
