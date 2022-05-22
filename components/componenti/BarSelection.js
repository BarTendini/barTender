import {View, Text, Image, TouchableOpacity} from "react-native";
import commonStyles from "../../styles/CommonStyles";
import {LinearGradient} from 'expo-linear-gradient';


const BarSelection = ({ Bar, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.push('BarDescription', Bar)}
            style={{ width: '100%', borderColor: Bar.color, borderWidth:6, borderRadius: 50, marginTop: 10}}
        >
            <LinearGradient
                    colors={[Bar.color+"00", Bar.color+"00", Bar.color + "FF"]}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    style={{flex: 1, borderRadius: 40}}
                >
            <Text style={{
                textAlign: 'center', // <-- the magic
                fontWeight: 'bold',
                color: Bar.textColor ? Bar.textColor : 'black',
                fontSize: 24,
            }}>{Bar.nome}</Text>
            <View style={{ flexDirection: "column", marginHorizontal: 20, paddingBottom: 15, }}>
                <Image
                    source={Bar.image}
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
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default BarSelection;
