// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";

// encoding
import { encodeBase64 } from "../../utils/global";

// interfaces
import { IAccessToken, ITokens } from "../../types/interfaces/IToken";
import axios from "axios";
import { IUser } from "./Iuser";


const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: 'http://localhost:8000/api', 
    prefix: "/login",
    isTokenRequired: false
});
export default {
    createUser: async (newUser: IUser) => {
        try {
            const {data} = await axiosInstanceNoToken.post<IUser>('/register', newUser)
            return data;
        } catch (err: any) {
            throw err;
        }
    },
}