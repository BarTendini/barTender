import React, { Component } from 'react';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender";
import {IconsButton} from "../../dati/IconsButton";
import {Platform, SafeAreaView, Text, View, StyleSheet, ScrollView, FlatList} from "react-native";
import SettingsInfo from "../../dati/SettingsInfo";
import {CocktailHtml} from "../webview/CocktailStyles";
import {WebView} from "react-native-webview";
import {WebView as WebJS} from "react-native-web-webview";
import {Dimensions} from "react-native";
import TenderButton from "../componenti/TenderButton";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import {LinearGradient} from 'expo-linear-gradient';
import { DrinkCardTender } from "../Card/TenderCard";
import Slider from '@react-native-community/slider';

export const DrinkCustom = ({route, navigation}) => {

    const Drink=route.params.drink
    const selDrink = route.params.drink?.name;
    // Se provo a cambiare colore viene visualizzato solo per pochi secondi
    const fullScreen = {flex: 1, backgroundColor: '#fff'}
    // const fullScreen = {container: {flex: 1, backgroundColor: '#000000'}}

    const runFirst = (selDrink) => `  
      document.getElementById("${selDrink}").click();
      document.getElementById("drinkTitle").innerHTML = "${selDrink}"
      true;
    `;
    //console.log(CocktailHtml)
    const renderItem = ({ item }) => (
        <DrinkCardTender title={item.nome} color="#33333333">
            <View style={{ flex: 1, alignItems: 'flex-start' , margin:20}}>
                <Text style={styles.infoTextLeft}>
                    {item.nome}: {item.quantity} {item.unit}
                </Text>
                {
                    //https://github.com/callstack/react-native-slider
                }
                <Slider
                    style={{width:"100%", marginTop:10}}
                    minimumValue={0}
                    value={item.quantity}
                    maximumValue={Drink.quantity}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={()=>{}}
                    onSlidingComplete={()=>{}}
                />
            </View>
        </DrinkCardTender>
    )
    const webViewProp = {
        source: {html: CocktailHtml},
        injectedJavaScript: runFirst(selDrink),
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
        <Text style={{ fontSize: 36, textAlign: 'center' }}>
                    {Drink.name}
                </Text>
        <ScrollView style={{ flexGrow: 1}}>
        {/*Tutorial WebView*/}
        {/*https://blog.logrocket.com/react-native-webview-a-complete-guide/*/}
        <View style={{flexDirection:"column", flex: 1, height:300, borderWidth:3}}>
            {showHTML()}            
        </View>
        <View>
        <FlatList
            data={Drink.ingredients}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </View>
        </ScrollView>
        <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 0.2}}
            style={{height: 110, paddingTop:20,paddingBottom:30,  flexDirection: "row", justifyContent: 'center',  marginBottom: 20}}
        >
            <View style={styles.parallelButtons}>                    
                <TenderButton testo={'🔧 Personalizza'} navigation={navigation} color={Drink.color} action={() => navigation.push('DrinkCustom', { drink: Drink })}/>
            </View>
            <View style={styles.parallelButtons}>
                    <TenderButton testo={'🍹 Aquista per €' +Drink.price} navigation={navigation}/>
            </View>
        </LinearGradient>
        
    </SafeAreaView>
}






const styles = StyleSheet.create({
    DrinkImm: {
        justifyContent: "center",
        alignItems: "center",
        height: '30%',
        width: '100%',
        resizeMode: 'contain',
        marginVertical: 10,
        // borderColor: 'black',
        // borderWidth: 3,
    },
    circle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        borderWidth: 0,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: -2, height: 4 },
    },
    buttonsContainer: {  
        flexDirection: "row", 
        alignContent: 'center', 
        marginTop: 10, 
        marginBottom: 5, 
        
        
    },

    parallelButtons: { 
        flex: 0.5, 
        justifyContent: 'center', 
        alignContent: 'center', 
    },
    ParallelCardsContainer:{ 
        flex: 1, 
        flexDirection: "row", 
        alignContent: 'center', 
        marginTop: 10, 
        marginBottom: 5, 
    },
    ParallelCards:{ 
        flex: 1,
        alignContent: 'center',
        textAlignVertical: 'center',
        backgroundColor: themeStyles.light.backgroundColor1,
        borderRadius: 50,
        borderColor: themeStyles.light.backgroundColor1,
        borderWidth: 8,
        marginHorizontal:5,
        justifyContent:"center"
        
    },
    TextInfoTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17
    },

});