import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Platform,
  ToastAndroid,
} from 'react-native';
import {Card, Button, TextInput, Divider} from 'react-native-paper';
export default function HomeScreen() {
  
  const [whatsappLink, setWhatsappLink] = useState('');
  useEffect(setWhatsappLink(whatsappLink),[whatsappLink]);
  const Message = useCallback(async number => {
    if (number.length < 10) {
      if (Platform.OS === 'android')
        ToastAndroid.show('Entry has less than 10 numbers', ToastAndroid.SHORT);
      return;
    }
    await Linking.openURL(
      `whatsapp://send?text=Hello&phone=+60${number}}`,
    ).catch(err => console.log(err));
  },[]);
  const WhatsappLinkCard = useCallback(() => {
    let aRegex = /^\d{10}$/;
    const API_LINK = 'https://wa.me/';
    <Card mode="outlined" style={{marginTop: 10}}>
      <Card.Content>
        <Text>{API_LINK + whatsappLink}</Text>
      </Card.Content>
    </Card>
    
  },[whatsappLink]);
  const Toast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };



 

  return (
    <View style={style.container}>
      <Card style={style.card}>
        <Card.Content>
          <Text>WhatsApp Number</Text>
          <TextInput
            keyboardType="phone-pad"
            onChangeText={data => {
              phoneNumber = data.toString();
            }}
            onSubmitEditing={() => {
              return false;
            }}></TextInput>
          <WhatsappLinkCard />
        </Card.Content>
        <Card.Actions style={{marginEnd: 10}}>
          <Button
            onPress={() => {
              Message(phoneNumber);
            }}>
            Message
          </Button>
          <Button
            onPress={() => {
              Toast();
            }}>
            Save
          </Button>
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
  cardButtons: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
