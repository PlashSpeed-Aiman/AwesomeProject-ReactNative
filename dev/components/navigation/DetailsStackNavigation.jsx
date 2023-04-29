import { TransitionPresets,createStackNavigator } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { View, StyleSheet, Linking, ToastAndroid } from 'react-native';
import { Text, Button, List, IconButton, Card } from 'react-native-paper';
import AboutScreen from '../AboutScreen';
import { realmConfig } from '../database/database';
import DetailsScreen from '../DetailScreen';
import { CommonActions } from '@react-navigation/native';


const Stack = createStackNavigator();
export const DetailsStackNavigator = ({navigation}) => {
  
  return (
    
    <Stack.Navigator  initialRouteName='Details' screenOptions={{
      headerShown: false,
      
    }}
    >
      <Stack.Screen  name="Details" component={DetailsScreen} />
      <Stack.Screen options={{
            ...TransitionPresets.FadeFromBottomAndroid
      }} name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}