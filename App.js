import {StyleSheet, Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ChangeLogScreen, Login, Register, SplashScreen} from './components/Screen/Screens'
import DrawerNavigationRoutes from './components/navigator/DrawerNavigatorRoutes';
import React from "react";
import {UserContext} from "./UserContext";
//AGGIUNGI HERMES COME ENGINE PER VELOCIZZARE L'APP

//Aggiugne le animazioni per android
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


const Stack = createNativeStackNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Registrati"
                component={Register}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default function App() {
    const [user, setUser] = React.useState("Gianni");
    const [selBarName, setSelBarName] = React.useState("Da Pino");
    const value = {user, setUser, selBarName, setSelBarName};

    return (
        <UserContext.Provider value={value}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="DrawerNavigationRoutes">
                    {/* SplashScreen which will come once for 5 Seconds */}
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        // Hiding header for Splash Screen
                        options={{headerShown: false}}
                    />
                    {/* Auth Navigator: Include Login and Signup */}
                    <Stack.Screen
                        name="Autenticazione"
                        component={Auth}
                        options={{headerShown: false}}
                    />
                    {/* Navigation Drawer as a landing page */}
                    <Stack.Screen
                        name="DrawerNavigationRoutes"
                        component={DrawerNavigationRoutes}
                        // Hiding header for Navigation Drawer
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="ChangeLog"
                        component={ChangeLogScreen}
                        // Hiding header for Navigation Drawer
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
