import type { FC } from 'react';

// routes
import { IPrivateRoute } from './IPrivateRoute';
import { Redirect, useRouteMatch } from "react-router-dom";
import Landing from '../../Pages/Landing/Landing';
import { getTokenFromStorage } from '../../utils/auth/auth';
import { LOCAL_STORAGE_NAMES } from '../../consts/login';
import { HOME_ROUTE } from '../../consts/routes';
import { checkUrlParamsOnlyDigits, checkUrlParamsOnlyLetters } from '../../utils/global';

const PrivateRoute: FC<IPrivateRoute> = ({ children, isPrivate, isCheckUrlLetters }) => {

    const { params, url } = useRouteMatch()

    const isAuth = getTokenFromStorage(LOCAL_STORAGE_NAMES.AUTH)

    let isValid = true
    for (const [key, value] of Object.entries(params)) {
        isValid = isCheckUrlLetters ? checkUrlParamsOnlyLetters(value as string) : checkUrlParamsOnlyDigits(value as string)
        if (!isValid) {
            // TODO: need to create error page, and redirect to ther.
            return <Redirect to={HOME_ROUTE} />
        }
    }

    if (!isAuth && isPrivate) {
        return <Landing />
    }

    // display page if all good.
    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;