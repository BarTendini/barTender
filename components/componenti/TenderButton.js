import { View, TouchableOpacity, Text } from 'react-native';

const TenderButton = ({ testo }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 10,

        }}>
            <TouchableOpacity style={{
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
