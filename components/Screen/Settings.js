import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import commonStyles from "../../styles/CommonStyles";

const Settings = () => {
    return (
        <SafeAreaView style={commonStyles.SafeAreaAndroid}>
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
