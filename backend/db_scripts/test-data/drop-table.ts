import { Db } from 'mongodb';

const dropTable = (db: Db, collectionName: string): Promise<any> => {
    const collection = db.collection(collectionName);
    return new Promise(function (resolve, reject) {
        collection.drop(
            function (err, result) {
                if (err) {
                    console.log(`Failed to drop table: ${collectionName}`);
                    reject(err);
                    return;
                }
                console.log(`Dropped table: ${collectionName}`);
                resolve(result);
            });
    })
}
export default dropTable;