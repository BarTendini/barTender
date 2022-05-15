import { View, TouchableOpacity, Text } from 'react-native';

const TenderButton = ({ testo, navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 10,

        }}>
            <TouchableOpacity
                onPress={() => navigation.push('DrinkTypesSelection')}
                style={{
                    backgroundColor: '#ffcc8b',
                    paddingVertical: 10,
                    borderRadius: 50,
            }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{testo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TenderButton;
