import axios, { Method } from "axios";

import { CGIMap } from "@cgi";

interface requestConfig {
  baseUrl?: string;
  type?: Method;
}

const URL = "//127.0.0.1:1337";

export async function Http<K extends keyof CGIMap>(
  url: K,
  data: CGIMap[K][0],
  config?: requestConfig
): Promise<CGIMap[K][1]> {

  const newUrl = (config && config.baseUrl) ?  config.baseUrl : URL;
  try {
    let req = await axios.request({
      url: `//${newUrl}${url}`,
      method:(config && config.type) ? config.type : 'get',
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
