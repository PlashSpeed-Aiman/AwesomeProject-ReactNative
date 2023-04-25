import { createRealmContext } from '@realm/react';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Platform,
  Keyboard,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Card, Button, TextInput, List } from 'react-native-paper';
import { realmConfig } from '../../database/database';
import {CountryCodeComponent} from './CountryCodeComponent';
const nonDigitRegExp = /[^0-9]+/g;
const { useRealm } = realmConfig;


const WhatsappLinkCard = React.memo(({ link, countryCodeVal }) => {
  const copyToClipboard = useCallback(() => {
    Clipboard.setString(API_LINK + link);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    }
  }, [link]);

  const API_LINK = 'https://wa.me/';
  return (
    <Card
      onLongPress={() => copyToClipboard()}
      mode="outlined"
      style={{ marginTop: 10 }}>
      <Card.Content>
        <Text>Long Press to Copy Link</Text>

        <Text>{API_LINK + countryCodeVal + link}</Text>
      </Card.Content>
    </Card>
  );
});
export default function HomeScreen() {
  const realm = useRealm();
  const [description, setDescription] = useState(() => '');
  const [whatsappLink, setWhatsappLink] = useState(() => '');
  const [countryCode, setCountryCode] = useState(() => '');
  const createContact = useCallback((num, desc, collectionName) => {
    if (num < 10) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Entry has less than 10 numbers', ToastAndroid.SHORT);
      }
      return;
    }
    realm.write(() => {
      realm.create('Contact', {
        _id: new Realm.BSON.ObjectId(),
        name: '',
        telephoneNumber: num,
        description: desc ? desc : 'No Description',
        collectionName: collectionName ? collectionName : 'None',
      });
    });
    if (Platform.OS === 'android') {
      ToastAndroid.show('Contact added to Collections', ToastAndroid.SHORT);
    }
  }, [whatsappLink]);
  const Message = useCallback(async () => {
    if (whatsappLink.length < 10) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Entry has less than 10 numbers', ToastAndroid.SHORT);
      }
      return;
    }
    await Linking.openURL(`whatsapp://send?text=Hello&phone=+${countryCode}${whatsappLink}`);
  }, [whatsappLink]);
  console.log("TEST")
  return (
    <View style={style.container}>
      <Text>WhatsApp Collections Management App</Text>
      <Card style={style.card}>
        <Card.Content>
          <CountryCodeComponent countryCodeVal={countryCode} countryCodeSetter={setCountryCode} />
          <TextInput
            label="WhatsApp Number"
            keyboardType="phone-pad"
            //this is bad, but i'll fix it later. Too many new each time a text changes
            onChangeText={data =>
              setWhatsappLink(data.replaceAll(nonDigitRegExp, ''))
            }
            onSubmitEditing={() => Keyboard.dismiss()}
          />

          <List.Accordion
            style={{ padding: 1 }}
            titleStyle={{ fontSize: 10 }}
            title="Extra Options">
            <TextInput
              placeholder="Description"
              mode="outlined"
              onChangeText={setDescription}
            />
            <TextInput placeholder="Collection Name" mode="outlined" />
          </List.Accordion>
          <WhatsappLinkCard link={whatsappLink} countryCodeVal={countryCode} />
        </Card.Content>
        <Card.Actions style={{ marginEnd: 10 }}>
          <Button
            icon={'plus'}
            onPress={() => {
              createContact(countryCode + whatsappLink, description);
            }}>
            Add
          </Button>
          <Button onPress={Message}>Message</Button>
        </Card.Actions>
      </Card>
    </View>
  );
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
});

export const MemoizedHome = React.memo(HomeScreen)