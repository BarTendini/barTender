import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import {Logo, Header} from "../componenti/HeaderTender.js";
import {themeStyles} from "../../styles/theme/ThemeStyles";
import {SettingsInfo} from "../../dati/SettingsInfo"; //importa gli oggetti da settings info con le info
import { FlatList } from "react-native-gesture-handler";
import CardTender from "../Card/CardTender"; //permette di importare le bolle personalizzate


const Settings = ({ navigation }) => {
    
    const cardRenderSelector = ({item}) =>{
        console.log("Settings->cardRenderSelector.js");
        return (item.settables ? cardRenderGroupItem(item) : cardRenderItem(item));
    };
    
    const cardRenderItem = ({ item }) => (

        <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={styles.infoTextLeft}>
                        {item.nome}
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.infoTextRight}>
                        dataPush: {item.dataPush}
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
            <View style={commonStyles.ViewHome}>
                <Text style={commonStyles.titleText}>
                    "Settings"
                </Text>
                <FlatList
                    data={SettingsInfo}
                    renderItem={cardRenderSelector}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Settings;
