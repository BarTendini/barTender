import React, {useState} from "react"; //quasi sempre necessario
import {TouchableOpacity, SafeAreaView, Platform, ScrollView, View, StyleSheet, Text} from "react-native";
import Header from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import DrinkSelection from "../componenti/DrinkSelection";
import {themeStyles} from "../../styles/theme/ThemeStyles"
import {IconsButton} from "../../dati/IconsButton";
import {DrinksInfo, getTypes, getDrinksOfType, getAvailableAndUnavailableDrinks} from "../../dati/DrinksInfo";
import {AppContext} from "../../AppContext";
import {DrinkCardTender} from "../Card/TenderCard";

const DrinkMenu = ({route, navigation}) => {
    const avaiableDrinkTypes = getTypes(DrinksInfo);
    const [selectedTypeOfDrink, setSelectedTypeOfDrink] = useState(avaiableDrinkTypes[1].type)
    const {
        availableDrinks,
        unavailableDrinks
    } = getAvailableAndUnavailableDrinks(getDrinksOfType(DrinksInfo, selectedTypeOfDrink));


    const DrinkTypeSelection = ({type}) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedTypeOfDrink(type)}
                style={type === selectedTypeOfDrink ? styles.SelectedFilterButton : styles.FilterButton}
            >
                <Text style={type === selectedTypeOfDrink ? styles.SelectedFiletrText : styles.FiletrText}>{type}</Text>

            </TouchableOpacity>
        );
    };


    const {selBarName, setSelBarName} = React.useContext(AppContext);
    console.log("DrinkType - selected bar:", selBarName)

    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={buttonToShow()} navigation={navigation} bgColor={'#ffcc8b'}/>
            <View style={styles.ViewInfo}>
                <Text style={styles.FeedTestoVoto}>Menu: {selBarName}</Text>
            </View>
            <ScrollView style={{marginTop:-20}}>

                <DrinkCardTender title={"Tipo di Drink:"}>
                    <View>
                        <ListDrinkType avaiableDrinkTypes={avaiableDrinkTypes} callbackfn={(item, index) => {
                            return <DrinkTypeSelection type={item.type} key={index}/>
                        }}/>
                    </View>
                </DrinkCardTender>

                <ListDrinkAvailable availableDrinks={availableDrinks} callbackfn={(item, index) => {
                    return <DrinkSelection Drink={item} availability={true} navigation={navigation} key={index}/>
                }}/>

                <ListUnavailableDrink unavailableDrinks={unavailableDrinks} callbackfn={(item, index) => {
                    return <DrinkSelection Drink={item} availability={false} navigation={navigation} key={index}/>
                }}/>

            </ScrollView>

        </SafeAreaView>
    )
};

export default DrinkMenu;



function ListDrinkType(props) {
    return <>{props.avaiableDrinkTypes.map(props.callbackfn)}</>;
}

function ListDrinkAvailable(props) {
    return <>
        {props.availableDrinks.length > 0 && <View style={styles.ViewInfo}>
            <Text style={styles.FeedTestoVoto}>AVIABLES DRINKS</Text>
        </View>}
        {props.availableDrinks.map(props.callbackfn)}
    </>;
}

function ListUnavailableDrink(props) {
    return <>
        {props.unavailableDrinks.length > 0 && <Text style={[styles.FeedTestoVoto, themeStyles.unavailableColor]}>
            UNAVIABLE DRINKS
        </Text>}
        {props.unavailableDrinks.map(props.callbackfn)}
    </>;
}


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


