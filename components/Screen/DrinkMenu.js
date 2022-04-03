import React from "react"; //quasi sempre necessario
import {SafeAreaView, Platform, ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import Header from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import {getAvailableAndUnavailableDrinks} from "../../dati/DrinksInfo";
import DrinkSelection from "../componenti/DrinkSelection";
import {themeStyles} from "../../styles/theme/ThemeStyles"


const DrinkMenu = ({ route, navigation }) => {
    const { availableDrinks, unavailableDrinks } = getAvailableAndUnavailableDrinks(route.params.drinks);
    //console.log(unavailableDrinks);
    const drinkSelection = () => { // definizione funzione che mostra le categorie di bevande
        return <View style={commonStyles.ViewHome}>
                <FlatList
                    data={availableDrinks} renderItem={item =>
                        <DrinkSelection Drink={item.item} availability={true} navigation={navigation} />
                    }
                    ListFooterComponent={
                        <FlatList ListHeaderComponent={
                            <Text style={[styles.FeedTestoVoto, themeStyles.unavailableColor]}>
                                UNAVIABLE DRINKS
                            </Text>
                        }
                        data={unavailableDrinks} renderItem={item =>
                            <DrinkSelection Drink={item.item} availability={false} navigation={navigation} />
                        }
                        />
                    }
                />
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
        padding:20,
        margin:10,
        borderRadius:5,
        backgroundColor:  themeStyles.light.backgroundColor1
    }

})
