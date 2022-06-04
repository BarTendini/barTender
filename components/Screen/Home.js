import React, {useState} from 'react';
import {View, Platform, SafeAreaView, Alert, FlatList} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/BannerTender.js";
import BarSelection from "../componenti/BarSelection";
import AwesomeAlert from "react-native-awesome-alerts";
import {Location} from "../componenti/Location";
import BarsInfo from "../../dati/BarsInfo"
import {IconsButton} from "../../dati/IconsButton";
import TenderFragment from "../componenti/TenderFragment";

const Home = ({ navigation }) => { // funzione generatrice della schermata home
    const [showBars, setShowBars] = useState(false)
    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }

    const posizioneOttenuta = () => { // ???
        setShowBars(true)
    }
    const barList = () => { // definizione funzione che mostra i bar
        if (showBars) // se non è nullo restituisce un component di tipo View con flatList e componente fatto da noi "BarSelection"
            return <View style={commonStyles.ViewHome}>
                <FlatList data={BarsInfo} renderItem={item =>
                    <BarSelection Bar={item.item} navigation={navigation} />
                }
                />
            </View>
    }
    return (
        <TenderFragment navigation={navigation}>
            <Location animEnd={posizioneOttenuta}/>
            {barList()}
        </TenderFragment>
    );
};

export default Home;

/*
<AwesomeAlert
                show={alert}
                showProgress={false}
                title="Logout"
                message="Sei sicuro? Vuoi eseguire uno logout?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancella"
                confirmText="Conferma"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    hideAlert()
                    navigation.replace('Autenticazione');
                }}
                overlayStyle={{height: '100%'}}
                alertContainerStyle={{height: '100%', width: '100%', alignSelf: 'center'}}
            />
*/
