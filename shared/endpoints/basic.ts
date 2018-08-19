import { Resource, Endpoint } from "./endpoints";

export interface BasicResourceIf extends Resource {
  endpoints: {
    ALL: Endpoint,
    COUNT: Endpoint,
    ADD: Endpoint,
    GET_BY_ID: Endpoint,
    UPDATE: Endpoint,
    DELETE: Endpoint,
  }
}
