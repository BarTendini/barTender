import React, {useEffect, useState} from "react"; //quasi sempre necessario
import { TouchableOpacity, View, StyleSheet, Text, Image, Platform } from "react-native";
import commonStyles from "../../styles/CommonStyles";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import SettingsInfo from "../../dati/SettingsInfo";
import {DrinksInfo, isDrinkCustom, switchFavouriteStateFromId} from "../../dati/DrinksInfo";
import { DrinkCardTender } from "../Card/TenderCard";
import {LinearGradient} from 'expo-linear-gradient';
import {addCartInfo} from "../../dati/CartInfo";
import {
    FavouriteButton,
    TenderScroll,
    TenderAlert,
    TenderButton,
    TenderFragment
} from "../componenti/tender-components";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";

const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0

const DrinkDescription = ({ route, navigation }) => {
    console.log("DrinkDescription");
    //const Drink = route.params.drink;
    const [Drink, setDrink] = useState(DrinksInfo[route.params.drink])
    const [alertVisibility, setAlertVisibility] = useState(false)
    const [dummy, setDummy] = useState(0)
    const [pageTitle, setPageTitle] = useState(`${Drink.name} ${isDrinkCustom(Drink) ? "custom": "" }`)
    //console.log(Drink.ingredients)
    const standardImage = require("../../image/drinks/logos/barTenderLogo.png")
    const updateDrink=()=>{
        setDrink(DrinksInfo[route.params.drink])
    }

    // Serve per notificare il componente quando viene chiamato a causa di un navigator
    useFocusEffect(
        React.useCallback(() => {
            console.log("dummy === "+ dummy)
            setDrink(DrinksInfo[route.params.drink])
            setDummy(0)
            setPageTitle(`${Drink.name} ${isDrinkCustom(Drink) ? "custom": "" }`)
        }, [route, navigation])
    );

    const showAlert=()=>{
        if (alertVisibility===false){
            setAlertVisibility(true)
        }
    }
    const isPreferred = (drink) => {
        return drink.favorite
    }

    const [iconName, setIconName] = useState(isPreferred(Drink) ? 'heart' : 'heart-outlined')


    const heartPressed = () => {
        let nameHeart = 'heart-outlined'
        if (iconName === nameHeart)
            setIconName('heart')
        else setIconName(nameHeart)
        console.log("id: "+Drink.id)
        switchFavouriteStateFromId(DrinksInfo, Drink.id)
    }

    const pageSelector = () => {
        if (availability)
            navigation.push('DrinkDescription', { drink: Drink });
    };

    const drawAvailability = () => {
        if (availability)
            return availability
    }

    const styleAviability = () => {
        if (availability) {
            return {

                borderWidth: 5,
                borderColor: Drink.color,
                borderRadius: 50,
                marginTop: 10,
                marginHorizontal: 5,
            };
        }
        return {

            borderWidth: 5,
            borderColor: themeStyles.unavailableColor,
            borderRadius: 50,
            marginTop: 10,
            marginHorizontal: 5,
        };
    }

    const getPicture = (drink) => {
        if (drink.image != null) {
            return drink.image
        }
        return standardImage
    }

    const getDrinkNameIfNeeded = (drink) => {
        if (drink.image != null) {
            return null
        }
        return (
            <View style={{  }}>
                <Text style={{
                    textAlign: 'center', // <-- the magic
                    fontWeight: 'bold',
                    color: Drink.textColor ? Drink.textColor : 'black',
                    fontSize: 24,
                    marginHorizontal: 10
                }}>{Drink.name}</Text>
            </View>
        );

    }

    const sizeIngrediente = (text) => {
        return (
            <View style={[styles.circle, styles.shadowProp]}>
                <TouchableOpacity>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: "bold",
                        color: Drink.textColor ? Drink.textColor : 'black'
                    }}>
                        {text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <TenderFragment navigation={navigation} title={pageTitle}>
            {/*<View style={{marginTop: 160}}>*/}
            {/*    <Text style={{ fontSize: 36, textAlign: 'center' }}>*/}
            {/*        {Drink.name} {isDrinkCustom(Drink) ? "custom": "" }*/}
            {/*    </Text>*/}
            {/*</View>*/}
            <TenderScroll footerPadding={30}>
                <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 20 }}>
                    <Image
                        source={getPicture(Drink)}
                        style={commonStyles.DrinkImm}
                    />


                    {/*Drink info*/}
                    <View style={styles.ParallelCardsContainer}>
                        <View style={styles.ParallelCards}>
                            <Text style={styles.TextInfoTitle}>Prezzo</Text>
                            <Text style={{textAlign: 'center',}}>{Drink.price}€</Text>
                        </View>
                        <View style={styles.ParallelCards}>
                            <Text style={styles.TextInfoTitle}>Tasso alcolico</Text>
                            <Text style={{textAlign: 'center',}}>{Drink.alchoolicTax}%</Text>
                        </View>
                        <View style={{justifyContent:"center", height:70, width:70, alignItems:"center", backgroundColor:themeStyles.light.backgroundColor1, borderRadius:50, marginHorizontal: 5}}>
                            {FavouriteButton(Drink.id)}
                        </View>

                    </View>



                    <DrinkCardTender title={"Ingredienti:"}>
                        <View style={{ flex: 1, marginHorizontal:20, marginVertical: 10 }}>
                             {isDrinkCustom(Drink) ?
                                     <View style={{flexDirection:"row"}}>
                                         <View style={{flex:0.5, fontSize: 24}}>
                                             <Text style={{fontWeight:"bold"}}>originale</Text>
                                             <Text>quantità: {Drink.quantity}ml</Text>
                                             {
                                                 Drink.ingredients.map(item =>
                                                     <Text key={item.id}>{item.nome}: {item.percent}%</Text>
                                                 )
                                             }
                                         </View>
                                         <View style={{flex:0.5, fontSize: 24}}>
                                             <Text style={{fontWeight:"bold"}}>custom</Text>
                                             <Text>quantità: {Drink.customQuantity}ml</Text>
                                             {
                                                 Drink.custom.map(item =>
                                                     <Text key={item.id}>{item.nome}: {item.percent}%</Text>
                                                 )
                                             }
                                         </View>
                                     </View>

                                 :<>
                                 <Text>quantità: {Drink.quantity}ml</Text>
                                     {Drink.ingredients.map(item =>
                                            <View key={item.id} style={{ flex: 1, alignItems: 'flex-start'}}>
                                                <Text >
                                                    {item.nome}: {item.quantity} {item.unit}
                                                </Text>
                                            </View>

                                    )}
                                 </>
                                 }
                        </View>
                    </DrinkCardTender>
                    <DrinkCardTender title={"Descrizione:"}>
                        <View style = {{flex:1, marginHorizontal:20, marginVertical: 10}}>
                            <Text>{Drink.description}</Text>
                        </View>
                    </DrinkCardTender>
                </View>
            </TenderScroll>
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
                    style={{height: 100, paddingVertical: 20,  flexDirection: "row", justifyContent: 'center'}}
                >
                    <View style={styles.parallelButtons}>
                        <TenderButton testo={'🔧 Personalizza'} navigation={navigation} color={Drink.color} action={() =>{
                            setDummy(2); navigation.push('DrinkCustom', {drink: Drink.id,})
                        }}
                        />
                    </View>
                    <View style={styles.parallelButtons}>
                         <TenderButton testo={'🍹 Acquista' } navigation={navigation} action={showAlert}/>
                    </View>
                </LinearGradient>
            </View>
            <TenderAlert
                visibility = {alertVisibility}
                state = {setAlertVisibility}
                title = {"Pronto a Bere?"}
                tenderButtons = {
                    isDrinkCustom(Drink)? [
                            {testo: "originale", alertText: "acquistato originale", color: Drink.color, action:() => {addCartInfo(DrinksInfo, route.params.drink, false); navigation.push('Cart')}},
                            {testo:'custom', alertText: "acquistato originale", color: Drink.color, action:() => {addCartInfo(DrinksInfo, route.params.drink, true); navigation.push('Cart')}},
                            {testo:'annulla'}
                        ]:
                        [
                            {testo: "si!", alertText: "acquisto effettuato", color: Drink.color, action:() => {addCartInfo(DrinksInfo, route.params.drink, false); navigation.push('Cart')}},
                            {testo:'no'}
                        ]
                }
            >
                <View>
                    <Text style={{fontSize:24}}>
                        <Text>Stai acquistando </Text>
                        <Text style={{fontWeight:"bold"}}>{Drink.name} </Text>
                        {isDrinkCustom(Drink) ? <Text style={{textDecorationLine: 'underline', fontWeight:"bold"}}>custom</Text> :<></> }
                        <Text> al prezzo di </Text>
                        <Text style={{fontWeight:"bold"}}>{Drink.price}€</Text>
                    </Text>
                </View>
            </TenderAlert>
        </TenderFragment>
    );
}

const renderItem = ({ item }) => (
    <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={styles.infoTextLeft}>
            {item.nome}: {item.quantity} {item.unit}
        </Text>
    </View>
)

function ListDrinkIngredients(props) {
    return( <>
    {<Text>perchè diamine non funziona??</Text>}
        {props.ingredients.map(props.callbackfn)}
    </>);
}

export default DrinkDescription;


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
        width: '50%',
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
    infoTextLeft: {
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold'
    },
});
