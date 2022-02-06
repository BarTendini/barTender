/*import React, {useState} from "react";
import {View, Button, Text} from "react-native";

const Home = ({ navigation }) => {
    const [BarList, setBarList] = useState('')
    return (
        <View>
            <Text>Bar</Text>
        </View>
    );
};*/

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        marginBottom: 16,
                    }}>
                    Fratm
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;
