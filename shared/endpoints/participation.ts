import { BasicResourceIf, ENDPOINT_ALL, ENDPOINT_COUNT, ENDPOINT_ADD, ENDPOINT_GET_BY_ID, ENDPOINT_UPDATE, ENDPOINT_DELETE } from "./basic";

export const ParticipationResourceConfig: BasicResourceIf = {
  name: 'Participation',
  baseUrl: '/api/participation',
  endpoints: {
    ALL: ENDPOINT_ALL,
    COUNT: ENDPOINT_COUNT,
    ADD: ENDPOINT_ADD,
    GET_BY_ID: ENDPOINT_GET_BY_ID,
    UPDATE: ENDPOINT_UPDATE,
    DELETE: ENDPOINT_DELETE,
  }
}