import React from "react"; //quasi sempre necessario
import {View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native"; // quasi sempre necessario anche se raramente servono tutti questi import
import commonStyles from "../../styles/CommonStyles"; //importa stili comuni
import {changes, version} from "../../dati/ChangeLog"; //importa gli oggetti da Change log con i log
import DrinkCardTender from "../Card/DrinkCardTender"; //permette di importare le bolle personalizzate
import Header from "../componenti/HeaderTender.js";
import {themeStyles} from "../../styles/theme/ThemeStyles";
import {IconsButton} from "../../dati/Icons";

const ChangeLogScreen = ({ navigation }) => { //funzione che permette di renderizzare

    //permette di renderizzare un singolo log (la magia la spiegherà max)
    const renderItem = ({ item }) => (

        <DrinkCardTender title={item.version}>
            <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.infoTextLeft}>
                            committer: {item.nome}
                        </Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
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

    // permette di fare il log su console (serve per "debuggare")
    console.log("change log page");

    // ogni funzione per la renderizzazione di una pagina deve restituire un oggetto disegnabile come una View o una Text
    return (
        <SafeAreaView style={[commonStyles.AndroidSafeArea, wow.mio]}>
            <Header icon={IconsButton.back} navigation={navigation} bgColor= {themeStyles.light.backgroundColor1} />
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
};

export default ChangeLogScreen; // permette di esportare la funzione ChangeLogScreen e quuindi la pagina (una sorta di public per gli oggetti)


// crea una serie di stili che potranno essere usati dentro i tag/components di questo file come PROPietà
const styles = StyleSheet.create({
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

const wow = StyleSheet.create({ mio:{backgroundColor:themeStyles.light.backgroundColor2}});// tentativo di gestione tema
