import {Express} from "express-serve-static-core";
import uuid from './uuid';
import timestamp from "./timestamp";
import logger from "./logger";

export default function (express: Express) {
  express.use(uuid);
  express.use(timestamp);
  express.use(logger);
}