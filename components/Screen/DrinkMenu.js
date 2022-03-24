import {SafeAreaView, ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import {Logo,Header} from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import DrinkCardTender from "../Card/DrinkCardTender"; //permette di importare le bolle personalizzate
import {DrinksInfo,getAvailableAndUnavailableDrinks} from "../../dati/DrinksInfo";
import DrinkSelection from "../componenti/DrinkSelection";

const DrinkMenu = ({ navigation }) => {
    const drink = getAvailableAndUnavailableDrinks(DrinksInfo);
    const availableDrinks = drink[0];
    const unavailableDrinks = drink[1];
    console.log(unavailableDrinks);

    const drinkSelection = () => { // definizione funzione che mostra le categorie di bevande
        return <View style={commonStyles.ViewHome}>
            <ScrollView>
            <FlatList data={availableDrinks} renderItem={item =>
                <DrinkSelection Drink={item.item} navigation={navigation} />
            }
            />
            <Text style={styles.FeedTestoVoto}> unavailable Drinks</Text>
            <FlatList data={unavailableDrinks} renderItem={item =>
                <DrinkSelection Drink={item.item} navigation={navigation} />
            }
            />
            </ScrollView>
        </View>
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={2} navigation={navigation} bgColor={'#ffcc8b'} />
            <View style={styles.ViewInfo}>
                <Text style={styles.FeedTestoVoto}>Da Pino</Text>
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
    }
})
