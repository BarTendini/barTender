import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/BannerTender.js";
import {themeStyles} from "../../styles/theme/ThemeStyles";
import settingsInfo from "../../dati/SettingsInfo"; //importa gli oggetti da settings info con le info
import DrinkCardTender from "../Card/DrinkCardTender";
import CardTender from "../Card/DrinkCardTender";
import {IconsButton} from "../../dati/IconsButton"; //permette di importare le bolle personalizzate
import TenderFragment from "../componenti/TenderFragment";

const Settings = ({ navigation }) => {

    // Ho notato un bug nel burger menu, quando seleziono un elemento rimane tutto scuro
    // Succedeva anche prima o è un mio problema?


    const cardRenderSelector = ({item}) => {
        return (item.settables ? cardRenderGroupItem({item}) : cardRenderItem({item}));
    };

    const cardRenderGroupItem = ({item}) => {
        // console.log("Sono il gruppo con id: " + item.id) ho debuggatto così se ti può interessare
        // if (item.id === 2) console.log(item); Non so se si possa fare senza le parentesi graffe però
        return (
            <DrinkCardTender title={item.title}>
                <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
                    <FlatList
                        data={item.settables}
                        renderItem={cardRenderSelector}

                    />
                </View>
            </DrinkCardTender>
        )
    }

    const cardRenderItem = ({item}) => {
        return (
            <View style={{flexDirection: 'column', margin: 10}}>
                    {item.interaction(item)}
            </View>
        )
    }

    console.log("Settings.js");

    return (
        <TenderFragment navigation={navigation}>
            <View style={{flex: 1}}>
                <Text style={commonStyles.titleText}>
                    settings
                </Text>
                <FlatList
                    data={settingsInfo}
                    renderItem={cardRenderSelector}
                />
            </View>
        </TenderFragment>
    );
};


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
