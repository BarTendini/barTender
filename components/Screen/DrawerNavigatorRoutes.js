// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './Home';
import SettingsScreen from './Settings';
import CustomSidebarMenu from '../CustomSidebarMenu';
import NavigationDrawerHeader from '../NavigationDrawerHeader';

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
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const SettingScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="SettingsScreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Impostazioni', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};

const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: {marginVertical: 5, color: 'white'},
                labelStyle: {
                    color: '#d8d8d8',
                },
            }}
            drawerContent={props => <CustomSidebarMenu {...props}/>} >
            <Drawer.Screen
                name="HomeScreenStack"
                options={{drawerLabel: 'Home', headerShown: false}}
                component={HomeScreenStack}
            />
            <Drawer.Screen
                name="SettingScreenStack"
                options={{drawerLabel: 'Impostazioni', headerShown: false}}
                component={SettingScreenStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;
