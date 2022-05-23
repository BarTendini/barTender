import React, { useState } from "react"; //quasi sempre necessario
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Text, Image, ScrollView, Platform } from "react-native";
import commonStyles from "../../styles/CommonStyles";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import Header from "../componenti/HeaderTender";
import SettingsInfo from "../../dati/SettingsInfo";
import { IconsButton } from "../../dati/IconsButton";
import btnStyles from "../../styles/BtnStyles";
import { Entypo } from "@expo/vector-icons";
import {DrinksInfo, switchFavouriteStateFromId} from "../../dati/DrinksInfo";
import FafouriteButton from "../componenti/FafouriteButton";
import { DrinkCardTender } from "../Card/TenderCard";
import { FlatList } from "react-native-gesture-handler";
import TenderButton from "../componenti/TenderButton";
import {LinearGradient} from 'expo-linear-gradient';



const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0

const DrinkDescription = ({ route, navigation }) => {
    console.log("DrinkDescription");
    
    const Drink = route.params.drink;
    console.log(Drink.ingredients)
    const standardImage = require("../../image/drinks/logos/barTenderLogo.png")
    
    const isPreferred = (drink) => {
        return drink.favorite
    }

    const [iconName, setIconName] = useState(isPreferred(Drink) ? 'heart' : 'heart-outlined')


    const heartPressed = () => {
        let nameHeart = 'heart-outlined'
        if (iconName === nameHeart)
            setIconName('heart')
        else setIconName(nameHeart)
        console.log(Drink.id)
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
                }}>{drink.name}</Text>
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
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={IconsButton.back} navigation={navigation} bgColor={'#ffcc8b'} />
            <View style={{ flex: 1, }}>
                <Text style={{ fontSize: 36, textAlign: 'center' }}>
                    {Drink.name}
                </Text>
                <ScrollView style={{ flexGrow: 1}}>
                    <View style={{ paddingBottom:80}}>
                    <Image
                        source={getPicture(Drink)}
                        style={commonStyles.DrinkImm}
                    />


                    {/*Drink info*/}
                    <View style={styles.ParallelCardsContainer}>
                        <View style={styles.ParallelCards}>
                            <Text style={styles.TextInfoTitle}>Quantità:</Text>
                            <Text style={{textAlign: 'center',}}>{Drink.quantity}ml</Text>
                        </View>
                        <View style={styles.ParallelCards}>
                            <Text style={styles.TextInfoTitle}>Tasso alcolico:</Text>
                            <Text style={{textAlign: 'center',}}>{Drink.alchoolicTax}%</Text>
                        </View>
                        <View style={styles.ParallelCards}>
                            {FafouriteButton(Drink)}
                        </View>
                        
                    </View>
                    


                    <DrinkCardTender title={"Ingredienti:"}>
                        <FlatList
                            data={Drink.ingredients}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </DrinkCardTender>
                    <DrinkCardTender title={"Descrizione:"}>
                    <View style = {{felx:1}}>
                        <Text>
                                {Drink.description}
                        </Text>
                    </View>
                    </DrinkCardTender>
                    </View>
                </ScrollView>
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
                    style={{height: 100, paddingVertical:20, flexDirection: "row", justifyContent: 'center',  marginBottom: 20}}
                >
                    <View style={styles.parallelButtons}>                    
                        <TenderButton testo={'🔧 Personalizza'} navigation={navigation} color={Drink.color} action={() => navigation.push('DrinkCustom', { drink: Drink })}/>
                    </View>
                    <View style={styles.parallelButtons}>
                         <TenderButton testo={'🍹 Aquista per €' +Drink.price} navigation={navigation}/>
                    </View>
                </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    );
}

const renderItem = ({ item }) => (
    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={styles.infoTextLeft}>
                            {item.nome}: {item.quantity} {item.unit}
                        </Text>
    </View>
)


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
