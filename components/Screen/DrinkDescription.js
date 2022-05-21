import React, { useState } from "react"; //quasi sempre necessario
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Text, Image, ScrollView } from "react-native";
import commonStyles from "../../styles/CommonStyles";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import Header from "../componenti/HeaderTender";
import SettingsInfo from "../../dati/SettingsInfo";
import { IconsButton } from "../../dati/IconsButton";
import btnStyles from "../../styles/BtnStyles";
import { Entypo } from "@expo/vector-icons";
import {DrinksInfo, switchFavouriteStateFromId} from "../../dati/DrinksInfo";

const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0

const DrinkDescription = ({ route, navigation }) => {
    console.log("DrinkDescription");
    const Drink = route.params.drink;
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
            <View style={{ borderWidth: borderWidth }}>
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
            <View style={{ flex: 1, borderWidth: borderWidth}}>
                <Text style={{ fontSize: 36, textAlign: 'center' }}>
                    {Drink.name}
                </Text>
                <ScrollView style={{ flex: 1}}>
                    <Image
                        source={getPicture(Drink)}
                        style={commonStyles.DrinkImm}
                    />


                    {/*Drink info*/}
                    <View style={{ flexDirection: "row", marginTop: 10, borderWidth: borderWidth }}>
                        <View style={{ flex: 0.5, borderWidth: borderWidth, alignContent: 'center' }}>
                            <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>
                                {Drink.quantity}ml
                            </Text>
                        </View>
                        <View style={{ flex: 0.5, borderWidth: borderWidth, alignContent: 'center' }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16,
                                fontWeight: "bold",
                                color: Drink.textColor ? Drink.textColor : 'black'
                            }}>
                                {Drink.alchoolicTax}%
                            </Text>
                        </View>
                    </View>


                    {/*Prezzo*/}
                    <View style={{ flex: 1, flexDirection: "row", alignContent: 'center', marginTop: 10, marginBottom: 5, borderWidth: borderWidth }}>
                        <View style={{ flex: 0.5, borderWidth: borderWidth }}>
                            <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>
                                €{Drink.price}
                            </Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignContent: 'center', borderWidth: borderWidth }}>
                            <TouchableOpacity style={{ borderWidth: borderWidth }}>
                                <Entypo
                                    onPress={() => heartPressed()}
                                    name={iconName}
                                    size={25}
                                    color={'red'}
                                    style={styles.FavouriteButton}
                                />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style = {{felx:1}}>
                        <Text>
                                {Drink.description}
                        </Text>
                    </View>

                </ScrollView>
                <View style={styles.buttonsContainer}>
                    <View style={styles.parallelButtons}>
                    <TouchableOpacity onPress={() => navigation.push('DrinkCustom', { drink: Drink })}>
                        <View style={btnStyles.rectangle}>
                            <View style={btnStyles.circle}>
                                <Text style={btnStyles.circleIcon}> 🔧 </Text>
                            </View>
                            <Text style={btnStyles.rectangleText}> Modifica </Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.parallelButtons}>
                    <TouchableOpacity onPress={() => navigation.push('DrinkCustom', { drink: Drink })}>
                        <View style={btnStyles.rectangle}>
                            <View style={btnStyles.circle}>
                                <Text style={btnStyles.circleIcon}> 🛒 </Text>
                            </View>
                            <Text style={btnStyles.rectangleText}> Aquista </Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
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
        borderWidth: borderWidth
        
    },

    parallelButtons: { 
        flex: 0.5, 
        justifyContent: 'center', 
        alignContent: 'center', 
        borderWidth: borderWidth,
    }

});
