import { TypeWithID } from './typeWithId';

export class Participation implements TypeWithID {
    public _id?: string;
    
    constructor(
        public memberId: string,
        public status: string,
        public eventId: string,
    ) { }
}