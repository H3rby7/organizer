import {Express} from "express-serve-static-core";
import uuid from './uuid';
import timestamp from "./timestamp";
import logger from "./logger";
import * as bodyParser from 'body-parser';


export default function (express: Express) {
  express.use(bodyParser.urlencoded({ extended: false }))
  express.use(bodyParser.json())
  express.use(uuid);
  express.use(timestamp);
  express.use(logger);
}