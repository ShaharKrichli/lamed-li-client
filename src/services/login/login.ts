// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";
import { encodeBase64 } from "../../utils/global";

const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: 'localhost:3000', // TODO: Need to be env variable
    prefix: "/login",
    isTokenRequired: false
});

// TODO: Need to add return types and logs
export default {
    login: async (password: string, email: string) => {
        try {
            return await axiosInstanceNoToken.post('/login', { bodyData: encodeBase64({ password, email }) })
        }
        catch (err: any) {
            throw err
        }
    },
    forgotPassword: async (email: string) => {
        try {
            return await axiosInstanceNoToken.post('/forgot-password', { bodyData: encodeBase64({ email }) })
        }
        catch (err: any) {
            throw err
        }

    },
    restorationCode: async (code: string) => {
        try {
            return await axiosInstanceNoToken.post('/restoration-code', { bodyData: encodeBase64({ code }) })

        }
        catch (err: any) {
            throw err
        }
    },
    resetPassword: async (password: string) => {
        try {
            return await axiosInstanceNoToken.post('/reset-password', { bodyData: encodeBase64({ password }) })
        }
        catch (err: any) {
            throw err
        }
    }
};
