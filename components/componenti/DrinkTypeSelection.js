import {View, Text, Image, TouchableOpacity} from "react-native";
import commonStyles from "../../styles/CommonStyles";

const DrinkTypeSelection = ({ Drink, navigation }) => {
    console.log("DrinkTypeSelection");
    const pageSelector = () => {
        console.log("pageSelector");
        if(Drink === "beer")
            return(() => navigation.push('BeersMenu', Drink));
        else if(Drink.type === "cocktail")
            return(() => navigation.push('CocktailsMenu', Drink));
    };
    
    return (
        <TouchableOpacity
            onPress={pageSelector()}
            style={{ width: '100%', backgroundColor: Drink.color, borderRadius: 50, marginTop: 10}}
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
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>Disponibile</Text>
                    </View>
                    <View style={{ flex: 1,}}>
                        <Text style={{
                            textAlign: 'right',
                            fontSize: 16,
                            fontWeight: "bold",
                            color: Drink.textColor ? Drink.textColor : 'black'
                        }}>type: {Drink.type}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DrinkTypeSelection;