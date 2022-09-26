import { Resp } from "../models/resp";
import axios from "../plugins/request";

import { UserType } from "../models/user";


export const queryCurUser = (): Promise<Resp<UserType>> => {
  return axios.get("/user/current")
}