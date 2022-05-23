import React, {useState} from "react"; //quasi sempre necessario
import {TouchableOpacity, StyleSheet} from "react-native";
import { Entypo } from "@expo/vector-icons";

import {DrinksInfo, switchFavouriteStateFromId} from "../../dati/DrinksInfo";
import { themeStyles } from "../../styles/theme/ThemeStyles";


const FavouriteButton = (Drink) => {
    const isPreferred = (drink) => {
        console.log(drink.name + ": " + drink.favorite)
        return drink.favorite
    } 

    const [iconName, setIconName] = useState( isPreferred(Drink) ? 'heart' : 'heart-outlined')

    const heartPressed = () => {
        let nameHeart = 'heart-outlined'
        if (iconName === nameHeart)
            setIconName ('heart')
        else setIconName(nameHeart)
        switchFavouriteStateFromId(DrinksInfo, Drink.id)
    }

    return(   
    <TouchableOpacity style= {styles.parallelButtons}>
                            <Entypo
                                onPress={() => heartPressed()}
                                name={iconName}
                                size={25}
                                color={'red'} 
                                style={styles.FavouriteButton}                               
                            />
                        </TouchableOpacity>
    )
}

export default FavouriteButton;

const styles = StyleSheet.create({
    FavouriteButton: { 
        textAlign: 'center', 
        borderWidth: 3, 
        borderColor: 'red' , 
        width: 50,
        height: 50,
        borderRadius:50,
        textAlignVertical: 'center',
        backgroundColor: themeStyles.light.backgroundColor2

    },
    parallelButtons: { 
         
        justifyContent: 'center', 
        alignContent: 'center', 
        borderWidth: 3, 
        borderColor: themeStyles.light.backgroundColor2 , 
        borderRadius:50,
        width: 56,
        height: 56,
        textAlign:'center'

    }

});
