import React from "react"; //quasi sempre necessario
import { View, Text, Image, TouchableOpacity} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {DrinksInfo,getDrinksOfType} from "../../dati/DrinksInfo";
import {themeStyles} from "../../styles/theme/ThemeStyles"

const DrinkTypeSelection = ({ type, navigation }) => {
    console.log("DrinkTypeSelection");

    return (
        <TouchableOpacity
            onPress={() => navigation.push('DrinkMenu', {drinks: getDrinksOfType(DrinksInfo,type.type)})}
            style={{ width: '100%', borderWidth:5, borderColor: themeStyles.light.backgroundColor1, borderRadius: 50, marginTop: 10}}
        >
            <Text style={{
                textAlign: 'center', // <-- the magic
                fontWeight: 'bold',
                fontSize: 24,
                padding:10
            }}>{type.type}</Text>
            
        </TouchableOpacity>
    );
};

export default DrinkTypeSelection;
