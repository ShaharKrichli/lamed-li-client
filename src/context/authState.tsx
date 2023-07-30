import { createContext, useContext, useState, FC, useEffect } from 'react';
import { AuthState, IAuthStateContext } from './IAuthState';
import { LOCAL_STORAGE_NAMES } from '../consts/login';
import { getTokenFromStorage } from '../utils/auth/auth';

import axios from "axios";
import { ITokens } from '../types/interfaces/IToken';

const AuthStateContext = createContext<IAuthStateContext>({} as IAuthStateContext);

export const useAuthState = (): IAuthStateContext => useContext(AuthStateContext);

export const AuthStateProvider: FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [authState, setAuthState] = useState<number>(AuthState.InProgress); //initial state

    useEffect(() => {
        (async () => {
            try {
                // Check if token exists and not revoked
                let authToken = getTokenFromStorage(LOCAL_STORAGE_NAMES.AUTH);
                // If exists and not revoked, set authState AuthState.Authenticated
                if (!authToken) {
                    // If doesn't exist or not valid, set authState AuthState.unAuthenticated
                    // If exists else check for a refresh token
                    const refreshToken = getTokenFromStorage(LOCAL_STORAGE_NAMES.REFRESH_TOKEN);
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
                        // If exists and not revoked, call the refresh token API and set new tokens
                        localStorage.setItem(LOCAL_STORAGE_NAMES.AUTH, data.accessToken);
                        localStorage.setItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN, data.refreshToken);
                        setAuthState(AuthState.Authenticated)
                        return
                    }
                }
                setAuthState(AuthState.unAuthenticated);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const value: IAuthStateContext = { authState, setAuthState }

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    );

};
