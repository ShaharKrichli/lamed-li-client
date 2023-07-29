import { createContext, useContext, useState, FC } from 'react';
import { AuthState, IAuthStateContext } from './IAuthState';
import { LOCAL_STORAGE_NAMES } from '../consts/login';
import { getTokenFromStorage } from '../utils/auth/auth';

const AuthStateContext = createContext<IAuthStateContext>({} as IAuthStateContext);

export const useAuthState = (): IAuthStateContext => useContext(AuthStateContext);

export const AuthStateProvider: FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [authState, setAuthState] = useState<number>(AuthState.InProgress); //initial state

    let authToken = getTokenFromStorage(LOCAL_STORAGE_NAMES.AUTH); //the func returns: json.parse, undefiende/false

    if (!authToken) {
        setAuthState(AuthState.unAuthenticated)
    } else setAuthState(AuthState.Authenticated)


    const value: IAuthStateContext = { authState, setAuthState }

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    );

};
