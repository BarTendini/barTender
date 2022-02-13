import { View, TouchableOpacity, Text } from 'react-native';

const TenderButton = ({ testo }) => {
    return (
        <View style={{
            paddingTop: 5,
            marginHorizontal: 10,
            backgroundColor: 'white'
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
