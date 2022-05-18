import React, { Component } from 'react';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender";
import {IconsButton} from "../../dati/IconsButton";
import {SafeAreaView, Text, View} from "react-native";
import SettingsInfo from "../../dati/SettingsInfo";
import {CocktailHtml} from "../webview/CocktailStyles";
import {WebView} from "react-native-webview";
import {Dimensions} from "react-native";

export const DrinkCustom = ({route, navigation}) => {
    const selDrink = route.params.drink?.name;
    const fullScreen = {container: {flex: 1, backgroundColor: '#fff'}}

    const runFirst = (selDrink) => `  
      document.getElementById("negroni").click();
      document.getElementById("drinkTitle").innerHTML = "${selDrink}"
      setTimeout(function() {
        window.alert("ciccio")
      }, 1000);
      true;
    `;

    return <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
        <Header icon={IconsButton.back} navigation={navigation} bgColor={'#ffcc8b'}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <WebView source={{html: CocktailHtml}}
                     injectedJavaScript={runFirst("negroni")}
                     style={fullScreen}/>
        </View>
    </SafeAreaView>
}