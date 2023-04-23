import React, {useMemo} from 'react';
import {View, StyleSheet, Linking, ToastAndroid, StyleProp} from 'react-native';
import {Text, Button, List, IconButton, Card} from 'react-native-paper';

export default function SettingsScreen() {
  return (
    <View style={style.container}>
      <Text>This is a Details Page</Text>
    </View>
  );
}

const style: any = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
