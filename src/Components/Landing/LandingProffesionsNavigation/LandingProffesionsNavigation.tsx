import { FC, useState } from 'react';

// css
import * as S from './LandingProffesionsNavigation.style'

// data
import { ProffesionsData } from './LandingProffesionsNavigation.data'
import { Box, Button, LinearProgress } from '@mui/material';

// mui

const ProffesionButton: FC = () => {

    return (
        <>
            <S.proffesionsArea>
                {ProffesionsData.map((element, index) => (
                    <S.proffesionBox key={index}>
                        <S.proffesionImg src={element.iconSrc} />
                        <S.proffesionText>{element.label}</S.proffesionText>
                        <S.proffesionLine></S.proffesionLine>
                    </S.proffesionBox>
                ))}
            </S.proffesionsArea>
        </>
    );
};

export default ProffesionButton;
