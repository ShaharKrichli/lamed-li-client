import type { FC } from 'react';

// routes
import { IPrivateRoute } from './IPrivateRoute';

// utis
import { getTokenFromStorage } from '../../../utils/auth/auth';

// comps
import Landing from '../../../Pages/Landing/Landing';

// consts
import { LOCAL_STORAGE_NAMES } from '../../../consts/login';

import jwt_decode from "jwt-decode";

const PrivateRoute: FC<IPrivateRoute> = ({ isAuth, children, isPrivate, roles }) => {

    if (!isAuth && isPrivate) {
        return <Landing />
    }

    if (roles.length) {
        let authToken = localStorage.getItem(LOCAL_STORAGE_NAMES.AUTH);
        if (authToken) {
            const decodedToken = jwt_decode(authToken) as any;
            if (!roles.some((role) => decodedToken.roles?.includes(role))) {
                return <Landing />
            }
        }
        else {
            return <Landing />
        }
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;