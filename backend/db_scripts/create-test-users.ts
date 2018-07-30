import { Member } from "../../shared/model/member";
import { MongoClient, Db } from "mongodb";

const COLLECTION_NAME = "members"

const insertTestMembers = (db: Db): Promise<any> => {
    const collection = db.collection(COLLECTION_NAME);
    return new Promise(function(resolve, reject) {
    	collection.insertMany(
            [
                new Member('Janis'),
                new Member('Johannes'),
                new Member('Sara'),
            ], 
            function (err, result) {
                if (err) {
                    console.log("Failed Member insert");
                    reject(err);
                    return;
                }
                console.log("Inserted test member into db");
                resolve(result);
            });
        })
}

export default insertTestMembers;