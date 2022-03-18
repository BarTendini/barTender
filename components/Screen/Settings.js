import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import {Logo, Header} from "../componenti/HeaderTender.js";
import {themeStyles} from "../../styles/theme/ThemeStyles";
import settingsInfo from "../../dati/SettingsInfo"; //importa gli oggetti da settings info con le info
import { FlatList } from "react-native-gesture-handler";
import CardTender from "../Card/CardTender"; //permette di importare le bolle personalizzate


const Settings = ({ navigation }) => {
    
    const cardRenderSelector = ({item}) =>{
        console.log("Settings->cardRenderSelector.js");
        return (item.settables ? cardRenderGroupItem({item}) : cardRenderItem({item}));
    };
    
    const cardRenderItem = ({ item }) => (

        <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
            <View style={{ flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.infoTextLeft}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={styles.infoTextRight}>
                           {item.interaction}
                        </Text>
                    </View>
                </View>
        </View>
    );

    const cardRenderGroupItem = ({ item }) => (
        <CardTender title={item.title}>
            <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
            <FlatList
                    data={item.settables}
                    renderItem={cardRenderSelector}
                    keyExtractor={item => item.id}
                />
            </View>
        </CardTender>
    );
        
    console.log("Settings.js");
    return (
        <SafeAreaView style={commonStyles.SafeAreaAndroid}>
            <Header icon={1} navigation={navigation} bgColor= {themeStyles.light} />
            <View>
                <Text style={commonStyles.titleText}>
                    settings
                </Text>
                <FlatList
                    data={settingsInfo}
                    renderItem={cardRenderSelector}
                    keyExtractor={item => item.id}
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