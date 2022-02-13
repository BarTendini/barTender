import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import commonStyles from "../../styles/CommonStyles";
import Logo from "../HeaderTender.js";
import {useRef} from "react";

const BarDescription = ({ route, navigation }) => {
    const bar = useRef(route.params).current;
    const feedback = () => {
        return bar.feed.map((item) => {
            return (
                <View style={styles.ViewDescrizioneTesto}>
                    <View style={styles.ViewFeedNome}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.FeedNome}>{item.nome} dice:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
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
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Logo icon={1} navigation={navigation} bgColor={'#ffcc8b'} />
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
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

                {/*Descrizione Locale*/}
                <View style={styles.Descrizione}>
                    <View style={styles.ViewDescrizioneTesto}>
                        <Text style={styles.TestoTitoloDescr}>Descrizione:</Text>
                    </View>
                    <View style={styles.ViewDescrizioneTesto}>
                        <Text style={styles.TestoDescrizione}>{bar.descr}</Text>
                    </View>
                </View>

                {/*Feedback*/}
                <View style={styles.Descrizione}>
                    <View style={styles.ViewDescrizioneTesto}>
                        <Text style={styles.TestoTitoloDescr}>Feedback:</Text>
                    </View>
                    {feedback()}
                </View>
            </ScrollView>

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
        paddingBottom: 15
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
