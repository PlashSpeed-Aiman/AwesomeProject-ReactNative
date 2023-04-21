import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {createRealmContext} from '@realm/react';
import {realmConfig} from './dev/database/database';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './dev/components/Home/HomeScreen.jsx';
import DetailsScreen from './dev/components/DetailScreen.jsx';
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Log Book" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  const {RealmProvider} = realmConfig;

  return (
    <NavigationContainer>
      <RealmProvider>
        <PaperProvider>
          <MyStack />
        </PaperProvider>
      </RealmProvider>
    </NavigationContainer>
  );
}

export default App;
