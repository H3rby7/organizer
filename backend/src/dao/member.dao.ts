import { Collection, Cursor } from "mongodb";
import DbService from "../db.service";
import { Member } from "../../../shared/model/member";

export const COLLECTION_NAME = "members"

class MemberDAO {

    count(): Promise<number> {
        return this.collection().countDocuments();
    }

    findAll(): Promise<Member[]> {
        return this.collection().find({}).toArray();
    }

    collection(): Collection {
        return DbService.getCollection(COLLECTION_NAME);
    }

}

export default MemberDAO;