import axios from "axios";
import showMessage from "./showMessage";
const url = "https://jsonplaceholder.typicode.com/";

export interface IFetchAPIObj {
  endpoint: string;
  options?: RequestInit;
  data?: any;
  successMessage?: string;
}

export const fetchApi = ({
  endpoint,
  options,
  data,
  successMessage,
}: IFetchAPIObj) => {
  return axios({
    method: options?.method,
    url: `${url}${endpoint}`,
    data,
  })
    .then((res) => {
      if (successMessage) {
        showMessage("success", successMessage);
      }
      return res;
    })
    .catch((e) => {
      showMessage("error", e.message);
    });
};
