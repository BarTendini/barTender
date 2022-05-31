import React, {Component, useState, useEffect} from 'react';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender";
import {IconsButton} from "../../dati/IconsButton";
import {Platform, SafeAreaView, Text, View, StyleSheet, ScrollView, FlatList} from "react-native";
import SettingsInfo from "../../dati/SettingsInfo";
import {CocktailHtml} from "../webview/CocktailStyles";
import {WebView} from "react-native-webview";
import {WebView as WebJS} from "react-native-web-webview";
import TenderButton from "../componenti/TenderButton";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import {LinearGradient} from 'expo-linear-gradient';
import CardWithSlider from "../Card/CardWithSlider";
import {DrinkCardTender} from "../Card/TenderCard";
import {customizeIngredients, deleteCustomization, DrinksInfo} from "../../dati/DrinksInfo"

export const DrinkCustom = ({route, navigation}) => {

    //const Drink=route.params.drink
    const [Drink, setDrink] = useState(DrinksInfo[route.params.drink])
    const selDrink = Drink?.name;
    // Se provo a cambiare colore viene visualizzato solo per pochi secondi
    const fullScreen = {flex: 1, backgroundColor: '#fff'}
    // const fullScreen = {container: {flex: 1, backgroundColor: '#000000'}}
    const [pageTitle, setPageTitle] = useState(` ${Drink.name} ${Drink.custom ? "custom": "" }`)
    const [customIngridients, setCustomIngridients] = useState(Drink.custom ? Drink.custom : Drink.ingredients )

    //console.log(Drink.custom)
    const updateDrink=()=>{
        setDrink(DrinksInfo[route.params.drink])
        setPageTitle(` ${Drink.name} ${Drink.custom ? "custom": "" }`)
    }
    useEffect(()=>{
        setDrink(DrinksInfo[route.params.drink])
        setPageTitle(` ${Drink.name} ${Drink.custom ? "custom": "" }`)
    })

    const runFirst = (selDrink) => `  
      document.getElementById("${selDrink}").click();
      document.getElementById("drinkTitle").innerHTML = "${selDrink}"
      true;
    `;
    const _renderHeader = () => {
        {/*Tutorial WebView*/}
        {/*https://blog.logrocket.com/react-native-webview-a-complete-guide/*/}
        const quantity = {nome:"quantity", quantity:Drink.custom ? Drink.customQuantity : Drink.quantity, color:"#ffffff", action:console.log, borderColor:Drink.color, minimumTrackTintColor: Drink.color}
        return (<>
            <View style={{width: '100%', height:300}}>
                {showHTML()}
            </View>
            <CardWithSlider
                item={quantity}
                drinkQuantity={1000}
                action={
                ()=>{
                    setPageTitle(` ${Drink.name} ${Drink.custom ? "custom": "" }`)
                    console.log("setPageTitle")
                }
            }/>
            </>
        )
    }

    const _renderFooter = () => {
        {/*Tutorial WebView*/}
        {/*https://blog.logrocket.com/react-native-webview-a-complete-guide/*/}
        return (
            <View style={{paddingBottom:60}}>
                <DrinkCardTender title={"add ingredients"} color={"#ffffff"} borderColor={Drink.color}>

                </DrinkCardTender>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <CardWithSlider
                drink={route.params.drink}
                item={item}
                drinkQuantity={Drink.quantity}
                stateUpdate = {updateDrink}
                action={
                    ()=>{
                        //console.log(Drink.custom)
                        updateDrink()
                        //console.log("setPageTitle")
                        //console.log(Drink.custom)
                    }
            }/>
        );
    };

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
            {pageTitle}
        </Text>
        <FlatList
            ListHeaderComponent={_renderHeader}
            data={Drink.custom ? Drink.custom : Drink.ingredients }
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 100}}
        />
        <View style={{
            position: 'absolute',
            width: '100%',
            height: Platform.OS === 'android' ? '8%' : '14%',
            bottom: 0,
            justifyContent: 'center',

        }}>
            <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 0.2}}
                style={{height: 110, paddingTop:20,paddingBottom:30,  flexDirection: "row", justifyContent: 'center',  marginBottom: 20}}
            >
                <View style={styles.parallelButtons}>
                    <TenderButton testo={'🔧 ripristina'} navigation={navigation} color={Drink.color} action={() => {deleteCustomization(Drink); updateDrink(); setPageTitle(` ${Drink.name} ${Drink.custom ? "custom": "" }`)}}/>
                </View>
                <View style={styles.parallelButtons}>
                        <TenderButton testo={'🍹 conferma'} navigation={navigation} action={() => {navigation.goBack()}}/>
                </View>
            </LinearGradient>
        </View>
        
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