import { Collection } from "mongodb";
import DbService from "./db.service";

export const COLLECTION_NAME = "members"

class MemberService {

    getUserCount(): Promise<number> {
        return collection().countDocuments();
    }

}

function collection(): Collection {
    return DbService.getCollection(COLLECTION_NAME);
}

export default MemberService;