import { FC } from "react";
import * as S from "./TeacherAbout.style"

import { teachers } from "../TeacherProfile/TeacherProfile.data";

const teacher = teachers[0]


export const TeacherAbout: FC = () => {
    return (
        <S.container>
            <S.personalDeteils>
                <S.Description>{teacher.description}</S.Description>
            </S.personalDeteils>
            {/* <S.profileImage>src={landingQualitiesImg}</S.profileImage> */}
        </S.container>
    );
};

export default TeacherAbout

 