import { View, TouchableOpacity, Text } from 'react-native';
import {UserContext} from "../../UserContext";
import React, {useState} from "react";
import { useContext } from 'react';


const TenderButton = ({ testo, navigation, bar }) => {
    //const [bar, setBar] = useState('');
    const { selBarName, setSelBarName } = React.useContext(UserContext);

    const setBarAndNavigate = () => {
        // I think there might be this problem https://stackoverflow.com/a/65516659/7130614
        // since bar is not passed to DrinkTypes.js I'm using context instead (erroneously)
        setSelBarName(bar.nome);
        navigation.push('DrinkTypesSelection', {barName: bar.nome} )
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 10,

        }}>
            <TouchableOpacity
                onPress={() => setBarAndNavigate()}
                style={{
                    backgroundColor: '#ffcc8b',
                    paddingVertical: 10,
                    borderRadius: 50,
            }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{testo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TenderButton;
