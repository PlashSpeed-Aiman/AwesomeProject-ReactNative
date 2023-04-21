import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, List} from 'react-native-paper';

export default function DetailsScreen() {
  return (
    <View>
      <List.AccordionGroup>
        <List.Accordion title="Accordion 1" id="1">
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion title="Accordion 2" id="2">
          <List.Item
            description="MYBALLS HURT"
            left={() => <Button title="TEST" />}
            title="Item 2"
          />
        </List.Accordion>
        <View>
          <Text>
            List.Accordion can be wrapped because implementation uses
            React.Context.
          </Text>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </View>
  );
}

const style  = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
