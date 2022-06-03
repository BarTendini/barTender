import React from "react";
import {SafeAreaView, StatusBar, View} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {IconsButton} from "../../dati/IconsButton";
import Header from "./BannerTender";


// props, cioè i figli devono essere sempre il primo argomento, altrimenti viene visualizzato un oggetto vuoto
const TenderFragment = (props, {navigation}) => {
    return (
        <View style={{flex:1}}>
            <SafeAreaView style={{ flex:0, backgroundColor: '#ffcc8b' }} />
            <StatusBar hidden={false} backgroundColor="#ffcc8b" />
            <SafeAreaView style={commonStyles.AndroidHomeSafeArea} >
                <Header icon={IconsButton.logout} navigation={navigation} bgColor={'#ffcc8b'} />
                {props.children}
            </SafeAreaView>
        </View>
    )
}

export default TenderFragment;