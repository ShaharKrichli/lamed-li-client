import { createContext, useContext, useState, FC } from 'react';
import { AuthState, IAuthStateContext } from './IAuthState';

const AuthStateContext = createContext<IAuthStateContext>({} as IAuthStateContext);

export const useAuthState = (): IAuthStateContext => useContext(AuthStateContext);

export const AuthStateProvider: FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [authState, setAuthState] = useState<number>(AuthState.InProgress);

    const value: IAuthStateContext = { authState, setAuthState }

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    );
    
};
