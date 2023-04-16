import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card, Button, TextInput,ToastAndroid} from 'react-native-paper';
export default function HomeScreen() {
  const Message = useCallback(async (number) => {
    if(number.length < 10) {
      await ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
      return;
    };
    await Linking.openURL(`whatsapp://send?text=Hello&phone=+60${number}}`).catch((err) => console.log(err));
  });
  const WhatsappLinkCard = useCallback(() => (
    <Card mode="outlined" style={{marginTop: 10}}>
      <Card.Content>
        <Text>WhatsApp Number</Text>
      </Card.Content>
    </Card>
  ));

  let phoneNumber = '';
  let whatsappLink = '';

  return (
    <View style={style.container}>
      <Card style={style.card}>
        <Card.Content>
          <Text>WhatsApp Number</Text>
          <TextInput keyboardType="phone-pad"
            onChangeText={data => {
              phoneNumber = data.toString();
            }}
            onSubmitEditing={()=>{return false}}></TextInput>
          <WhatsappLinkCard/>
        </Card.Content>
        <Card.Actions style={{marginEnd: 10}}>
          <Button
            onPress={() => {
              Message(phoneNumber);
            }}>
            Message
          </Button>
          <Button onPress={() => {}}>Save</Button>
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
