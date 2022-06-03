import {TouchableOpacity, SafeAreaView} from "react-native";
import {Text} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import Header from "../componenti/BannerTender";
import {IconsButton} from "../../dati/IconsButton";
import btnStyles from "../../styles/BtnStyles";


const HomeSelection = ({navigation}) => {
    return (
        <SafeAreaView style={commonStyles.AndroidHomeSafeArea}>
            <Header icon={IconsButton.logout} navigation={navigation} bgColor={'#ffcc8b'}/>

            <TouchableOpacity
                style={btnStyles.rectangle}
                onPress={() => { console.log(navigation); navigation.push('Impostazioni') }}
            >
                <Text style={{textAlign: "center"}}> Trova locali </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={btnStyles.rectangle}
                onPress={() => navigation.push('BarDescription', null)}
            >
                <Text style={{textAlign: "center"}}> Scegli da bere </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default HomeSelection;