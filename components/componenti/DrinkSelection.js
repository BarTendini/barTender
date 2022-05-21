import React, {useState} from "react"; //quasi sempre necessario
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { Entypo } from "@expo/vector-icons";
import commonStyles from "../../styles/CommonStyles";
import { themeStyles } from "../../styles/theme/ThemeStyles"
import SettingsInfo from "../../dati/SettingsInfo";
import btnStyles from "../../styles/BtnStyles";
import {DrinksInfo, switchFavouriteStateFromId} from "../../dati/DrinksInfo";
import TenderButton from "../componenti/TenderButton";


const borderWidth = SettingsInfo[3].settables[0].value ? 1 : 0


const DrinkSelection = ({ Drink, availability, navigation }) => {
    const standardImage = require("../../image/drinks/logos/barTenderLogo.png")
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

               
                <View style={{ flex: 1, flexDirection: "row", alignContent: 'center', marginTop: 10, marginBottom: 5, borderWidth: borderWidth }}>
                            <TouchableOpacity style= {styles.parallelButtons}>
                            <Entypo
                                onPress={() => heartPressed()}
                                name={iconName}
                                size={25}
                                color={'red'} 
                                style={styles.FavouriteButton}                               
                            />
                        </TouchableOpacity>
               
                    <TenderButton testo={'acquista per: €'+ Drink.price} navigation={navigation}/>
                
                </View>

            </View>

        </TouchableOpacity>
    );
};

export default DrinkSelection;


const styles = StyleSheet.create({
    FavouriteButton: { 
        textAlign: 'center', 
        borderWidth: 3, 
        borderColor: 'red' , 
        width: 50,
        height: 50,
        borderRadius:50,
        textAlignVertical: 'center',

    },
    parallelButtons: { 
        flex: 0.5, 
        justifyContent: 'center', 
        alignContent: 'center', 
        borderWidth: borderWidth,
    }

});



