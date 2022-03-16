import React, {useState} from 'react';
import {View, Platform, SafeAreaView, Alert, FlatList} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import {Logo} from "../componenti/HeaderTender.js";
import BarSelection from "../componenti/BarSelection";
import AwesomeAlert from "react-native-awesome-alerts";
import {Location} from "../componenti/Location";
import BarsInfo from "../../dati/BarsInfo"

const Home = ({ navigation }) => {
    const [alert, setAlert] = useState(false)
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
                <FlatList data={BarsInfo} renderItem={item =>
                    <BarSelection Bar={item.item} navigation={navigation} />
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
