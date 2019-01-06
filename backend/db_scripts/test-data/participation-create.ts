import { Db } from 'mongodb';
import { DB_NAME_PARTICIPATION } from '../../constants/collection-names';
import { Participation } from '../../../shared/model/participation';
import { PARTICIPATION_STATUS_YES, PARTICIPATION_STATUS_NO, PARTICIPATION_STATUS_EMERGENCY } from '../../../shared/constants/participation-stati';

const COLLECTION_NAME = DB_NAME_PARTICIPATION;

const insertTestParticipations = (db: Db): Promise<any> => {
  const collection = db.collection(COLLECTION_NAME);
  return new Promise(function (resolve, reject) {
    const participations: Participation[] = [
      new Participation('testmember0', PARTICIPATION_STATUS_YES, 'testevent0'),
      new Participation('testmember0', PARTICIPATION_STATUS_YES, 'testevent1'),
      new Participation('testmember0', PARTICIPATION_STATUS_YES, 'testevent2'),

      new Participation('testmember1', PARTICIPATION_STATUS_NO, 'testevent0'),
      new Participation('testmember1', PARTICIPATION_STATUS_NO, 'testevent1'),
      new Participation('testmember1', PARTICIPATION_STATUS_NO, 'testevent2'),

      new Participation('testmember2', PARTICIPATION_STATUS_EMERGENCY, 'testevent0'),
    ];

    collection.insertMany(
      participations,
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

export default insertTestParticipations;