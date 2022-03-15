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
            <View>
                <Text style={{textAlign: 'center', // <-- the magic
        fontWeight: 'bold'}}>
                    "committer:" {item.nome}    
                    dataPush: {item.dataPush}
                </Text>
                <Text>
                    {item.info}
                </Text>
            </View>
        </CardTender>
    );
    console.log("change log page");
    return (
        <SafeAreaView style={commonStyles.AndroidSafeArea}>
            <Text> {cha} </Text>
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
    }
});
