import { TypeWithID } from './typeWithId';

export class Event implements TypeWithID {
    public _id?: string;
    public notes?: string;
    public status?: string;
    public organizerId?: string;

    /* SHOW relevant */
    public ticketLink?: string;

    /* PRACTICE relevant */
    public handout?: string;

    constructor(
        public type: string,
        public agenda: string, // eg. Show, Crime or for practice: eg. Songs, Characters
        public location: string,
        public startDate: Date,
        public endDate: Date,
    ) { }
}