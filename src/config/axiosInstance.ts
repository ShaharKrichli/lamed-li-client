// axios
import axios from "axios";
import type { AxiosInstance, } from "axios";

// interfaces
import { IAxiosConfig } from "./IAxios";
import { injectToken } from "../utils/auth/token";

// tokens

export const createAxiosInstance = ({
  serviceBaseUrl,
  prefix,
  headers,
  isTokenRequired = true,
}: IAxiosConfig): AxiosInstance => {
  const axiosInstance = axios.create({ baseURL: serviceBaseUrl + prefix });
  axios.interceptors.request.use((config) => {
    config.timeout = 5000
    return config;
  }); 
  
  isTokenRequired && axiosInstance.interceptors.request.use(injectToken(headers));
  return axiosInstance;
};
