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
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}>
                        Example of Splash, Login and Sign Up in React Native
                        {'\n\n'}
                        This is the Home Screen
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    Splash, Login and Register Example{'\n'}React Native
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;
