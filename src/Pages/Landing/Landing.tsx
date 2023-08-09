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


    return (
        <>
            <LandingCenter isClientAtHomeLogin={window.location.pathname === HOME_LOGIN_ROUTE} />
            <LandingProffesionsSlider />
            <LandingBullets />
            <LandingProffesionsNavigation />
        </>
    );
};

export default Landing;