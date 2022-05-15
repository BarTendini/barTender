// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import { BarDescription, ChangeLogScreen, DrinkDescription, DrinkMenu, DrinkType, Home, Settings } from '../Screen/Screens'
import CustomSidebarMenu from "./CustomSidebarMenu";
import NavigationDrawerHeader from "./NavigationDrawerHeader";
import InitialSelectorScreen from "../Screen/InitialSelectorScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const InitialSelectionStack = ({navigation}) => { //serve per lanciare la pagina desiderata dal menu laterale
    return (
        <Stack.Navigator initialRouteName="InitialScreen">
            <Stack.Screen
                name="InitialScreen"
                component={InitialSelectorScreen}
                options={{
                    title: 'Selection', //Set Header Title
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
            <Stack.Screen
                name="Home"
                component={Home}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DrinkTypeScreen"
                component={DrinkType}
                options={{
                    title: 'Drink Type', //Set Header Title
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
            <Stack.Screen
                name="DrinkMenu"
                component={DrinkMenu}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DrinkDescription"
                component={DrinkDescription}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

const HomeScreenStack = ({navigation}) => { //serve per lanciare la pagina desiderata dal menu laterale
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={Home}
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
            <Stack.Screen
                name="BarDescription"
                component={BarDescription}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

const SettingScreenStack = ({navigation}) => {//serve per lanciare la pagina desiderata dal menu laterale
    return (
        <Stack.Navigator initialRouteName="SettingsScreen">
            <Stack.Screen
                name="SettingsScreen"
                component={Settings}
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

const DrinkMenuScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="DrinkMenuScreen">
            <Stack.Screen
                name="DrinkMenuScreen"
                component={DrinkMenu}
                options={{
                    title: 'Drink', //Set Header Title
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

const DrinkTypeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="DrinkTypeScreen">
            <Stack.Screen
                name="DrinkTypeScreen"
                component={DrinkType}
                options={{
                    title: 'Drink Type', //Set Header Title
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
            <Stack.Screen
                name="DrinkMenu"
                component={DrinkMenu}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DrinkDescription"
                component={DrinkDescription}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

const ChangeLogScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="ChangeLogScreen">
            <Stack.Screen
                name="ChangeLogScreen"
                component={ChangeLogScreen}
                options={{
                    title: 'ChangeLogScreen', //Set Header Title
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


const DrawerNavigatorRoutes = (props) => { //definisce cosa appare nel menù a scorrimento laterale
    return (
        <Drawer.Navigator
            screenOptions={{
            }}
            drawerContent={props => <CustomSidebarMenu {...props}/>} >
            <Drawer.Screen
                name="InitialStack"
                options={{
                    drawerLabel: 'Selection',
                    headerShown: false,
                    drawerActiveTintColor: 'red',
                    drawerInactiveTintColor: 'yellow',
                }}
                component={InitialSelectionStack}
            />
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

             <Drawer.Screen
                name="DrinkTypeScreenStack"
                options={{
                    drawerLabel: 'Drinks',
                    headerShown: false,
                    drawerActiveTintColor: 'red',
                    drawerInactiveTintColor: 'yellow',
                }}
                component={DrinkTypeScreenStack}
            />
            <Drawer.Screen
                name="ChangeLogScreenStack"
                options={{
                    drawerLabel: 'ChangeLog',
                    headerShown: false,
                    drawerActiveTintColor: 'red',
                    drawerInactiveTintColor: 'yellow',
                }}
                component={ChangeLogScreenStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;


/* non funziona
const BarDescriptionScreenStack = ({navigation}) => { //serve per lanciare la pagina desiderata dal menu laterale
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="BarDescription"
                component={BarDescription}
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
*/
