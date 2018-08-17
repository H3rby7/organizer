import { Member } from '../../shared/model/member';
import { MongoClient, Db } from 'mongodb';
import { COLLECTION_NAME } from '../src/dao/member.dao';

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