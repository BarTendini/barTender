import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import commonStyles from "../styles/CommonStyles";

const Logo = ({ icon, navigation, bgColor, showAlert }) => {
    return (
        <View style={{flex: 1, backgroundColor: bgColor ? bgColor : null}}>
            <ImageBackground
                source={require('../image/loghi/logoHome.png')}
                resizeMode='contain'
                style={commonStyles.Logo}
            >
                {showIcon(icon, navigation, showAlert)}
            </ImageBackground>
        </View>
    );
}

export default Logo;

const showIcon = (icon, navigation, showAlert) => {
    if (icon === 1)
        return <TouchableOpacity onPress={() => navigation.goBack()} style={{flex: 1, marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Image
                source={require('../image/icons/back.png')}
                style={{
                    width: 80,
                    height: 20,
                    resizeMode: 'contain'
                }}
            />
            </TouchableOpacity>
    else if (icon === 2)
        return <TouchableOpacity onPress={showAlert} style={{flex: 1, marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Image
                source={require('../image/icons/logout.png')}
                style={{
                    width: 80,
                    height: 20,
                    resizeMode: 'contain'
                }}
            />
        </TouchableOpacity>
    return <></>// se icon è uguale a 0 o a qualsiasi altro valore
}
