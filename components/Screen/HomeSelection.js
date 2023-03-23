import {TouchableOpacity} from "react-native";
import {Text} from "react-native";
import btnStyles from "../../styles/BtnStyles";
import TenderFragment from "../componenti/TenderComponents/TenderFragment";


const HomeSelection = ({navigation}) => {
    return (
        <TenderFragment navigation={navigation}>

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

        </TenderFragment>
    )
}

export default HomeSelection;