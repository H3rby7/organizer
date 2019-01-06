import { Member } from '../../shared/model/member';
import { Db } from 'mongodb';
import { DB_NAME_MEMBER } from '../constants/collection-names';

const COLLECTION_NAME = DB_NAME_MEMBER;

const insertTestMembers = (db: Db): Promise<any> => {
  const collection = db.collection(COLLECTION_NAME);
  return new Promise(function (resolve, reject) {
    collection.insertMany(
      [
        new Member('Janis'),
        new Member('Johannes'),
        new Member('Sara'),
      ],
      function (err, result) {
        if (err) {
          console.log(`Failed insert into table: ${COLLECTION_NAME}`);
          reject(err);
          return;
        }
        console.log(`Inserted test members into table: ${COLLECTION_NAME}`);
        resolve(result);
      });
  })
}

export default insertTestMembers;