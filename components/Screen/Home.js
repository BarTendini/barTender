import React, {useState} from 'react';
import {View} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import BarsInfo from "../../dati/BarsInfo"
import {IconsButton} from "../../dati/IconsButton";
import {TenderFragment, TenderFlatList, Location, BarSelection} from "../componenti/tender-components";

const Home = ({ navigation }) => { // funzione generatrice della schermata home
    const [showBars, setShowBars] = useState(false)
    const [location, setLocation] = useState('')

    const locationLoaded = (location) => {
        return setLocation(location)
    }

    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }

    const posizioneOttenuta = () => { // ???
        setShowBars(true)
    }

    const showLocation = () => {
        if (!showBars)
            return (<Location animEnd={posizioneOttenuta} locationToSet={locationLoaded}/>)
        return barList()
    }

    const barList = () => { // definizione funzione che mostra i bar
        if (showBars) // se non è nullo restituisce un component di tipo View con flatList e componente fatto da noi "BarSelection"
            return (
                <TenderFlatList data={BarsInfo} renderItem={item =>
                        <BarSelection Bar={item.item} navigation={navigation}/>
                    }
                style={{marginTop: -10, marginBottom: -15}}/>
            )
    }
    return (
        <TenderFragment navigation={navigation} title={location}>
            {showLocation()}
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
