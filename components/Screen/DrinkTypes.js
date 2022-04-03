import React from "react"; //quasi sempre necessario
import {SafeAreaView, View, StyleSheet, Text, FlatList} from "react-native";
import Header from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import {DrinksInfo,getTypes} from "../../dati/DrinksInfo";
import DrinkTypeSelection from "../componenti/DrinkTypeSelection";
import {themeStyles} from "../../styles/theme/ThemeStyles"

const DrinkType = ({ navigation }) => {
    console.log("DrinkType");
    const drinkTypes = () => { // definizione funzione che mostra le categorie di bevande
        const someTypes = getTypes(DrinksInfo)
        return <View style={commonStyles.ViewHome}>

            <FlatList data={someTypes} renderItem={item =>
                <DrinkTypeSelection type={item.item} navigation={navigation} />
            }
            />

        </View>
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={2} navigation={navigation} bgColor={'#ffcc8b'} />
            <View style={styles.ViewInfo}>
                <Text style={styles.FeedTestoVoto}>Menu: Da Pino</Text>
            </View>
            {drinkTypes()}
        </SafeAreaView>
    )
}

export default DrinkType;


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
