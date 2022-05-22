import { View, TouchableOpacity, Text } from 'react-native';
import {AppContext} from "../../AppContext";
import React, {useState} from "react";
import { useContext } from 'react';
import { themeStyles } from "../../styles/theme/ThemeStyles"



const TenderButton = ({ testo, navigation, bar }) => {
    //const [bar, setBar] = useState('');
    const { selBarName, setSelBarName } = React.useContext(AppContext);

    const setBarAndNavigate = () => {
        // I think there might be this problem https://stackoverflow.com/a/65516659/7130614
        // since bar is not passed to DrinkSelection I'm using context instead (erroneously)
        setSelBarName(bar.nome);
        navigation.push('DrinkMenuSelection', {barName: bar.nome} )
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 10,
            borderWidth: 2,
            borderColor: themeStyles.light.backgroundColor2,
            borderRadius: 50
            

        }}>
            <TouchableOpacity
                onPress={() => setBarAndNavigate()}
                style={{
                    borderColor:'#ffcc8b',
                    borderWidth: 6,
                    backgroundColor: themeStyles.light.backgroundColor2,
                    paddingVertical: 10,
                    borderRadius: 50,
            }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{testo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TenderButton;
