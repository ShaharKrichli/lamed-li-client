import type { AxiosRequestConfig, AxiosRequestHeaders, } from "axios";
import { getTokenFromStorage } from "./auth";
import { LOCAL_STORAGE_NAMES } from "../../consts/login";

import axios from "axios";
import { ITokens } from "../../types/interfaces/IToken";

export const injectToken = (headers?: AxiosRequestHeaders) => async (config: AxiosRequestConfig) => {
    try {
        let authToken = getTokenFromStorage(LOCAL_STORAGE_NAMES.AUTH);
        if (!authToken) {
            const refreshToken = localStorage.getItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN);
            if (refreshToken) {
                const { data } = await axios.post<ITokens>(
                    `https://localhost:3000/login/refresh-token`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`
                        }
                    }
                );
                localStorage.setItem(LOCAL_STORAGE_NAMES.AUTH, data.accessToken);
                localStorage.setItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN, data.refreshToken);
                authToken = data.accessToken;
            }
            else {
                throw new Error('No refresh token, user is not logged in');
            }
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