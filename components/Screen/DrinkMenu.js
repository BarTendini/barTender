import React from "react"; //quasi sempre necessario
import {SafeAreaView, Platform, ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import {Logo,Header} from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import DrinkCardTender from "../Card/DrinkCardTender"; //permette di importare le bolle personalizzate
import {getAvailableAndUnavailableDrinks} from "../../dati/DrinksInfo";
import DrinkSelection from "../componenti/DrinkSelection";
import {themeStyles} from "../../styles/theme/ThemeStyles"


const DrinkMenu = ({ route, navigation }) => {
    const { availableDrinks, unavailableDrinks } = getAvailableAndUnavailableDrinks(route.params.drinks);
    //console.log(unavailableDrinks);

    const drinkSelection = () => { // definizione funzione che mostra le categorie di bevande
        return <View style={commonStyles.ViewHome}>
            <ScrollView>
            <FlatList data={availableDrinks} renderItem={item =>
                <DrinkSelection Drink={item.item} availability={{a:"Disponibile"}} navigation={navigation} />
            }
            />
            <Text style={styles.FeedTestoVoto}> UNAVIABLE DRINKS </Text>
            <FlatList data={unavailableDrinks} renderItem={item =>
                <DrinkSelection Drink={item.item} availability={{a:"Non disponibile"}} navigation={navigation} />
            }
            />
            </ScrollView>
        </View>
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={1} navigation={navigation} bgColor={'#ffcc8b'} />
            <View style={styles.ViewInfo}>
                <Text style={styles.FeedTestoVoto}>Menu: Da Pino</Text>
            </View>
            {drinkSelection()}
        </SafeAreaView>
    )
}

export default DrinkMenu;

const styles = StyleSheet.create({
    FeedTestoVoto: {
        fontSize: 20,
        textAlign: 'center',
        /*padding:20,
        margin:10,
        borderRadius:5,
        backgroundColor:  themeStyles.light.backgroundColor1
    },
    unavailableColor: {
        backgroundColor: "#ccc",
        color:"#222"*/
    }

})
