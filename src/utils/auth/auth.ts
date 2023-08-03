
export const getTokenFromStorage = (tokenType: string) => {
    try {
        const storageAuthToken = localStorage.getItem(tokenType);
        return storageAuthToken && !isExpired(getExpirationDate(storageAuthToken)) ? JSON.parse(storageAuthToken) : undefined

    } catch (error: any) {
        console.error(error);
        return false
    }
};

export const isTokenExpired = (token: string) => {
    try {
        return!isExpired(getExpirationDate(token)) 

    } catch (error: any) {
        console.error(error);
        return false
    }
}

export const getExpirationDate = (jwtToken: string) => {
    const jwt = JSON.parse(atob(jwtToken.split(".")[1]));
    return (jwt && jwt?.exp && jwt.exp * 1000) || null;
};


export const isExpired = (exp: number) => {
    if (!exp) {
        return false;
    }
    return Date.now() > exp;
};