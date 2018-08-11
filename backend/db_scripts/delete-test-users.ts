import { Member } from "../../shared/model/member";
import { MongoClient, Db } from "mongodb";
import { COLLECTION_NAME } from "../src/dao/member.dao";

const deleteTestMembers = (db: Db): Promise<any> => {
    const collection = db.collection(COLLECTION_NAME);
    return new Promise(function (resolve, reject) {
        collection.drop(
            function (err, result) {
                if (err) {
                    console.log(`Failed to drop table: ${COLLECTION_NAME}`);
                    reject(err);
                    return;
                }
                console.log(`Dropped table: ${COLLECTION_NAME}`);
                resolve(result);
            });
    })
}

export default deleteTestMembers;