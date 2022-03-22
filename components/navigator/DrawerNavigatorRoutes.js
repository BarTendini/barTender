// Import React
import React from 'react';
import {View, Text} from 'react-native';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from '../Screen/Home';
import SettingsScreen from '../Screen/Settings';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color, non nella bar laterale
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

const SettingScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="SettingsScreen">
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Impostazioni', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color, non nella bar laterale
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            screenOptions={{
            }}
            drawerContent={props => <CustomSidebarMenu {...props}/>} >
            <Drawer.Screen
                name="HomeScreenStack"
                options={{
                    drawerLabel: 'Home',
                    headerShown: false,
                    drawerActiveTintColor: 'red',
                    drawerInactiveTintColor: 'yellow',
            }}
                component={HomeScreenStack}
            />
            <Drawer.Screen
                name="SettingScreenStack"
                options={{
                    drawerLabel: 'Impostazioni',
                    headerShown: false,
                    drawerActiveTintColor: 'red',
                    drawerInactiveTintColor: 'yellow',
                }}
                component={SettingScreenStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;
