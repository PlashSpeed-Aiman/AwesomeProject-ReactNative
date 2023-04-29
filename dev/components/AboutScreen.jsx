import React, {useMemo} from 'react';
import {View, StyleSheet, Linking, ToastAndroid} from 'react-native';
import {Text, Button, List, IconButton, Card, TextInput} from 'react-native-paper';
import {red100} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import {realmConfig} from '../database/database';


export default function AboutScreen({navigation,route}) {

    const {contact} = route.params
    return(
        <View style={style.container}>
            <Card style={style.card}>
                <Card.Content>
                    <Text style={style.input}>{contact.telephoneNumber}</Text>
                    <TextInput style={style.input} mode='outlined' label={'Phone Number'} ></TextInput>
                    <TextInput style={style.input} mode='outlined' label={'Phone Number'} ></TextInput>
                </Card.Content>
                <Card.Actions>
                    <Button icon='content-save-settings-outline'>Save</Button>
                    <Button>Save</Button>
                </Card.Actions>
            </Card>
        </View>
    )


}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      padding: 15,
      width: '90%',
    },
    input:{
        margin:5
    }
  });