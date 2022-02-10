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
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Logo from "../headerTender.js";
import BarSelection from "../BarSelection";
import AwesomeAlert from "react-native-awesome-alerts";

const Home = ({ navigation }) => {
    const [alert, setAlert] = useState(false)
    const [Bars, setBars] = useState([{id: 0, rist: 0, dist: '100m'}, {id: 1, rist: 1, dist: '150m'}, {id: 2, rist: 2, dist: '500m'}, {id: 3, rist: 0, dist: '1km'}])
    const showAlert = () => {
        setAlert( true)
    };

    const hideAlert = () => {
        setAlert(false)
    };

    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Logo icon={2} navigation={navigation} bgColor={'#ffcc8b'} showAlert={showAlert} />
            <View style={commonStyles.ViewHome}>
                <FlatList data={Bars} renderItem={item =>
                    <BarSelection Bar={item.item} />
                }
                />
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
