import React, {useState} from "react";
import {View, Button, TouchableOpacity, StyleSheet} from "react-native";
import { TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
    const [logUsr, setUsr] = useState('')
    const [passText, setPass] = useState('')
    const handleSubmitPress = () => {
        //setErrortext('');
        if (logUsr.trim() === "") {
            console.warn("Please inserisci l'username");
            return;
        }
        if (passText.trim() === "") {
            console.warn('Please inserisci la password');
            return;
        }
        navigation.replace('DrawerNavigationRoutes');
    }
    return (
        <View>
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
                <Button
                    title="Login"
                    onPress={handleSubmitPress}
                    style={styles.Bottone}
                />
                <Button
                    title="Registrati"
                    onPress={() => navigation.navigate('Registrati')}
                    style={styles.Bottone}
                />
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    Bottoni: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 5,
    },
    Bottone: {
        height: 10,
        paddingLeft: 5
    }
});
