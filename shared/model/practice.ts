import { Event } from "./event";
import { Member } from "./member";

export class Practice extends Event {
    public topic?: string;
    public status?: string;
    public handout?: string;
    public teacher?: Member;
}