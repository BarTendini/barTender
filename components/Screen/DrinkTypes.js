import {SafeAreaView, ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import {Logo,Header} from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";
import DrinkCardTender from "../Card/DrinkCardTender"; //permette di importare le bolle personalizzate
import {DrinksInfo,getTypes} from "../../dati/DrinksInfo";
import DrinkTypeSelection from "../componenti/DrinkTypeSelection";

const DrinkType = ({ navigation }) => {
    console.log("DrinkType");
    const drinkTypes = () => { // definizione funzione che mostra le categorie di bevande
        console.log("drinkTypes");
        const someTypes = getTypes(DrinksInfo)
        return <View style={commonStyles.ViewHome}>
            <ScrollView>
            <FlatList data={someTypes} renderItem={item =>
                <DrinkTypeSelection Drink={item.item} navigation={navigation} />
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
            {drinkTypes()}
        </SafeAreaView>
    )
}

export default DrinkType;


const styles = StyleSheet.create({
    FeedTestoVoto: {
        fontSize: 20,
        textAlign: 'center',
    }
})
