import { Resource, Endpoint, Method } from "./endpoints";

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

export const ENDPOINT_ALL: Endpoint = {method: Method.GET,path: ''};
export const ENDPOINT_COUNT: Endpoint = {method: Method.GET,path: '/count'};
export const ENDPOINT_ADD: Endpoint = {method: Method.POST,path: '/add'};
export const ENDPOINT_GET_BY_ID: Endpoint = {method: Method.GET,path: '/:id'};
export const ENDPOINT_UPDATE: Endpoint = {method: Method.PUT,path: '/:id'};
export const ENDPOINT_DELETE: Endpoint = {method: Method.DELETE,path: '/:id'};