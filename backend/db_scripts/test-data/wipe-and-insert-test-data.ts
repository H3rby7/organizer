import insertTestMembers from './members-create';
import { MongoClient } from 'mongodb';
import config from '../../config/config';
import dropTable from './drop-table';
import { DB_NAME_MEMBER, DB_NAME_EVENT, DB_NAME_PARTICIPATION } from '../../constants/collection-names';
import insertTestEvents from './events-create';
import insertTestParticipations from './participation-create';

MongoClient.connect(config.dbUrl, { useNewUrlParser: true })
  .then(client => {
    const db = client.db();
    console.log('Connected successfully to db');

    /* DEFINE Scripts */
    const dropTables = [
      DB_NAME_MEMBER,
      DB_NAME_EVENT,
      DB_NAME_PARTICIPATION,
    ];
    const insertScripts = [
      insertTestMembers,
      insertTestEvents,
      insertTestParticipations,
    ];

    /* Script count */
    const scriptsToRun = dropTables.length + insertScripts.length;
    let scriptsRun = 0;

    /* EXECUTE Scripts */
    dropTables.forEach(e => {
      dropTable(db, e).then(closeClientIfDone).catch(closeClientIfDone);
    })
    insertScripts.forEach(e => {
      e(db).then(closeClientIfDone).catch(closeClientIfDone);
    });

    /* Cleanup */
    function closeClientIfDone(res) {
      scriptsRun++;
      if (scriptsRun < scriptsToRun) {
        return;
      }
      client.close()
        .then(success => {
          console.log('closed db connection');
          process.exit(0);
        })
        .catch(err => {
          console.log('could not close db connection');
          process.exit(1);
        });
    }
  })
  .catch(err => {
    console.log('ERROR connecting to DB');
  });