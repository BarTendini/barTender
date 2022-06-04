import React, {useState} from "react";
import {Alert, Platform, SafeAreaView, StatusBar, View} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {IconsButton} from "../../dati/IconsButton";
import Header from "./BannerTender";
import AwesomeAlert from "react-native-awesome-alerts";


// A quanto pare children è una parola speciale che indica proprio i figli
const TenderFragment = ({children, icon,  navigation, noGradient, bgColor}) => {
    const [alert, setAlert] = useState(false)
    const showAlert = () => {
        setAlert( true)
    };

    const hideAlert = () => {
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

    return (
        <View style={{flex:1 }}>
            <SafeAreaView style={{ flex:0, backgroundColor: '#ffcc8b' }} />
            <StatusBar hidden={false} backgroundColor="#ffcc8b" />
            <SafeAreaView style={[commonStyles.AndroidHomeSafeArea,{backgroundColor: bgColor? bgColor:'#ffffff'}]} >
                <Header
                    icon={getIcon(icon)}
                    navigation={navigation}
                    bgColor={'#ffcc8b'}
                    noGradient={!!noGradient}
                    alertFun={logOut}
                />
                {children}
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
        </View>
    )
}

const getIcon=(str)=>{
    if(str === IconsButton.logout.name){ //name: 'logout',
        return IconsButton.logout
    }
    else if(str === IconsButton.menu.name){ //name: 'menu',
        return IconsButton.logout
    }else if(str === IconsButton.none.name){ //name: 'none',
        return IconsButton.logout
    }
    //name: 'back',
    return IconsButton.back
}

export default TenderFragment;