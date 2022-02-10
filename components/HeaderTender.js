import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import commonStyles from "../styles/CommonStyles";

const Logo = ({ icon, navigation, bgColor, alertFun }) => {
    return (
        <View style={{backgroundColor: bgColor ? bgColor : null}}>
            <ImageBackground
                source={require('../image/loghi/logoHome.png')}
                style={commonStyles.Logo}
                resizeMode={'contain'}
            >
                {showIcon(icon, navigation, alertFun)}
            </ImageBackground>
        </View>
    );
}

export default Logo;

const showIcon = (icon, navigation, alertFun) => {
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
        return <TouchableOpacity onPress={alertFun} style={{flex: 1, marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
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
