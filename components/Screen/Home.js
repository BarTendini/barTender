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
import {View, Platform, SafeAreaView, Alert, FlatList} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Logo from "../HeaderTender.js";
import BarSelection from "../BarSelection";
import AwesomeAlert from "react-native-awesome-alerts";
import {Location} from "../Location";

const Home = ({ navigation }) => {
    const [alert, setAlert] = useState(false)
    const [Bars, setBars] = useState([
        {id: 0, rist: 0, nome: 'DaPino', dist: '100m', color: '#5580e6', textColor: 'black'},
        {id: 1, rist: 1, nome: 'DaDino', dist: '150m', color: '#ffcc8b'},
        {id: 2, rist: 2, nome: 'DaGino', dist: '500m', color: 'red', textColor: 'white'},
        {id: 3, rist: 0, nome: 'DaPino', dist: '1km', color: '#5580e6', textColor: 'black'}
    ])
    const [showBars, setShowBars] = useState(false)
    const showAlert = () => {
        setAlert( true)
    };

    const hideAlert = () => {
        setAlert(false)
    };
    const logOut = () => {
        if (Platform.OS === 'web') {
            showAlert()
        } else {
            Alert.alert(
                "Logout",
                "Sei sicuro? Vuoi eseguire un logout?",
                [
                    {
                        text: "Cancella",
                        style: "cancel"
                    },
                    { text: "Conferma", onPress: () => { navigation.replace('Autenticazione') }}
                ]
            );
        }
    }
    const posizioneOttenuta = () => {
        setShowBars(true)
    }
    const barList = () => {
        if (showBars)
            return <View style={commonStyles.ViewHome}>
                <FlatList data={Bars} renderItem={item =>
                    <BarSelection Bar={item.item} />
                }
                />
            </View>
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Logo icon={2} navigation={navigation} bgColor={'#ffcc8b'} alertFun={logOut} />
            <Location animEnd={posizioneOttenuta}/>
            {barList()}
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
