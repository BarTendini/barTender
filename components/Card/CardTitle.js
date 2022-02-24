import {View, Text, StyleSheet} from "react-native";

const CardTitle = (elements) => {
    return (
        <View style={styles.ViewDescrizioneTesto}>
            <Text style={styles.TestoTitoloDescr}>{elements.children}</Text>
        </View>
    )
}

export default CardTitle;

const styles = StyleSheet.create({
    ViewDescrizioneTesto: {
        marginHorizontal: 20,
        marginTop: 15,
    },
    TestoTitoloDescr: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})
