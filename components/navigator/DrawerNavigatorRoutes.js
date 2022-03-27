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
import DrinkMenuScreen from '../Screen/DrinkMenu';
import ChangeLog from '../Screen/ChangeLog';
import BarDescription from '../Screen/BarDescription'
import DrinkType from '../Screen/DrinkTypes';
import DrinkMenu from '../Screen/DrinkMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => { //serve per lanciare la pagina desiderata dal menu laterale
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
const SettingScreenStack = ({navigation}) => {//serve per lanciare la pagina desiderata dal menu laterale
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
        </Stack.Navigator>
    );
};

const ChangeLogScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="ChangeLogScreen">
            <Stack.Screen
                name="ChangeLogScreen"
                component={ChangeLog}
                options={{
                    title: 'ChangeLog', //Set Header Title
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
