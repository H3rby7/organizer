import { Event } from './event';
import { Member } from './member';
import { TypeWithID } from './typeWithId';

export class Commitment implements TypeWithID {
    public _id?: string;
    
    constructor(
        public member: Member,
        public status: string,
        public event: Event,
    ) { }
}