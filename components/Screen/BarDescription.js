import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Logo from "../HeaderTender.js";
import {useRef} from "react";

const BarDescription = ({ route, navigation }) => {
    const bar = useRef(route.params).current;
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Logo icon={1} navigation={navigation} bgColor={'#ffcc8b'} />
            <View style={styles.MarginTop}>
                <Text style={styles.Title}>{bar.nome}</Text>
                <Text style={{ textAlign: 'center', }}>{bar.via}</Text>
            </View>
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
                    <View style={styles.ViewInfoSubTitle}>
                        <Text style={styles.TextInfoTitle}>Orario:</Text>
                    </View>
                </View>
                {/*Valori di distanza, status, orari*/}
                <View style={styles.ViewInfoTitle}>
                    <View style={styles.ViewInfoSubTitle}>
                        <Text style={{ textAlign: 'center', }}>{bar.dist}</Text>
                    </View>
                    <View style={styles.ViewInfoSubTitle}>
                        <Text style={{ textAlign: 'center', }}>{bar.status}</Text>
                    </View>
                    <View style={styles.ViewInfoSubTitle}>
                        <Text style={{ textAlign: 'center', }}>{bar.orario}</Text>
                    </View>
                </View>
            </View>
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
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 20
    },
    ViewInfoTitle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    ViewInfoSubTitle: {
        flex: 1,
    },
    TextInfoTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
