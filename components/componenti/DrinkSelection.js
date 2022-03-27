import React from "react"; //quasi sempre necessario
import {View, Platform, Text, Image, TouchableOpacity} from "react-native";
import commonStyles from "../../styles/CommonStyles";

const DrinkSelection = ({ Drink, availability,  navigation }) => {
    
    const pageSelector = () => {
        if(Drink.type === "beer")
            return(() => navigation.push('BeersMenu', Drink));
        else if(Drink.type === "cocktail")
            return(() => navigation.push('CocktailsMenu', Drink));
    };

    const drawAvailability = () => {    
        return availability.a
    }
    
    
    return (
        <TouchableOpacity
            onPress={pageSelector()}
            style={{ width: '100%', borderWidth:5, borderColor: Drink.color, borderRadius: 50, marginTop: 10}}
        >
            <Text style={{
                textAlign: 'center', // <-- the magic
                fontWeight: 'bold',
                color: Drink.textColor ? Drink.textColor : 'black',
                fontSize: 24,
            }}>{Drink.name}</Text>
            <View style={{ flexDirection: "column", marginHorizontal: 20, paddingBottom: 15, }}>
                
                <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 20}}>
                    <View style={{ flex: 1, justifyContent: "flex-start",}}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>
                            {drawAvailability()}
                            </Text>
                    </View>
                    <View style={{ flex: 1,}}>
                        <Text style={{
                            textAlign: 'right',
                            fontSize: 16,
                            fontWeight: "bold",
                            color: Drink.textColor ? Drink.textColor : 'black'
                        }}>
                            type: {Drink.type}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DrinkSelection;