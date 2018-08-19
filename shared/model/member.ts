import { TypeWithID } from './typeWithId';

export class Member implements TypeWithID {
    public _id?: string;
    
    constructor(
        public name: string,
        public status?: string,
        public email?: string,
        public phone?: string,
        public food?: string,
        public notes?: string,
    ) {}
}