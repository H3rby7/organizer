import { TypeWithID } from './typeWithId';

export class Event implements TypeWithID {
    public _id?: string;
    public notes?: string;

    constructor(
        public startDate?: Date,
        public endDate?: Date,
        public location?: string,
    ) { }
}