import { createContext, useContext, useState, FC, useEffect } from 'react';
import { AuthState, IAuthStateContext } from './IAuthState';
import { LOCAL_STORAGE_NAMES } from '../consts/login';
import { getTokenFromStorage } from '../utils/auth/auth';

import loginService from '../services/login/login'

const AuthStateContext = createContext<IAuthStateContext>({} as IAuthStateContext);

export const useAuthState = (): IAuthStateContext => useContext(AuthStateContext);

export const AuthStateProvider: FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [authState, setAuthState] = useState<number>(AuthState.InProgress); //initial state

    const handleLogin = async () => {
        let authToken = getTokenFromStorage(LOCAL_STORAGE_NAMES.AUTH);
        if (!authToken) {
            const refreshToken = getTokenFromStorage(LOCAL_STORAGE_NAMES.REFRESH_TOKEN);
            if (refreshToken) {
                try {
                    const tokens = await loginService.refreshTokens(refreshToken);
                    localStorage.setItem(LOCAL_STORAGE_NAMES.AUTH, tokens.accessToken);
                    localStorage.setItem(LOCAL_STORAGE_NAMES.REFRESH_TOKEN, tokens.refreshToken);
                    setAuthState(AuthState.Authenticated)
                    return
                }
                catch (err) {
                    setAuthState(AuthState.unAuthenticated);
                }
            }
            setAuthState(AuthState.unAuthenticated);
            return
        }
        setAuthState(AuthState.Authenticated);

    }
    useEffect(() => {
        handleLogin()
    }, []);



    const value: IAuthStateContext = { authState, setAuthState }

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    );

};
