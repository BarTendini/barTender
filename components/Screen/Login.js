import React, {useState} from "react";
import {View, TouchableOpacity, Text, StyleSheet, Platform, Keyboard, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView} from "react-native";
import Header from "../componenti/HeaderTender.js";
import commonStyles from "../../styles/CommonStyles";
import {version, changes} from "../../dati/ChangeLog";
import {themeStyles,themeStylesSheet} from "../../styles/theme/ThemeStyles";
import {UserContext} from "../../UserContext";
import {IconsButton} from "../../dati/IconsButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";


const Login = ({ navigation }) => {
    const [logUsr, setUsr] = useState('');
    const [passText, setPass] = useState('');
    const {user, setUser} = React.useContext(UserContext);

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
        setUser(logUsr);
        navigation.replace('DrawerNavigationRoutes');
    }




    return (
        <SafeAreaView style={[commonStyles.AndroidSafeArea, themeStylesSheet.light1]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1,}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                    <Header icon={IconsButton.none} />
                    <View style={commonStyles.ViewAut}>
                        <Text style={commonStyles.titleText}>Login</Text>
                        <View style={{paddingTop: 20}}/>
                        <TextInput
                            value={logUsr}
                            onChangeText={(value) => setUsr(value)}
                            placeholder={"Username"}
                            style={commonStyles.Input}
                        />
                        <View style={{paddingTop: 10}}/>
                        <TextInput
                            value={passText}
                            onChangeText={(value) => setPass(value)}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            style={commonStyles.Input}

                        />
                        <View style={{paddingTop: 10}}/>
                        <View style={styles.Bottoni}>
                            <View style={commonStyles.BottoneView}>
                                <TouchableOpacity
                                    onPress={handleSubmitPress}
                                    style={commonStyles.Bottone}
                                >
                                    <Text style={commonStyles.BottoneText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={commonStyles.BottoneView}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Registrati')}
                                    style={commonStyles.Bottone}
                                >
                                    <Text style={commonStyles.BottoneText}>Registati</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={commonStyles.Bottom}><Text>Build: {version} in data: {changes[0].dataPush}</Text>
            <TouchableOpacity onPress={() => navigation.push('ChangeLog')} style={styles.ViewInfoSubTitle}>
                <Text style={ [styles.TextInfoTitle, {color: '#007fff'}]}>changeLog</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    Bottoni: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

// Todo simo: aggiungere il pulsante finto
// <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
//     Login with Facebook
// </FontAwesome.Button>