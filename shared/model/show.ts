import { Event } from "./event";
import { Member } from "./member";

export class Show extends Event {
    public status?: string;
    public ticketLink?: string;
    public organizer?: Member;
    
    constructor(
        public name: string,
        public startDate?: Date,
        public endDate?: Date,
        public location?: string,
    ) {
        super("SHOW", startDate, endDate, location);
    }
}