import React from "react";
import {Alert, View, TouchableOpacity, Text, StyleSheet, Platform, Keyboard, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import Projectversion from "../../dati/Projectversion";
import {changes, cha} from "../../dati/ChangeLog";
import { FlatList } from "react-native-gesture-handler";
import CardTender from "../Card/CardTender";

const ChangeLog = ({ navigation }) => {


    const renderItem = ({ item }) => (

        <CardTender title={item.version}>
            <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Text style={styles.infoTextLeft}>
                            committer: {item.nome}
                        </Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={styles.infoTextRight}>
                            dataPush: {item.dataPush}
                        </Text>
                    </View>
                </View>
                <Text>
                    {item.info}
                </Text>
            </View>
        </CardTender>
    );
    console.log("change log page");
    return (
        <SafeAreaView style={commonStyles.AndroidSafeArea}>
            <View style={commonStyles.ViewHome}>
                <FlatList
                    data={changes}
                    renderItem={renderItem}
                    keyExtractor={item => item.version}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangeLog;



const styles = StyleSheet.create({
    Bottoni: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    InfoTextLeft: {
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold'
    },
    InfoTextRight: {
        textAlign: 'right', // <-- the magic
        fontWeight: 'bold'
    }
});
