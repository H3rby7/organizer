import { Resource, Method, Endpoint } from "./endpoints";

interface MemberResourceIf extends Resource {
  endpoints: {
    ALL: Endpoint,
    COUNT: Endpoint,
    ADD: Endpoint,
    GET_BY_ID: Endpoint,
    UPDATE: Endpoint,
    DELETE: Endpoint,
  }
}

export const MemberResourceConfig: MemberResourceIf = {
  name: 'Member',
  baseUrl: '/api/member',
  endpoints: {
    ALL: {
      method: Method.GET,
      path: ''
    },
    COUNT: {
      method: Method.GET,
      path: '/count'
    },
    ADD: {
      method: Method.POST,
      path: '/add'
    },
    GET_BY_ID: {
      method: Method.GET,
      path: '/:id'
    },
    UPDATE: {
      method: Method.PUT,
      path: '/:id'
    },
    DELETE: {
      method: Method.DELETE,
      path: '/:id'
    },
  }
}