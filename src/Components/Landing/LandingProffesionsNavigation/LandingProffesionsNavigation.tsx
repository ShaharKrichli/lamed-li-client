import { FC } from 'react';

// css
import * as S from './LandingProffesionsNavigation.style';

// data
import { ProffesionsData } from './LandingProffesionsNavigation.data';

const ProffesionButton: FC = () => {
    return (
        <>
            <S.proffesionsArea>
                {ProffesionsData.map((element, index) => (
                    <S.proffesionBox key={index}>
                        <S.proffesionImg src={element.iconSrc} />
                        <S.proffesionLine></S.proffesionLine>
                        <S.proffesionText>{element.label}</S.proffesionText>
                    </S.proffesionBox>
                ))}
            </S.proffesionsArea>
        </>
    );
};

export default ProffesionButton;
