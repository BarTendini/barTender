import React, {useState} from "react"; //quasi sempre necessario
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native"; // quasi sempre necessario anche se raramente servono tutti questi import
import commonStyles from "../../styles/CommonStyles"; //importa stili comuni
import { changes, version } from "../../dati/ChangeLog"; //importa gli oggetti da Change log con i log
import DrinkCardTender from "../Card/DrinkCardTender"; //permette di importare le bolle personalizzate
import Header from "../componenti/HeaderTender.js";
import { themeStyles } from "../../styles/theme/ThemeStyles";
import { IconsButton } from "../../dati/IconsButton";
import MainMenu from "../componenti/MainMenu";

//import per sandbox
import { DrinksInfo, getTypes, getDrinksOfType, getAvailableAndUnavailableDrinks} from "../../dati/DrinksInfo";
import { UserContext } from "../../UserContext";
import { TouchableOpacity} from "react-native";
import DrinkSelection from "../componenti/DrinkSelection";
import { ScrollView } from "react-native-gesture-handler";



const ChangeLogScreen = ({ navigation }) => { //funzione che permette di renderizzare

    //permette di renderizzare un singolo log (la magia la spiegherà max)
    const renderItem = ({ item }) => (

        <DrinkCardTender title={item.version}>
            <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={styles.infoTextLeft}>
                            committer: {item.nome}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={styles.infoTextRight}>
                            dataPush: {item.dataPush}
                        </Text>
                    </View>
                </View>
                <Text>
                    {item.info}
                </Text>
            </View>
        </DrinkCardTender>
    );
    /**
     * abilita la sandBox quando true
     */
    const needForSandbox = false;

    if (!needForSandbox) {
        // permette di fare il log su console (serve per "debuggare")
        console.log("change log page");

        // ogni funzione per la renderizzazione di una pagina deve restituire un oggetto disegnabile come una View o una Text
        return (
            <SafeAreaView style={[commonStyles.AndroidSafeArea, wow.mio]}>
                <Header icon={IconsButton.back} navigation={navigation} bgColor={themeStyles.light.backgroundColor1} />
                <View style={commonStyles.ViewHome}>
                    <Text style={commonStyles.titleText}>
                        {version}
                    </Text>
                    <FlatList
                        data={changes}
                        renderItem={renderItem}
                        keyExtractor={item => item.version}
                    />
                </View>
            </SafeAreaView>
        );
    }
    /**************************************************************************************
     * sandbox page
     * 
     */     
    else {
        console.log("change log page as sandbox");
        
        return (
            <SafeAreaView style={[commonStyles.AndroidSafeArea, wow.mio]}>
                <Header icon={IconsButton.back} navigation={navigation} bgColor={themeStyles.light.backgroundColor1} />
                <View style={commonStyles.ViewHome}>
                    <Text style={commonStyles.titleText}>
                        change log page as sandbox
                    </Text>                   
                </View>
            </SafeAreaView>
        );
    }
};

export default ChangeLogScreen; // permette di esportare la funzione ChangeLogScreen e quuindi la pagina (una sorta di public per gli oggetti)


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
        padding:10
    },
    FilterButton:{ 
        width: '100%',
        borderWidth:5,
        borderColor: themeStyles.light.backgroundColor1,
        borderRadius: 50,
        marginTop: 10
    },
    SelectedFiletrText: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 24,
        padding:10
    },
    SelectedFilterButton:{ 
        width: '100%',
        borderWidth:5,
        backgroundColor: themeStyles.light.backgroundColor1,
        borderColor: themeStyles.light.backgroundColor2,
        borderRadius: 50,
        marginTop: 10
    }
})

