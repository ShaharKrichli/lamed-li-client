import { FC, useEffect, useState } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';
import LandingProffesionsNavigation from '../../Components/Landing/LandingProffesionsNavigation/LandingProffesionsNavigation'

// routes
import { HOME_LOGIN_ROUTE } from '../../consts/routes';
import { LOCAL_STORAGE_NAMES } from '../../consts/login';
import { AuthState } from '../../context/IAuthState';
import { getTokenFromStorage } from '../../utils/auth/auth';
import loginService from '../../services/login/login'
import { Token } from '@mui/icons-material';

const Landing: FC = () => {
    const [authState, setAuthState] = useState<number>(AuthState.InProgress); //initial state

    const handleInitUpload = async () => {
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
        handleInitUpload()
    }, []);
   
    return (
        <>
            <LandingCenter isClientAtHomeLogin={window.location.pathname === HOME_LOGIN_ROUTE} authState={authState} />
            <LandingProffesionsSlider />
            <LandingBullets />
            <LandingProffesionsNavigation />
        </>
    );
};

export default Landing;