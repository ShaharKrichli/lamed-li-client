import { FC } from "react";

// components


// css
import * as S from "./TeacherProfile.style"

// images
import landingQualitiesImg from "../../../assets/images/landing/landingBullets/bulletStudyGirl.png";

// consts
import { teachers } from "./TeacherProfile.data";

const teacher = teachers[0]

const birthDate = new Date(teacher.dateOfBirth);
const currentDate = new Date();

const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

const TeacherProfile: FC = () => {
    return (
        <S.container>
            <S.personalDeteils>
                <S.teacherName>{teacher.firstName} {teacher.lastName}</S.teacherName>
                <S.shortDescription>{teacher.shortDescription}</S.shortDescription>
                <S.detail>{teacher.gender === "נקבה" ? "בת":"בן"} {age}</S.detail>
                <S.detail>{teacher.city}</S.detail>
                <S.detail>{teacher.institution}</S.detail>
            </S.personalDeteils>
            {/* <S.profileImage>src={landingQualitiesImg}</S.profileImage> */}
        </S.container>
    );
};

export default TeacherProfile;