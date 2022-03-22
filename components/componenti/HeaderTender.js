import React from 'react'; //quasi sempre necessario
import { Platform, View, ImageBackground, Image, TouchableOpacity} from 'react-native'; // quasi sempre necessario anche se raramente servono tutti questi import
import commonStyles from "../../styles/CommonStyles";
import NavigationDrawerHeader from '../navigator/NavigationDrawerHeader';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Header = ({ icon, navigation, bgColor, alertFun }) => { //renderizza l'header header
    const menuIconForWeb = (icon,navigation,alertFun) => {
        //if (Platform.OS === 'web') { // controlla la piattaforma (web android ios)
            return(showIcon(3, navigation, alertFun));
        //}
    }
    return (
        <View style={{backgroundColor: bgColor ? bgColor : null}}>
            <ImageBackground
                source={require('../../image/loghi/logoHome.png')}
                style={commonStyles.Logo}
                resizeMode={'contain'}
            >                
                {showIcon(icon, navigation, alertFun)}     
                {menuIconForWeb(icon, navigation, alertFun)}        
            </ImageBackground>
        </View>
    );
}

const Logo = ({ icon, navigation, bgColor, alertFun }) => { // renderizza il logo con eventualmente il tasto indietro, logout o menu
    return (
        <View style={{backgroundColor: bgColor ? bgColor : null}}>
            <ImageBackground
                source={require('../../image/loghi/logoHome.png')}
                style={commonStyles.Logo}
                resizeMode={'contain'}
            >
                {showIcon(icon, navigation, alertFun)}
            </ImageBackground>
        </View>
    );
}

export {Logo,  Header}; // esporta logo e header come oggetto composto da componente

const showIcon = (icon, navigation, alertFun) => { // mostra le icone indietro, logout e menu
    if (icon === 1) // indietro
        return <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Image
                source={require('../../image/icons/back.png')}
                style={{
                    width: 80,
                    height: 20,
                    resizeMode: 'contain'
                }}
            />
            </TouchableOpacity>
    else if (icon === 2) // logout
        return <TouchableOpacity onPress={alertFun} style={{marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Image
                source={require('../../image/icons/logout.png')}
                style={{
                    width: 80,
                    height: 20,
                    resizeMode: 'contain'
                }}
            />
        </TouchableOpacity>
    if (icon === 3) // menu (per adesso si comporta come il logout)
        return <TouchableOpacity  onPress={() => (<NavigationDrawerHeader navigationProps={navigation} />)} style={{ marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Image
                source={require('../../image/icons/menuButton.png')}
                style={{
                    width: 80,
                    height: 20,
                    resizeMode: 'contain'
                }}
            />
        </TouchableOpacity>
    return <></>// se icon è uguale a 0 o a qualsiasi altro valore
}
