import React, {useState} from "react"; //quasi sempre necessario
import {TouchableOpacity, StyleSheet, View} from "react-native";
import { Entypo } from "@expo/vector-icons";

import {DrinksInfo, switchFavouriteStateFromId} from "../../dati/DrinksInfo";
import { themeStyles } from "../../styles/theme/ThemeStyles";


const FavouriteButton = (drinkID) => {
    console.log("FavouriteButton")
    console.log("id"+drinkID)
    const [Drink, setDrink] = useState(DrinksInfo[drinkID])
    const isPreferred = (drink) => {
        console.log(drink.name)
        console.log(drink.name + ": " + drink.favorite)
        return drink.favorite
    }
    const [iconName, setIconName] = useState( isPreferred(Drink) ? 'heart' : 'heart-outlined')
    const heartPressed = () => {
        /*let nameHeart = 'heart-outlined'
        if (iconName === nameHeart)
            setIconName ('heart')
        else setIconName(nameHeart)
        */
        switchFavouriteStateFromId(DrinksInfo, Drink.id)
        setDrink(DrinksInfo[drinkID])
        setIconName (isPreferred(Drink) ? 'heart' : 'heart-outlined')
    }

    return(   
    <TouchableOpacity style= {styles.parallelButtons}>
        <View style={styles.FavouriteView}>
            <Entypo
                onPress={() => heartPressed()}
                name={iconName}
                size={25}
                color={'red'}
                style={styles.center}
            />
        </View>
    </TouchableOpacity>
    )
}

export default FavouriteButton;

const styles = StyleSheet.create({
    FavouriteView: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'red' , 
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: themeStyles.light.backgroundColor2,
    },
    parallelButtons: {
        borderWidth: 3,
        borderColor: themeStyles.light.backgroundColor2 , 
        borderRadius:56/2,
        width: 56,
        height: 56,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84 ,
        shadowOffset : { width: 0, height: 5},
        elevation: 15,
    },
    center: {
        textAlign: 'center'
    }
});
