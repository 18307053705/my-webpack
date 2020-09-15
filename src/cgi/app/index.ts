
import { Http } from "@cgi";

export const appUrl = `/app`;
export interface appReq {
  statusCode: number;
  da?: number;
}

export interface appRes {
  data: Array<any>;
  error: string;
  retcode: number;
}

export async function appRequest(params: appReq) {
  return await Http(appUrl,params);
}
