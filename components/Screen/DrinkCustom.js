import React from "react";
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender";
import {IconsButton} from "../../dati/IconsButton";
import {SafeAreaView, Text, View} from "react-native-web";
import SettingsInfo from "../../dati/SettingsInfo";
import {CocktailHtml, CocktailStyles} from "../webview/CocktailStyles";
import {WebView} from "react-native-webview";
import {Dimensions} from "react-native";

export const DrinkCustom = ({route, navigation}) => {
    const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0
    const fullScreen = {container: {flex: 1, backgroundColor: '#fff'}}

    return <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
        <Header icon={IconsButton.back} navigation={navigation} bgColor={'#ffcc8b'}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <WebView source={{html: CocktailHtml}}/>
        </View>
    </SafeAreaView>
}