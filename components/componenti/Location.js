import {View, LayoutAnimation, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {useState} from "react";

export const Location = ({animEnd}) => {
    const [text, setText] = useState('Premi per cercare in base alla posizione')
    const [isSearching, setSearching] = useState(false)
    const ricerca = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, endAnim)
        setSearching(true)
    }
    const endAnim = () => {
        setText('Via Dante, 12')
        animEnd()
    }
    return (
        <View style={[{
            flexDirection: "row",
            alignItems: isSearching ? 'flex-start' : 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginHorizontal: 20
        }, isSearching ? {} : {flex: 1}]}
        >
            <TouchableOpacity onPress={ricerca} style={styles.Bottone}>
                <Text style={styles.Testo}>{text}</Text>
                <Entypo name="location-pin" size={32} color="black" />
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
    Bottone: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        borderColor: 'black',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 50
    },
    Testo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    }
});
