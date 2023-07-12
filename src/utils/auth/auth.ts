
export const getTokenFromStorage = (token: string) => {
    try {
        const storageAuthToken = localStorage.getItem(token);
        return storageAuthToken && !isExpired(getExpirationDate(storageAuthToken)) ? JSON.parse(storageAuthToken) : undefined

    } catch (error: any) {
        console.error(error);
        return false
    }
};

const getExpirationDate = (jwtToken: string) => {
    const jwt = JSON.parse(atob(jwtToken.split(".")[1]));
    return (jwt && jwt?.exp && jwt.exp * 1000) || null;
};


const isExpired = (exp: number) => {
    if (!exp) {
        return false;
    }
    return Date.now() > exp;
};