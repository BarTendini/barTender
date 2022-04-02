import React from "react"; //quasi sempre necessario
import {SafeAreaView, Platform, ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {themeStyles} from "../../styles/theme/ThemeStyles"
import {Logo,Header} from "../componenti/HeaderTender";

const DrinkDescription = ({ route, navigation }) => {
    console.log("DrinkDescription");
    const drink = route.params.drink;
    return(
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <View>
                <Header icon={1} navigation={navigation} bgColor={'#ffcc8b'}/>
                <Text>
                    {drink.name}
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default DrinkDescription;