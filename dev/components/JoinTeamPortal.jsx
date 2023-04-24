import { MenuContext } from '../../context/menu-provider';
import { useCallback, useContext, useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from 'react-native-paper';

export const JoinTeamPortal = () => {
  const { handleHide, joinPortalDialogVisible } = useContext(MenuContext);

  const [input, setInput] = useState('');

  const onChangeText = useCallback((input) => {
    setInput(input);
  }, []);

  const inviteCodeTextInputChangeText = useCallback(
    (input) => onChangeText(input.toUpperCase()),
    [onChangeText]
  );

  const onDialogDismiss = useCallback(() => {
    handleHide({
      dialogType: 'joinPortal',
    });
  }, [handleHide]);

  return (
    <Provider>
      <Portal>
        <Dialog
          visible={joinPortalDialogVisible}
          onDismiss={onDialogDismiss}
          style={{
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0,
          }}>
          <Dialog.Title>Invite Code</Dialog.Title>
          <Dialog.Content>
            <TextInput
              maxLength={6}
              autoCapitalize="characters"
              placeholder="Enter Invite Code"
              onChangeText={inviteCodeTextInputChangeText}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <View style={{ flexDirection: 'row' }}>
              <Button mode="elevated" onPress={onDialogDismiss}>
                Join Team
              </Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button mode="elevated" onPress={onDialogDismiss}>
                Cancel
              </Button>
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};
