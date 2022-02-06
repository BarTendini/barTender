import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Settings = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    Opzioni da fratm
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Settings;
