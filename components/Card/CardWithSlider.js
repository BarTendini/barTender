import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {DrinkCardTender} from "./TenderCard";
import Slider from "@react-native-community/slider";
import {themeStyles} from "../../styles/theme/ThemeStyles";
import { FontAwesome } from "@expo/vector-icons";
import {copyArray, updateWithFixedQuantity, updateWithFreeQuantity, deleteCustomization,DrinksInfo,getCustomIngredientById,getIngredientById } from "../../dati/DrinksInfo"

const CardWithSlider = ({drink, item, drinkQuantity, action, stateUpdate }) => {
    console.log("CardWithSlider")
    const [Drink, setDrink] = useState(DrinksInfo[drink])
    const [actualValue, setActualValue] = useState(item.quantity)
    const [displayText, setDisplayText] = useState([item.quantity, item.percent])
    //console.log("still alive")
    const updateValue = (newValue) => {
        newValue = Math.round(newValue)
        customizeIngredients(Drink, item.id, newValue, false)
        action()
        setDisplayText([newValue, Drink.custom.length > 0 ? getCustomIngredientById(DrinksInfo,drink,item.id).percent :getIngredientById(DrinksInfo,drink,item.id).percent ])
        setActualValue(newValue)
    }

    const customizeIngredients = (drink, ingredientID, ingredientNewQuantity, isFixedQuantity) => {
        console.log("customizeIngredients")
        if (drink.custom.length === 0) {
            drink.custom = copyArray(drink.ingredients)
        }
        if (isFixedQuantity){
            updateWithFixedQuantity(drink,ingredientID, ingredientNewQuantity)
        }
        else{
            updateWithFreeQuantity(drink, ingredientID, ingredientNewQuantity)
        }
    }

    return (
        <DrinkCardTender title={item.nome} color={item.color} action={item.action ? item.action : null} borderColor={item.borderColor ? item.borderColor : null}>
            <View style={{ alignItems: 'flex-start' , margin:20}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex:0.90, fontSize:16}}>
                        <Text >
                            <Text style={styles.DescriptionText}>
                                quantity:
                            </Text>
                            <Text style={styles.DescriptionData}>
                                {` ${displayText[0]} `}
                            </Text>
                            <Text style={styles.DescriptionText}>
                                ml
                            </Text>
                        </Text>

                        {displayText[1] ?
                            <Text style={{flex:0.90, fontSize:16}}>
                                <Text style={styles.DescriptionText}>
                                    proportion:
                                </Text>
                                <Text style={styles.DescriptionData}>
                                    {` ${displayText[1]} `}
                                </Text>
                                <Text style={styles.DescriptionText}>
                                    %
                                </Text>
                            </Text>
                            : <></>
                        }
                    </View>

                    {item.action ? <></> :
                        <FontAwesome
                            onPress={() => {
                                console.log("remove button Worked");
                                deleteCustomization(Drink)
                            }}
                            name="trash"
                            size={24}
                            color="black"
                            style={{
                                flex: 0.10,
                                alignItems: "flex-end",
                                textAlign: "right",
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginBottom: 10,
                            }}
                        />
                    }
                </View>
                {/*https://github.com/callstack/react-native-slider*/}
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.QuantityIndicatorLeft}>0</Text>
                    <Slider
                        style={{flex: 1, marginTop:10, width:600, marginHorizontal:5}}
                        minimumValue={0}
                        value={actualValue}
                        maximumValue={drinkQuantity}
                        minimumTrackTintColor={item.minimumTrackTintColor? item.minimumTrackTintColor : "#FFFFFF"}
                        maximumTrackTintColor="#000000"
                        onSlidingComplete={updateValue}
                    />
                    <Text style={styles.QuantityIndicatorRight}>{drinkQuantity}</Text>
                </View>
            </View>
        </DrinkCardTender>
    )
}

export default CardWithSlider;

const styles = StyleSheet.create({
    QuantityIndicatorLeft:{
       flex:0.05,
       fontSize:20
    },
    QuantityIndicatorRight:{
        flex:0.25,
        fontSize:20
    },
    DescriptionText:{
        fontSize:16
    },
    DescriptionData:{
        fontSize:16,
        fontWeight:"bold"
    }
});