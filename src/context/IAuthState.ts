export interface IAuthState {
    InProgress: number;
    Authenticated: number;
    unAuthenticated: number
  }
  
  export const AuthState: IAuthState = {
    InProgress: 0,
    Authenticated: 1,
    unAuthenticated: 2
  };

  export interface IAuthStateContext {
    setAuthState: React.Dispatch<React.SetStateAction<number>>
    authState: number;
  }