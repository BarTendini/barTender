import React, {useState} from 'react';
import {View, Platform, SafeAreaView, Alert, FlatList} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender.js";
import BarSelection from "../componenti/BarSelection";
import AwesomeAlert from "react-native-awesome-alerts";
import {Location} from "../componenti/Location";
import BarsInfo from "../../dati/BarsInfo"
import {IconsButton} from "../../dati/IconsButton";

const Home = ({ navigation }) => { // funzione generatrice della schermata home
    const [alert, setAlert] = useState(false) // ??? qualcosa per lo stato
    const [showBars, setShowBars] = useState(false) // ??? qualcosa per lo stato
    const showAlert = () => { // definizione funzione che mostra l' allert
        setAlert( true)
    };
    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }
    const hideAlert = () => { // definizione funzione che nasconde l' allert
        setAlert(false)
    };
    const logOut = () => { // definizione funzione per il logout
        if (Platform.OS === 'web') { // controlla la piattaforma (web android ios)
            showAlert() // attiva l'AwesomeAllert per il web
        } else {
            Alert.alert( // funzione allerta che prende titolo, testo e bottoni come parametri
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
    const posizioneOttenuta = () => { // ???
        setShowBars(true)
    }
    const barList = () => { // definizione funzione che mostra i bar
        if (showBars) // se non è nullo restituisce un component di tipo View con flatList e componente fatto da noi "BarSelection"
            return <View style={commonStyles.ViewHome}>
                <FlatList data={BarsInfo} renderItem={item =>
                    <BarSelection Bar={item.item} navigation={navigation} />
                }
                />
            </View>
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={buttonToShow()} navigation={navigation} bgColor={'#ffcc8b'} alertFun={logOut} />
            <Location animEnd={posizioneOttenuta}/>
            {barList()}
            <AwesomeAlert
                show={alert}
                showProgress={false}
                title="Logout"
                message="Sei sicuro? Vuoi eseguire uno logout?"
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

/*
<AwesomeAlert
                show={alert}
                showProgress={false}
                title="Logout"
                message="Sei sicuro? Vuoi eseguire uno logout?"
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
*/
