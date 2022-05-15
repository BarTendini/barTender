import React from "react"; //quasi sempre necessario
import {SafeAreaView, TouchableOpacity, View, StyleSheet, Text, Image, TouchableOpacityComponent} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {themeStyles} from "../../styles/theme/ThemeStyles"
import Header from "../componenti/HeaderTender";
import SettingsInfo from "../../dati/SettingsInfo";

const InitialSelectorScreen = ({ route, navigation }) => {

    return(
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={1} navigation={navigation} bgColor={'#ffcc8b'}/>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
                    <Text>Trova Locale</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('DrinkTypeScreen')}>
                    <Text>Scegli da bere</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default InitialSelectorScreen;

const styles = StyleSheet.create({
    DrinkImm: {
        justifyContent: "center",
        alignItems: "center",
        height: '30%',
        width: '100%',
        resizeMode: 'contain',
        marginVertical: 10,
        // borderColor: 'black',
        // borderWidth: 3,
    },
    circle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        borderWidth: 0,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {width: -2, height: 4},
    }
});
