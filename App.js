import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./components/Screen/Login";
import Register from "./components/Screen/Register";
import SplashScreen from "./components/Screen/SplashScreen";
import BarDescription from "./components/Screen/BarDescription";
import DrawerNavigationRoutes from './components/navigator/DrawerNavigatorRoutes';
//import BarSelection from "./components/Screen/Home";

//AGGIUNGI HERMES COME ENGINE PER VELOCIZZARE L'APP

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

export default function App () {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
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
                name="BarDescription"
                component={BarDescription}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />
        </Stack.Navigator>
      </NavigationContainer>
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
