import React, {useRef, useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Platform} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/HeaderTender.js";
import TenderButton from "../componenti/TenderButton";
import AwesomeAlert from "react-native-awesome-alerts";
import {DrinkCardTender} from "../Card/TenderCard";
import {IconsButton} from "../../dati/IconsButton";

const BarDescription = ({route, navigation}) => {
    const bar = useRef(route.params).current;
    const [alert, setAlert] = useState(false)
    const showAlert = () => {
        setAlert(true)
    };

    const hideAlert = () => {
        setAlert(false)
    };
    const feedback = () => {
        return bar.feed.map((item, index) => {
            return (
                <View style={styles.ViewDescrizioneTesto} key={index}>
                    <View style={styles.ViewFeedNome}>
                        <View style={{flex: 1}}>
                            <Text style={styles.FeedNome}>{item.nome} dice:</Text>
                        </View>
                        <View style={{flex: 0.2}}>
                            <Text style={styles.FeedTestoVoto}>{item.voto}/5</Text>
                        </View>
                    </View>
                    <View style={styles.ViewFeedTesto}>
                        <Text style={styles.FeedTesto}>{item.txt}</Text>
                    </View>
                </View>
            )
        })
    }
    const infoOrari = () => {
        if (Platform.OS === 'web') {
            showAlert()
        } else {
            Alert.alert(
                "Orari bar",
                bar.orari,
                [
                    {text: "Ok",}
                ]
            );
        }
    }
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={IconsButton.back} navigation={navigation} bgColor={'#ffcc8b'}/>
            <View style={styles.MarginTop}>
                <Text style={styles.Title}>{bar.nome}</Text>
                <Text style={{textAlign: 'center',}}>{bar.via}</Text>
            </View>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                {/*Sezione di distanza, status, orari*/}
                <View style={styles.ViewInfo}>
                    {/*Sotto titolo di distanza, status, orari*/}
                    <View style={styles.ViewInfoTitle}>
                        <View style={styles.ViewInfoSubTitle}>
                            <Text style={styles.TextInfoTitle}>Distanza:</Text>
                        </View>
                        <View style={styles.ViewInfoSubTitle}>
                            <Text style={styles.TextInfoTitle}>Status:</Text>
                        </View>
                        <TouchableOpacity onPress={infoOrari} style={styles.ViewInfoSubTitle}>
                            <Text style={[styles.TextInfoTitle, {color: '#007fff'}]}>Orario:</Text>
                        </TouchableOpacity>
                    </View>
                    {/*Valori di distanza, status, orari*/}
                    <View style={styles.ViewInfoTitle}>
                        <View style={styles.ViewInfoSubTitle}>
                            <Text style={{textAlign: 'center',}}>{bar.dist}</Text>
                        </View>
                        <View style={styles.ViewInfoSubTitle}>
                            <Text style={{textAlign: 'center',}}>{bar.status}</Text>
                        </View>
                        <TouchableOpacity onPress={infoOrari} style={styles.ViewInfoSubTitle}>
                            <Text style={{textAlign: 'center', color: '#007fff'}}>{bar.orario}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Descrizione Locale*/}
                <DrinkCardTender title={"Descrizione:"}>
                    <View style={styles.ViewDescrizioneTesto}>
                        <Text style={styles.TestoDescrizione}>{bar.descr}</Text>
                    </View>
                </DrinkCardTender>

                {/*Feedback*/}
                <DrinkCardTender title={"Feedback:"}>
                    {feedback()}
                </DrinkCardTender>
                <View style={{marginBottom: Platform.OS === 'android' ? 70 : 60,}}/>
            </ScrollView>

            <View style={{
                position: 'absolute',
                width: '100%',
                height: Platform.OS === 'android' ? '8%' : '14%',
                bottom: 0,
                justifyContent: 'center',
                // borderColor: 'black',
                // borderWidth: 3,
            }}>
                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 0.2}}
                    style={{height: 100,}}
                >
                    <TenderButton testo={'🍹 ORDINA'} navigation={navigation} bar={bar}/>
                </LinearGradient>
            </View>

            <AwesomeAlert
                show={alert}
                showProgress={false}
                title="Orari bar"
                message={bar.orari}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    hideAlert()
                }}
                overlayStyle={{height: '100%'}}
                alertContainerStyle={{height: '100%', width: '100%', alignSelf: 'center'}}
            />
        </SafeAreaView>
    );
};

export default BarDescription;

const styles = StyleSheet.create({
    MarginTop: {
        marginTop: 10,
    },
    Title: {
        textAlign: 'center',
        fontSize: 36,
    },
    ViewInfo: {
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 20
    },
    ViewInfoTitle: {
        flexDirection: "row",
        justifyContent: "center",
    },
    ViewInfoSubTitle: {
        flex: 1,
    },
    TextInfoTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Descrizione: {
        backgroundColor: '#ffcc8b',
        marginTop: 20,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingBottom: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 4,
        shadowOpacity: 0.5,
    },
    ViewDescrizioneTesto: {
        marginHorizontal: 20,
        marginTop: 15,
    },
    TestoTitoloDescr: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    TestoDescrizione: {
        fontSize: 18
    },
    ViewFeedNome: {
        marginTop: 5,
        flexDirection: "row",
    },
    ViewFeedTesto: {
        marginTop: 5,
    },
    FeedNome: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    FeedTesto: {
        fontSize: 16,
    },
    FeedTestoVoto: {
        fontSize: 20,
        textAlign: 'right',
    }
})
