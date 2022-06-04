import React from "react";
import {SafeAreaView, StatusBar, View} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {IconsButton} from "../../dati/IconsButton";
import Header from "./BannerTender";


// props, cioè i figli devono essere sempre il primo argomento, altrimenti viene visualizzato un oggetto vuoto
const TenderFragment = (props, {navigation}) => {
    console.log("TenderFragment")
    console.warn(navigation)
    const getIcon=(str)=>{
        if(str === IconsButton.logout.name){ //name: 'logout',
            return IconsButton.logout
        }
        else if(str === IconsButton.menu.name){ //name: 'menu',
            return IconsButton.logout
        }else if(str === IconsButton.none.name){ //name: 'none',
            return IconsButton.logout
        }
        //name: 'back',
        return IconsButton.back
    }
    return (
        <View style={{flex:1 }}>
            <SafeAreaView style={{ flex:0, backgroundColor: '#ffcc8b' }} />
            <StatusBar hidden={false} backgroundColor="#ffcc8b" />
            <SafeAreaView style={[commonStyles.AndroidHomeSafeArea,{backgroundColor: props.bgColor? props.bgColor:'#ffffff'}]} >
                <Header icon={getIcon(props.icon)} navigation={navigation} bgColor={'#ffcc8b'} noGradient={!!props.noGradient}/>
                {props.children}
            </SafeAreaView>
        </View>
    )
}

export default TenderFragment;