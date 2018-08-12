import { MongoClient, Collection, Db } from "mongodb";
import { DB_URL } from "../config";
import logger from './logger';

class DbService {

  private static client: MongoClient;

  static initialize(): Promise<boolean> {
    logger.info(`Attempting to connect to MongoDB via '${DB_URL}'`);
    if (DbService.client) {
      logger.warn("Already initialized!");
      return;
    }

    process.on('exit', (code) => {
      logger.warn(`Shutdown detected, closing Db connection...`);
      DbService.shutDown();
    });

    return MongoClient.connect(DB_URL, { useNewUrlParser: true })
      .then(client => {
        DbService.client = client;
        logger.info("Connected successfully to db");
        return Promise.resolve(true);
      })
      .catch(err => {
        logger.error("ERROR connecting to DB");
        return Promise.reject(false);
      });
  }

  static shutDown(): Promise<void> {
    if (!DbService.client) {
      return Promise.reject(null);
    }
    return DbService.client.close();
  }

  static getCollection(name: string): Collection {
    if (!DbService.client) {
      return;
    }
    return DbService.client.db().collection(name);
  }

}

export default DbService;