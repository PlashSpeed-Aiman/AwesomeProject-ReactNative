import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './dev/components/Home/HomeScreen.jsx';
import DetailsScreen from './dev/components/DetailScreen.jsx';
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyStack() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
