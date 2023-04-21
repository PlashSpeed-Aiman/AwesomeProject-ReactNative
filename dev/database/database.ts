import Realm from 'realm';
import {Contact} from '../model/contact';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const realmConfig: Realm.Configuration = {
  schema: [Contact],
};
