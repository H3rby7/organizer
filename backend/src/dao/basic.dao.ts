import { Collection, ObjectID } from "mongodb";
import DbService from "../db.service";
import { TypeWithID } from '../../../shared/model/typeWithId';

class BasicDAO<T extends TypeWithID> {

    constructor(protected collectionName: string) {

    }

    count(): Promise<number> {
        return this.collection().countDocuments();
    }

    findOneById(id: string): Promise<T> {
        return this.collection().findOne({_id: id});
    }

    deleteOneById(id: string): Promise<boolean> {
        return this.collection().findOneAndDelete({_id: id})
        .then(res => {
            if (res && res.ok === 1) {
                return Promise.resolve(true);
            }
            return Promise.reject(false);
        })
        .catch(err => Promise.reject(err));
    }

    findAll(): Promise<T[]> {
        return this.collection().find({}).toArray();
    }

    
    insertOne(basicObject: T): Promise<T> {
        basicObject._id = new ObjectID().toHexString().toString();
        return this.collection().insertOne(basicObject)
            .then(res =>  this.collection().findOne({_id: res.insertedId}))
            .catch(err => Promise.reject(err));
    }

    
    updateOne(id: string, basicObject: TypeWithID): Promise<T> {
        if (basicObject._id) {
            delete basicObject._id;
        }
        return this.collection().findOneAndUpdate({_id: id}, {$set: basicObject}, {returnOriginal: false})
            .then(res =>  Promise.resolve(res.value))
            .catch(err => Promise.reject(err));
    }

    private collection(): Collection {
        return DbService.getCollection(this.collectionName);
    }

}


export default BasicDAO;