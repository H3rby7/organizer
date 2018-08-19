import { Method } from "./endpoints";
import { BasicResourceIf } from "./basic";

export const MemberResourceConfig: BasicResourceIf = {
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