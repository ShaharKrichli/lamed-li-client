import type { AxiosRequestConfig, AxiosRequestHeaders, } from "axios";
import { getAuthTokenFromStorage } from "./auth";
import { log } from "console";

export const getExpirationDate = (jwtToken: string) => {
    const jwt = JSON.parse(atob(jwtToken.split(".")[1]));
    return jwt?.exp * 1000 || 0;
};

export const injectToken = (headers?: AxiosRequestHeaders) => async (config: AxiosRequestConfig) => {
    try {
        let authToken = getAuthTokenFromStorage();
        if (!authToken) {
            console.log('error');
        }
        if (authToken) {
            config.headers = {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            };
            headers && Object.assign(config.headers, headers);
        }
        else {
            console.log('error');
        }
    } catch (err) {
        console.log('error')
    }
    return config;
};