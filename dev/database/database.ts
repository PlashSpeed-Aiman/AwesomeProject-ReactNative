import {createRealmContext} from '@realm/react';
import Realm from 'realm';
import {Contact} from '../model/contact';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const realmConfig: any = createRealmContext({
  schema: [Contact],
});
