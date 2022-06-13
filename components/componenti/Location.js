import {View, LayoutAnimation, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Platform} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, {useEffect, useState} from "react";

export const Location = ({animEnd, locationToSet}) => {
    const [text, setText] = useState('Calcolo posizione')
    const [animEnded, setAnimEnded] = useState(false)
    const [isSearching, setSearching] = useState(false)
    useEffect(() => {
        // write your code here, it's like componentWillMount
        setTimeout(ricerca, 1000)
    }, [])

    const ricerca = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, endAnim)
        setSearching(true)
    }
    const endAnim = () => {
        const location = 'Via Dante, 12'
        setText(location)
        setAnimEnded(true)
        locationToSet(location)
        animEnd()
    }
    const showLoader = () => {
        if (!animEnded) {
            const props = Platform.OS === 'android' ? {size:"large", color:"#0000ff"} : {size:"large"}
            return (
                <View>
                    <ActivityIndicator {...props} style={{marginVertical: 10}}/>
                </View>
            )


        }
    }

    return (
        <View style={[{
            flexDirection: "row",
            alignItems: isSearching ? 'flex-start' : 'center',
            justifyContent: 'center',
            marginHorizontal: 20
        }, isSearching ? {} : {flex: 1}]}
        >
            <TouchableOpacity style={styles.BottonePosizione}>
                <Text style={styles.Testo}>{text}</Text>
                {showLoader()}
                {/*<Entypo name="location-pin" size={32} color="black" />*/}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        marginHorizontal: 20
    },
    BottonePosizione: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        borderColor: 'black',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 50,
    },
    Bottone: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        borderColor: 'black',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 50,
        padding: 5,
    },
    Testo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    }
});
