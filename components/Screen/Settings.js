import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView, Switch} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import {Logo, Header} from "../componenti/HeaderTender.js";
import {themeStyles} from "../../styles/theme/ThemeStyles";
import settingsInfo from "../../dati/SettingsInfo"; //importa gli oggetti da settings info con le info
import { FlatList } from "react-native-gesture-handler";
import CardTender from "../Card/CardTender"; //permette di importare le bolle personalizzate


const Settings = ({ navigation }) => {

    // Ho notato un bug nel burger menu, quando seleziono un elemento rimane tutto scuro
    // Succedeva anche prima o è un mio problema?


    // const cardRenderSelector = ({item}) => {
    //     return (item.settables ? cardRenderGroupItem(item) : cardRenderItem(item));
    // };

    const cardRenderGroupItem = ({item}) => {
        // console.log("Sono il gruppo con id: " + item.id) ho debuggatto così se ti può interessare
        // if (item.id === 2) console.log(item); Non so se si possa fare senza le parentesi graffe però
        return (
            <CardTender title={item.title}>
                <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
                    <FlatList
                        data={item.settables}
                        renderItem={cardRenderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </CardTender>
        )
    }

    const cardRenderItem = ({item}) => {
        // console.log(item.id)
        return (
            <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 3, borderColor: 'black'}}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.infoTextLeft}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        {item.interaction}
                    </View>
                </View>
            </View>
        )
    }

    console.log("Settings.js");
    return (
        <SafeAreaView style={commonStyles.AndroidSafeArea}>
            <Header icon={1} navigation={navigation} bgColor= {themeStyles.light} />
            <View style={{flex: 1, borderWidth: 3, borderColor: "black"}}>
                <Text style={commonStyles.titleText}>
                    settings
                </Text>
                <FlatList
                    data={settingsInfo}
                    renderItem={cardRenderGroupItem}
                />
            </View>
        </SafeAreaView>
    );
};

//           <Header icon={1} navigation={navigation} bgColor= {themeStyles.light} />

/**
 * <FlatList
                    data={SettingsInfo}
                    renderItem={cardRenderSelector}
                    keyExtractor={item => item.id}
                />
 */

export default Settings;

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
