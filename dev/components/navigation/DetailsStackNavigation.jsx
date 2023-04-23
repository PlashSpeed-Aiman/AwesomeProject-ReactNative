import React, {useMemo} from 'react';
import {View, StyleSheet, Linking, ToastAndroid} from 'react-native';
import {Text, Button, List, IconButton, Card} from 'react-native-paper';
import {realmConfig} from '../database/database';
import DetailsScreen from './dev/components/DetailScreen.jsx';


const DetailsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    );
  }