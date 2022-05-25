import {View, Text, StyleSheet} from "react-native";
import React, {useRef, useState} from "react";
import {DrinkCardTender} from "./TenderCard";
import Slider from "@react-native-community/slider";
import {themeStyles} from "../../styles/theme/ThemeStyles";


const CardWithSlider = ({ item, drinkQuantity }) => {
    //console.log(CocktailHtml)
    const [actualValue, setActualValue] = useState(item.quantity)
    const [displayText, setDisplayText] = useState(`${item.nome}: ${item.quantity} ${item.unit}`)
    const updateValue = (newValue) => {
        setDisplayText(`${item.nome}: ${parseInt(newValue)} ${item.unit}`)
        setActualValue(newValue)
    }
    return (
        <DrinkCardTender title={item.nome} color="#33333333">
            <View style={{ alignItems: 'flex-start' , margin:20}}>
                <Text>{displayText}</Text>
                {/*https://github.com/callstack/react-native-slider*/}
                <Slider
                    style={{width:"100%", marginTop:10}}
                    minimumValue={0}
                    value={actualValue}
                    maximumValue={drinkQuantity}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onSlidingComplete={updateValue}
                />
            </View>
        </DrinkCardTender>
    )
}

export default CardWithSlider;

const styles = StyleSheet.create({});