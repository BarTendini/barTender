/*import React, {useState} from "react";
import {View, Button, Text} from "react-native";

const Home = ({ navigation }) => {
    const [BarList, setBarList] = useState('')
    return (
        <View>
            <Text>Bar</Text>
        </View>
    );
};*/

import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Logo from "../headerTender.js";
import AwesomeAlert from "react-native-awesome-alerts";

const Home = ({ navigation }) => {
    const [alert, setAlert] = useState(false)
    const showAlert = () => {
        setAlert( true)
    };

    const hideAlert = () => {
        setAlert(false)
    };

    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Logo icon={2} navigation={navigation} bgColor={'#ffcc8b'} showAlert={showAlert} />
            <View style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                marginHorizontal: 10,
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        marginBottom: 16,
                    }}>
                    Fratm
                </Text>
            </View>

            <AwesomeAlert
                show={alert}
                showProgress={false}
                title="Logout"
                message="Sei sicuro? Vuoi eseguire un logout?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancella"
                confirmText="Conferma"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    hideAlert()
                    navigation.replace('Autenticazione');
                }}
                overlayStyle={{height: '100%'}}
                alertContainerStyle={{height: '100%', width: '100%', alignSelf: 'center'}}
            />
        </SafeAreaView>
    );
};

export default Home;
