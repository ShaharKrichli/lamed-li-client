import { FC } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';

const isClientAtHomeLogin: boolean = window.location.pathname === "/home-login";

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