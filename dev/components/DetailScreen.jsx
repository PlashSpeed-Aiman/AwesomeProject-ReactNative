import React, { useMemo } from 'react';
import { View, StyleSheet, Linking, ToastAndroid } from 'react-native';
import { Text, Button, List, IconButton, Card } from 'react-native-paper';
import { red100 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import { realmConfig } from '../database/database';

const { useRealm, useQuery } = realmConfig;

const ContactsView = ({ contacts, deleteContact }) => {


  const DeleteButton = ({ contact }) => (
    <IconButton
      mode="contained"
      containerColor="#663399"
      iconColor="white"
      icon={'delete'}
      style={{
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      title="Delete"
      onPress={() => deleteContact(contact._id)}></IconButton>
  )

  return contacts.map((contact, index) => (
    <List.Item
      key={index}
      title={contact.telephoneNumber}
      titleStyle={{fontSize:20}}
      description={`${contact.description}\n${contact.collectionName}`}
      onPress={async () => {
        await Linking.openURL(
          `whatsapp://send?text=Hello&phone=+${contact.telephoneNumber}`,
        ).catch((exception) => {
          ToastAndroid.show("ERROR: WhatsApp not detected on device", ToastAndroid.SHORT)
        });
      }}
      right={() =>
        <>
          <IconButton icon="square-edit-outline" onPress={(e)=>{console.log("TEST")}}/>
          <DeleteButton contact={contact} />

        </>
      }
    />
  ));
};

export default function DetailsScreen() {
  const realm = useRealm();
  const deleteContact = id => {
    realm.write(() => {
      const contact = realm.objectForPrimaryKey('Contact', id);
      realm.delete(contact);
    });
    ToastAndroid.show('Contact deleted', ToastAndroid.SHORT);
  };
  const contacts = useQuery('Contact');

  const randomFun = () => {
    realm.write(() => {
      realm.update
    })
  }
  console.log('operation re-render')
  return (
    <View>
      <List.Accordion title="All" id="1" >
        <ContactsView contacts={contacts} deleteContact={deleteContact} />
      </List.Accordion>
      {/* <View>
          <Text>
            List.Accordion can be wrapped because implementation uses
            React.Context.
          </Text>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </View> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
