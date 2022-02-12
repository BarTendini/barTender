import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {useState, useRef} from "react";

export const Location = ({animEnd}) => {
    const centerAnim = useRef(new Animated.Value(1)).current
    const [text, setText] = useState('Premi per cercare in base alla posizione')
    const ricerca = () => {
        Animated.timing(
            centerAnim,
            {
                toValue: 0.1,
                duration: 1000,
                useNativeDriver: false
            }
        ).start(endAnim);
        //setTimeout(() => {  }, 1200)
    }
    const endAnim = () => {
        centerAnim.setValue('none')
        setText('Via Dante, 12')
        animEnd()
    }
    return (
        <Animated.View style={{
            flex: centerAnim,
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "center",
            marginTop: 10,
            marginHorizontal: 20
        }}
        >
            <TouchableOpacity onPress={ricerca} style={styles.Bottone}>
                <Text style={styles.Testo}>{text}</Text>
                <Entypo name="location-pin" size={32} color="black" />
            </TouchableOpacity>
        </Animated.View>
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
