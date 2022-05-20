import React, {useState} from "react"; //quasi sempre necessario
import {TouchableOpacity, SafeAreaView, Platform, ScrollView, View, StyleSheet, Text, FlatList } from "react-native";
import Header from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import DrinkSelection from "../componenti/DrinkSelection";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import { IconsButton } from "../../dati/IconsButton";
import { DrinksInfo, getTypes, getDrinksOfType, getAvailableAndUnavailableDrinks} from "../../dati/DrinksInfo";
import { UserContext } from "../../UserContext";



const DrinkMenu = ({ route, navigation }) => {
    const avaiableDrinkTypes = getTypes(DrinksInfo);
    const [selectedTypeOfDrink, setSelectedTypeOfDrink] = useState(avaiableDrinkTypes[0].type)


    //console.log(unavailableDrinks);
    const drinkSelection = (selectedTypeOfDrink) => { // definizione funzione che mostra le categorie di bevande
        console.log(selectedTypeOfDrink);
        const { availableDrinks, unavailableDrinks } = getAvailableAndUnavailableDrinks(getDrinksOfType(DrinksInfo, selectedTypeOfDrink));
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


    const DrinkTypeSelection = ({ type }) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedTypeOfDrink(type)}
                style={type == selectedTypeOfDrink ? styles.SelectedFilterButton : styles.FilterButton}
            >
                <Text style={type == selectedTypeOfDrink ? styles.SelectedFiletrText : styles.FiletrText}>{type}</Text>

            </TouchableOpacity>
        );
    };


    const { selBarName, setSelBarName } = React.useContext(UserContext);
    console.log("DrinkType - selected bar:", selBarName)

    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }
    const drinkTypes = () => { // definizione funzione che mostra le categorie di bevande

        return <View style={commonStyles.ViewHome}>

            <FlatList data={avaiableDrinkTypes} renderItem={item =>
                DrinkTypeSelection(item.item)
            } />

        </View>
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={buttonToShow()} navigation={navigation} bgColor={'#ffcc8b'} />
            <View style={styles.ViewInfo}>
                <Text style={styles.FeedTestoVoto}>Menu: {selBarName}</Text>
            </View>
            <ScrollView>
                {drinkTypes()}
                <View style={styles.ViewInfo}>
                    <Text style={styles.FeedTestoVoto}>AVIABLES DRINKS</Text>
                </View>
                {drinkSelection(selectedTypeOfDrink)}

            </ScrollView>
        </SafeAreaView>
    )
};

export default DrinkMenu; // permette di esportare la funzione ChangeLogScreen e quuindi la pagina (una sorta di public per gli oggetti)


// crea una serie di stili che potranno essere usati dentro i tag/components di questo file come PROPietà
const changeLogStyles = StyleSheet.create({
    Bottoni: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    InfoTextLeft: {
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold'
    },
    InfoTextRight: {
        textAlign: 'right', // <-- the magic
        fontWeight: 'bold'
    }
});

const wow = StyleSheet.create({ mio: { backgroundColor: themeStyles.light.backgroundColor2 } });// tentativo di gestione tema

const styles = StyleSheet.create({
    FeedTestoVoto: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: themeStyles.light.backgroundColor1
    },
    FiletrText: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10
    },
    FilterButton: {
        width: '100%',
        borderWidth: 5,
        borderColor: themeStyles.light.backgroundColor1,
        borderRadius: 50,
        marginTop: 10
    },
    SelectedFiletrText: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10
    },
    SelectedFilterButton: {
        width: '100%',
        borderWidth: 5,
        backgroundColor: themeStyles.light.backgroundColor1,
        borderColor: themeStyles.light.backgroundColor2,
        borderRadius: 50,
        marginTop: 10
    }
})


