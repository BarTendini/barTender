import {View, Text, Image, TouchableOpacity} from "react-native";
import commonStyles from "../styles/CommonStyles";

const BarSelection = ({ Bar, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.push('BarDescription', Bar)}
            style={{ width: '100%', backgroundColor: Bar.color, borderRadius: 50, marginTop: 10}}
        >
            <Text style={{
                textAlign: 'center', // <-- the magic
                fontWeight: 'bold',
                color: Bar.textColor ? Bar.textColor : 'black',
                fontSize: 24,
            }}>{Bar.nome}</Text>
            <View style={{ flexDirection: "column", marginHorizontal: 20, paddingBottom: 15, }}>
                <Image
                    source={getImage(Bar)}
                    style={commonStyles.RistoranteImm}
                />
                <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 20}}>
                    <View style={{ flex: 1, justifyContent: "flex-start",}}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: Bar.textColor ? Bar.textColor : 'black' }}>Aperto</Text>
                    </View>
                    <View style={{ flex: 1,}}>
                        <Text style={{
                            textAlign: 'right',
                            fontSize: 16,
                            fontWeight: "bold",
                            color: Bar.textColor ? Bar.textColor : 'black'
                        }}>Distanza: {Bar.dist}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BarSelection;

const getImage = (bar) => {
    switch (bar.rist) {
        case 0: {
            return require("../image/ristoranti/daPino.png")
        }
        case 1: {
            return require("../image/ristoranti/daDino.png")
        }
        case 2: {
            return require("../image/ristoranti/daGino.png")
        } default: {
            return require("../image/ristoranti/daPino.png")
        }
    }
}
