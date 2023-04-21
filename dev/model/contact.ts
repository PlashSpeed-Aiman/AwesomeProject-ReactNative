import Realm from 'realm';

export class Contact extends Realm.Object<Contact> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  telephoneNumber!: string;
  description!: string;
  collectionName!: string;

  static schema = {
    name: 'Contact',
    properties: {
      _id: 'objectId',
      name: 'string',
      telephoneNumber: 'string',
      description: 'string',
      collectionName: 'string',
    },
    primaryKey: '_id',
  };
}
