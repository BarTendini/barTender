import {SafeAreaView, ScrollView, View, StyleSheet, Text} from "react-native";
import {Logo,Header} from "../componenti/HeaderTender";
import commonStyles from "../../styles/CommonStyles";

const DrinkMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={2} navigation={navigation} bgColor={'#ffcc8b'} />
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.ViewInfo}>
                    <Text style={styles.FeedTestoVoto}>Drink</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DrinkMenu;


const styles = StyleSheet.create({
    FeedTestoVoto: {
        fontSize: 20,
        textAlign: 'center',
    }
})
