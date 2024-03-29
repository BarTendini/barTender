import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Alert} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {AppContext} from "../../AppContext";

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
    const [logUsr, setUsr] = useState('Mamusa');
    const [alert, setAlert] = useState(false);
    const {user, setUser} = React.useContext(AppContext);

    const showAlert = () => {
        if (Platform.OS === 'web') { // controlla la piattaforma (web android ios)
            setAlert( true) // attiva l'AwesomeAllert per il web
        } else {
            Alert.alert( // funzione allerta che prende titolo, testo e bottoni come parametri
                "Logout",
                "Sei sicuro? Vuoi eseguire un logout?",
                [
                    {
                        text: "Cancella", 
                        style: "cancel"
                    },
                    { text: "Conferma", onPress: () => { props.navigation.replace('Autenticazione') }}
                ]
            );
        }
    };

    const hideAlert = () => {
        setAlert(false)
    };
    return (
        <View style={stylesSidebar.sideMenuContainer}>
            <View style={stylesSidebar.profileHeader}>
                <View style={stylesSidebar.profileHeaderPicCircle}>
                    <Text style={{fontSize: 25, color: '#307ecc'}}>
                        {user.charAt(0)}
                    </Text>
                </View>
                <Text style={stylesSidebar.profileHeaderText}>
                    {user}
                </Text>
            </View>
            <View style={stylesSidebar.profileHeaderLine} />

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={({color}) =>
                        <Text style={{color: '#d8d8d8'}}>
                            Logout
                        </Text>
                    }
                    onPress={() => {
                        showAlert()
                    }}
                />
            </DrawerContentScrollView>
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
                    props.navigation.replace('Autenticazione');
                }}
                overlayStyle={{height: '100%'}}
                alertContainerStyle={{height: '100%', width: '100%', alignSelf: 'center'}}
            />
        </View>
    );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F78764',
        paddingTop: 40,
        color: 'white',
    },
    profileHeader: {
        flexDirection: 'row',
        backgroundColor: '#F78764',
        padding: 15,
        textAlign: 'center',
    },
    profileHeaderPicCircle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        color: 'white',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileHeaderText: {
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    profileHeaderLine: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor: '#e2e2e2',
        marginTop: 15,
    },
});
