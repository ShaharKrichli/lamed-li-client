import { FC } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';

// routes
import { HOME_LOGIN_ROUTE } from '../../consts/routes';

const isClientAtHomeLogin = window.location.pathname === HOME_LOGIN_ROUTE;

const Landing: FC = () => {
    return (
        <>
            <LandingCenter isClientAtHomeLogin={isClientAtHomeLogin} />
            <LandingProffesionsSlider />
            <LandingBullets />
        </>
    );
};

export default Landing;