import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {realmConfig} from './dev/database/database';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider, MD3Colors} from 'react-native-paper';
import {MemoizedHome} from './dev/components/Home/HomeScreen';
import SettingsScreen from './dev/components/SettingsScreen';
import {DetailsStackNavigator} from './dev/components/navigation/DetailsStackNavigation';
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyStack() {
  console.log('DrawerOpen');
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: MD3Colors.primary50,
        },
        drawerActiveBackgroundColor: MD3Colors.secondary60,
        drawerActiveTintColor: 'white',
        unmountOnBlur: true,
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={MemoizedHome} />
      <Drawer.Screen name="Collections" component={DetailsStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
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
