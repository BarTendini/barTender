import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {useState} from "react";

export const Location = () => {
    const [text, setText] = useState('Ricerca automatica della posizione')
    const ricerca = () => {
        setTimeout(() => { setText('Via Dante, 12') }, 1000)
    }
    return (
        <View style={styles.View}>
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
