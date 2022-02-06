import React, {useState} from "react";
import {View, Button, StyleSheet, SafeAreaView} from "react-native";
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
        <SafeAreaView style={styles.Login}>
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
                    <Button
                        title="Login"
                        onPress={handleSubmitPress}
                    />
                </View>
                <View style={styles.BottoneView}>
                    <Button
                        title="Registrati"
                        onPress={() => navigation.navigate('Registrati')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    Login: {
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
