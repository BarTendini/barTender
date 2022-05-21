import React, { Component } from 'react';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender";
import {IconsButton} from "../../dati/IconsButton";
import {Platform, SafeAreaView, Text, View} from "react-native";
import SettingsInfo from "../../dati/SettingsInfo";
import {CocktailHtml} from "../webview/CocktailStyles";
import {WebView} from "react-native-webview";
import {WebView as WebJS} from "react-native-web-webview";
import {Dimensions} from "react-native";

export const DrinkCustom = ({route, navigation}) => {
    const selDrink = route.params.drink?.name;
    // Se provo a cambiare colore viene visualizzato solo per pochi secondi
    const fullScreen = {flex: 1, backgroundColor: '#fff'}
    // const fullScreen = {container: {flex: 1, backgroundColor: '#000000'}}

    const runFirst = (selDrink) => `  
      document.getElementById("negroni").click();
      document.getElementById("drinkTitle").innerHTML = "${selDrink}"
      setTimeout(function() {
        window.alert("ciccio")
      }, 1000);
      true;
    `;

    const webViewProp = {
        source: {html: CocktailHtml},
        injectedJavaScript: runFirst("negroni"),
        style: fullScreen
    }

    const showHTML = () => {
        if (Platform.OS === 'web') {
            // https://github.com/react-native-web-community/react-native-web-webview
            return (<WebJS {...webViewProp} />)
        }
        // https://github.com/react-native-webview/react-native-webview
        return (<WebView {...webViewProp} />)
    }

    console.log("CocktailHtml");
    return <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
        <Header icon={IconsButton.back} navigation={navigation} bgColor={'#ffcc8b'}/>
        {/*Tutorial WebView*/}
        {/*https://blog.logrocket.com/react-native-webview-a-complete-guide/*/}
        <View style={{flex: 1, flexDirection: 'column'}}>
            {showHTML()}
        </View>
    </SafeAreaView>
}