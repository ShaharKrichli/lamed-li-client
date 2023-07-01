// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";

// encoding
import { encodeBase64 } from "../../utils/global";

// interfaces
import { IAccessToken, ITokens } from "../../types/interfaces/IToken";

const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: 'https://localhost:3000', // TODO: Need to be env variable
    prefix: "/login",
    isTokenRequired: false
});

// TODO: Need to add logs
export default {
    login: async (password: string, email: string): Promise<ITokens> => {
        try {
            const { data } = await axiosInstanceNoToken.post<ITokens>('/login', { bodyData: encodeBase64({ password, email }) })
            return data
        }
        catch (err: any) {
            throw err
        }
    },
    forgotPassword: async (email: string): Promise<IAccessToken> => {
        try {
            const { data } = await axiosInstanceNoToken.post<IAccessToken>('/forgot-password', { bodyData: encodeBase64({ email }) })
            return data
        }
        catch (err: any) {
            throw err
        }

    },
    restorationCode: async (code: string): Promise<IAccessToken> => {
        try {
            const { data } = await axiosInstanceNoToken.post<IAccessToken>('/restoration-code', { bodyData: encodeBase64({ code }) })
            return data
        }
        catch (err: any) {
            throw err
        }
    },
    resetPassword: async (password: string): Promise<boolean> => {
        try {
            const { data } = await axiosInstanceNoToken.post<boolean>('/reset-password', { bodyData: encodeBase64({ password }) })
            return data
        }
        catch (err: any) {
            throw err
        }
    }

    // TODO: Need to add logout method
};
