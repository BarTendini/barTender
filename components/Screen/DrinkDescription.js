import React from "react"; //quasi sempre necessario
import {SafeAreaView, TouchableOpacity, View, StyleSheet, Text, Image} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {themeStyles} from "../../styles/theme/ThemeStyles"
import Header from "../componenti/HeaderTender";
import SettingsInfo from "../../dati/SettingsInfo";
import {IconsButton} from "../../dati/Icons";

const DrinkDescription = ({ route, navigation }) => {
    console.log("DrinkDescription");
    const drink = route.params.drink;
    const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0

    const sizeIngrediente = (text) => {
        return (
            <View style={[styles.circle, styles.shadowProp]}>
                <TouchableOpacity>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: "bold",
                        color: drink.textColor ? drink.textColor : 'black'
                    }}>
                        {text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={IconsButton.back} navigation={navigation} bgColor={'#ffcc8b'}/>
            <View style={{ flex: 1, borderWidth: borderWidth, }}>
                <Text style={{ fontSize: 36, textAlign: 'center' }}>
                    {drink.name}
                </Text>
                <Image
                    source={drink.image}
                    style={styles.DrinkImm}
                />

                {/*Immitazione brutta del menu della pizza, poi lo commento... tanto è da mettere in una card*/}
                <View style={{ flexDirection: "row", marginTop: 20, borderWidth: borderWidth }}>
                    <View style={{ flex: 0.3, borderWidth: borderWidth, alignContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold", color: drink.textColor ? drink.textColor : 'black' }}>
                            Quantità
                        </Text>
                    </View>
                    <View style={{ flex: 0.7, borderWidth: borderWidth, alignContent: 'center' }}>
                        <View style={{ flexDirection: "row", alignContent: 'center', alignSelf: 'center', borderWidth: borderWidth }}>
                            {sizeIngrediente("S")}
                            {sizeIngrediente("M")}
                            {sizeIngrediente("B")}
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default DrinkDescription;

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
