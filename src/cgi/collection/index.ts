
// import {Http} from '@cgi'
import { appReq, appRes, appUrl } from "../app";


export interface CGIMap {
  [appUrl]: [appReq, appRes];
}




// export Http