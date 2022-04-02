import React, {useState} from "react"; //quasi sempre necessario
import { View, StyleSheet, Platform, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import commonStyles from "../../styles/CommonStyles";
import { themeStyles } from "../../styles/theme/ThemeStyles"

const DrinkSelection = ({ Drink, availability, navigation }) => {
    const debug = false;
    const [iconName, setIconName] = useState('heart-outlined')

    const heartPressed = () => {
        let nameHeart = 'heart-outlined'
        if (iconName === nameHeart)
            setIconName ('heart')
        else setIconName(nameHeart)
    }

    const pageSelector = () => {
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

    return (
        <TouchableOpacity
            onPress={() => pageSelector()}
            style={styleAviability()}
        >
            <Image
                source={Drink.image}
                style={commonStyles.DrinkImm}
            />
            <View style={{ margin: 10, alignContent: 'center' }}>
                <View style={{ borderWidth: debug ? 1 : 0 }}>
                    <Text style={{
                        textAlign: 'center', // <-- the magic
                        fontWeight: 'bold',
                        color: Drink.textColor ? Drink.textColor : 'black',
                        fontSize: 24,
                        marginHorizontal: 10
                    }}>{Drink.name}</Text>
                </View>

                {/*Drink info*/}
                <View style={{ flexDirection: "row", marginTop: 10, borderWidth: debug ? 1 : 0 }}>
                    <View style={{ flex: 0.5, borderWidth: debug ? 1 : 0, alignContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>
                            {Drink.quantity}ml
                        </Text>
                    </View>
                    <View style={{ flex: 0.5, borderWidth: debug ? 1 : 0, alignContent: 'center' }}>
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
                <View style={{ flexDirection: "row", alignContent: 'center', marginTop: 10, margin: 5, borderWidth: debug ? 1 : 0 }}>
                    <View style={{ flex: 0.5, borderWidth: debug ? 1 : 0}}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: "bold", color: Drink.textColor ? Drink.textColor : 'black' }}>
                            €{Drink.price}
                        </Text>
                    </View>
                    <View style={{ flex:0.5, justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
                        <Entypo 
                            onPress={() => heartPressed()} 
                            name={iconName} 
                            size={25} 
                            color={'red'}
                            style={{ paddingHorizontal: '20%', justifyContent: 'center', borderWidth: 1, display: 'flex' }}
                        />
                    </View>
                </View>

            </View>

        </TouchableOpacity>
    );
};

export default DrinkSelection;




