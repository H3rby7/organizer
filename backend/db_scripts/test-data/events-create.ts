import { Db } from 'mongodb';
import { DB_NAME_EVENT } from '../../constants/collection-names';
import { Event } from '../../../shared/model/event';
import * as Moment from 'moment';
import { EVENT_TYPE_SHOW } from '../../../shared/constants/event-types';
import { EVENT_STATUS_FIXED, EVENT_STATUS_SUGGESTION } from '../../../shared/constants/event-stati';

const COLLECTION_NAME = DB_NAME_EVENT;

const insertTestEvents = (db: Db): Promise<any> => {
  const collection = db.collection(COLLECTION_NAME);
  return new Promise(function (resolve, reject) {
    const events: Event[] = [
      new Event(EVENT_TYPE_SHOW, 'Game-Show', 'Second City', new Date(), new Date()),
      new Event(EVENT_TYPE_SHOW, 'Harold', 'IO Thatre', new Date(), new Date()),
      new Event(EVENT_TYPE_SHOW, 'Freeform', 'Loose Moose', new Date(), new Date()),
    ];

    events[0]._id = 'testevent0';
    events[0].startDate = Moment().add(1, 'w').toDate();
    events[0].endDate = Moment().add(1, 'w').add(3, 'h').toDate();
    events[0].organizerId = 'testmember0';
    events[0].status = EVENT_STATUS_FIXED;

    events[1]._id = 'testevent1';
    events[1].startDate = Moment().add(1, 'd').toDate();
    events[1].endDate = Moment().add(1, 'd').add(2, 'h').toDate();
    events[1].organizerId = 'testmember1';
    events[1].status = EVENT_STATUS_FIXED;

    events[2]._id = 'testevent2';
    events[2].startDate = Moment().add(1, 'y').toDate();
    events[2].endDate = Moment().add(1, 'y').add(12, 'h').toDate();
    events[2].organizerId = 'testmember1';
    events[2].status = EVENT_STATUS_SUGGESTION;

    collection.insertMany(
      events,
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

export default insertTestEvents;