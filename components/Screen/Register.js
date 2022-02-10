import React, {useState} from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import Logo from "../HeaderTender.js";

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
        <SafeAreaView style={commonStyles.AndroidSafeArea}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1,}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                    <Logo icon={1} navigation={navigation} />
                    <View style={commonStyles.ViewAut}>
                        <Text style={commonStyles.titleText}>Registrati</Text>
                        <View style={{padding: 20}}/>
                        <TextInput
                            value={logMail}
                            onChangeText={(value) => setMail(value)}
                            placeholder={"Email"}
                            style={commonStyles.Input}
                        />
                        <View style={{padding: 10}}/>
                        <TextInput
                            value={logUsr}
                            onChangeText={(value) => setUsr(value)}
                            placeholder={"Username"}
                            style={commonStyles.Input}
                        />
                        <View style={{padding: 10}}/>
                        <TextInput
                            value={passText}
                            onChangeText={(value) => setPass(value)}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            style={commonStyles.Input}
                        />
                        <View style={{padding: 10}}/>
                        <View style={styles.Bottoni}>
                            <View style={commonStyles.BottoneView}>
                                <TouchableOpacity
                                    onPress={handleSubmitPress}
                                    style={commonStyles.Bottone}
                                >
                                    <Text style={commonStyles.BottoneText}>Registati</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({
    Bottoni: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
