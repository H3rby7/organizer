import { Collection, ObjectID } from "mongodb";
import DbService from "../db.service";
import { Member } from "../../../shared/model/member";
import logger from '../logger';

export const COLLECTION_NAME = "members"

class MemberDAO {

    count(): Promise<number> {
        return this.collection().countDocuments();
    }

    findOneById(id: string): Promise<Member> {
        return this.collection().findOne(new ObjectID(id));
    }

    deleteOneById(id: string): Promise<boolean> {
        return this.collection().findOneAndDelete({_id: new ObjectID(id)})
        .then(res => {
            if (res && res.ok === 1) {
                return Promise.resolve(true);
            }
            return Promise.reject(false);
        })
        .catch(err => Promise.reject(err));
    }

    findAll(): Promise<Member[]> {
        return this.collection().find({}).toArray();
    }

    insertMember(member: Member): Promise<Member> {
        return this.collection().insertOne(member)
            .then(res =>  this.collection().findOne({_id: res.insertedId}))
            .catch(err => Promise.reject(err));
    }

    updateMember(id: string, member: Member): Promise<Member> {
        return this.collection().findOneAndUpdate({_id: new ObjectID(id)}, {$set: member}, {returnOriginal: false})
            .then(res =>  Promise.resolve(res.value))
            .catch(err => Promise.reject(err));
    }

    private collection(): Collection {
        return DbService.getCollection(COLLECTION_NAME);
    }

}

export default MemberDAO;