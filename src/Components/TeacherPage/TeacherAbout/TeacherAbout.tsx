import { FC } from "react";
import * as S from "./TeacherAbout.style"

import { teachers } from "../TeacherProfile/TeacherProfile.data";

const teacher = teachers[0]


export const TeacherAbout: FC = () => {
    return (
        <S.Container>
            
            <S.PersonalDetails>
            <S.Title>קצת עלי</S.Title>
                <S.Description>{teacher.description}</S.Description>
            </S.PersonalDetails>
            {/* <S.profileImage>src={landingQualitiesImg}</S.profileImage> */}
        </S.Container>
    );
};

export default TeacherAbout

 