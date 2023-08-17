const BASE_URL = import.meta.env.VITE_API_URL;
import axios from "axios";

import Cookies from "universal-cookie";
const cookie = new Cookies();

async function getCommonHeader() {
  const user = cookie.get("user");
  if(user){
    return {
      authorization: "Bearer " + user.token,
      "content-type": "application/json",
    };
  }else{
    return {
      "content-type": "application/json",
    };
  }
  
}

export default {
  post: async function (
    endpoint: string,
    body: object,
    additionalOption: object
  ) {
    const url = BASE_URL + endpoint;
    const option = {
      headers: await getCommonHeader(),
    };
    return axios.post(url, JSON.stringify(body), {
      ...option,
      ...additionalOption,
    });
  },
  get: async function (endpoint: string, additionalOption: object) {
    const url = BASE_URL + endpoint;
    const option = {
      headers: await getCommonHeader(),
      params: additionalOption ?? ''
    };
    return axios.get(url, { ...option});
  },
};
