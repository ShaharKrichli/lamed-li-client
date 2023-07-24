import { FC } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';
import LandingProffesionsNavigation from '../../Components/Landing/LandingProffesionsNavigation/LandingProffesionsNavigation'

const Landing: FC = () => {
    return (
        <>
            <LandingCenter IsLoginPopupTrue={false} />
            <LandingProffesionsSlider />
            <LandingBullets />
            <LandingProffesionsNavigation />
        </>
    );
};

const LandingLogin: FC = () => {
    return (
        <>
            <LandingCenter IsLoginPopupTrue={true} />
            <LandingProffesionsSlider />
            <LandingBullets />
            <LandingProffesionsNavigation />
        </>
    );
};

export {Landing, LandingLogin};