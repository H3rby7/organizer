export enum Method {
  GET = "get",
  PUT = "put",
  POST = "post",
  DELETE = "delete"
}

export interface Endpoint {
  path: string;
  method: Method;
}

export interface Resource {
  name: string;
  baseUrl: string;
  endpoints: any;
}
