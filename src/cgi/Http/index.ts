import axios, { Method } from "axios";

interface requestConfig {
  baseUrl?: string;
  type?: Method;
}

const URL = "//127.0.0.1:1337";
export interface BaseRequstData {
  [key: string]: any;
}

export interface BaseResponseBody {
  [key: string]: any;
}
export type DR = [BaseRequstData, BaseResponseBody];

export async function Http<CgiMap extends { [k in keyof CgiMap]: DR }>(
  url: keyof CgiMap,
  data: CgiMap[keyof CgiMap][0],
  config?: requestConfig
): Promise<CgiMap[keyof CgiMap][1]> {
  const newUrl = config && config.baseUrl ? config.baseUrl : URL;
  try {
    let req = await axios.request({
      url: `//${newUrl}${url}`,
      method: config && config.type ? config.type : "get",
      params: data,
      timeout: 2000,
    });

    const request = req.request;
    if (request.status === 200 && req.data.retcode === 0) {
      return req.data;
    } else {
      return Promise.reject(req);
    }
  } catch (err) {
    // 处理失败情况，可用于上报错误日志
    console.log("!!! Error !!!", err);
    return Promise.reject(err);
  }
}
