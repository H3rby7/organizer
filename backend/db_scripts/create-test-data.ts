import insertTestMembers from "./create-test-users";
import * as mongodb from "mongodb"
import { DB_URL } from "../config";

const mongoClient = mongodb.MongoClient

mongoClient.connect(DB_URL)
    .then(client => {
        const db = client.db();
        console.log("Connected successfully to db");
        Promise.all([
            insertTestMembers(db)
          ])
          .then(closeClient)
          .catch(closeClient);

          function closeClient(res) {
            client.close()
            .then(success => console.log("closed db connection"))
            .catch(err => console.log("could not close db connection"));
          }
    })
    .catch(err => {
        console.log("ERROR connecting to DB");
    });