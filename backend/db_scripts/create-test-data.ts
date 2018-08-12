import insertTestMembers from "./create-test-users";
import { MongoClient } from "mongodb";
import config from "../config";
import deleteTestMembers from "./delete-test-users";

MongoClient.connect(config.dbUrl, { useNewUrlParser: true })
  .then(client => {
    const db = client.db();
    console.log("Connected successfully to db");
    Promise.all([
      deleteTestMembers(db),
      insertTestMembers(db)
    ])
      .then(closeClient)
      .catch(closeClient);
    function closeClient(res) {
      client.close()
        .then(success => {
          console.log("closed db connection");
          process.exit(0);
        })
        .catch(err => {
          console.log("could not close db connection");
          process.exit(1);
        });
    }
  })
  .catch(err => {
    console.log("ERROR connecting to DB");
  });