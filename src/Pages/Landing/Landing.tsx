import { FC } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';
import LandingProffesionsNavigation from '../../Components/Landing/LandingProffesionsNavigation/LandingProffesionsNavigation'

const isClientAtHomeLogin: boolean = window.location.pathname === "/home-login";

const Landing: FC = () => {
    return (
        <>
            <LandingCenter isClientAtHomeLogin={isClientAtHomeLogin} />
            <LandingProffesionsSlider  />
            <LandingBullets />
            <LandingProffesionsNavigation />
        </>
    );
};

export default Landing;
