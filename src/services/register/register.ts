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
    serviceBaseUrl: 'https://localhost:8000/api', // TODO: Need to be env variable
    prefix: "/register",
    isTokenRequired: false
});
const axiosPath =  'https://localhost:8000/api'
export default {
    createUser: async (newUser: IUser) => {
        try {
            const {data} = await axios.post<IUser>(axiosPath + '/register', newUser)
            return data;
        } catch (err: any) {
            throw err;
        }
    },
}