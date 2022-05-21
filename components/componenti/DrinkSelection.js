import React, {useState} from "react"; //quasi sempre necessario
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import commonStyles from "../../styles/CommonStyles";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import SettingsInfo from "../../dati/SettingsInfo";
import btnStyles from "../../styles/BtnStyles";
import {DrinksInfo, switchFavouriteStateFromId} from "../../dati/DrinksInfo";



const DrinkSelection = ({ Drink, availability, navigation }) => {
    const standardImage = require("../../image/drinks/logos/barTenderLogo.png")
    const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0
    const isPreferred = (drink) => {
        return drink.favorite
    } 

    const [iconName, setIconName] = useState( isPreferred(Drink) ? 'heart' : 'heart-outlined')


    const heartPressed = () => {
        let nameHeart = 'heart-outlined'
        if (iconName === nameHeart)
            setIconName ('heart')
        else setIconName(nameHeart)
        console.log(Drink.id)
        switchFavouriteStateFromId(DrinksInfo, Drink.id)
    }

    const pageSelector = () => {
        if (availability)
            navigation.push('DrinkDescription', {drink: Drink});
    };

    const drawAvailability = () => {
        if (availability)
            return availability
    }

    const styleAviability = () => {
        if (availability) {
            return {
                width: '100%',
                borderWidth: 5,
                borderColor: Drink.color,
                borderRadius: 50,
                marginTop: 10
            };
        }
        return {
            width: '100%',
            borderWidth: 5,
            borderColor: themeStyles.unavailableColor,
            borderRadius: 50,
            marginTop: 10
        };
    }

    const getPicture = (drink) => {
        if (drink.image != null){
            return drink.image
        }
        return standardImage
    }

    const getDrinkNameIfNeeded = (drink) =>{
        if (drink.image != null){
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

    return (
        <TouchableOpacity
            onPress={() => pageSelector()}
            style={styleAviability()}
        >
            <Image
                source={getPicture(Drink )}
                style={commonStyles.DrinkImm}
            />
            <View style={{ margin: 10, alignContent: 'center' }}>
                {getDrinkNameIfNeeded(Drink)}

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
                    <View style={{ flex: 0.5, borderWidth: borderWidth}}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>
                            €{Drink.price}
                        </Text>
                    </View>
                    <View style={{ flex:0.5, justifyContent: 'center', alignContent: 'center', borderWidth: borderWidth }}>
                        <TouchableOpacity style={{ borderWidth: borderWidth }}>
                            <Entypo
                                onPress={() => heartPressed()}
                                name={iconName}
                                size={25}
                                color={'red'}
                                style={{ textAlign: 'center', borderWidth: borderWidth, borderColor: 'red' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.push('DrinkCustom', {drink: Drink}) }>
                    <View style={btnStyles.rectangle}>
                        <View style={btnStyles.circle}>
                            <Text style={btnStyles.circleIcon}> 🔧 </Text>
                        </View>
                        <Text style={btnStyles.rectangleText}> Modifica </Text>
                    </View>
                </TouchableOpacity>

            </View>

        </TouchableOpacity>
    );
};

export default DrinkSelection;




