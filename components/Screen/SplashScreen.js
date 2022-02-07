import React, {useState, useEffect} from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image
} from 'react-native';

const SplashScreen = ({navigation}) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            //Check if user_id is set or not
            //If not then send for Authentication
            //else send to Home Screen
            /*AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(
                    value === null ? 'Auth' : 'DrawerNavigationRoutes'
                ),
            );*/
            navigation.replace('Autenticazione');
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../image/loghi/splash.png')}
                style={styles.image}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc8b',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    }
});
