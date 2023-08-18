import { FC } from "react";

// hooks
import { useScrollPosition } from "../../../hooks/useScrollPosition";

// css
import * as S from "./TeacherProfile.style"


// images
import landingQualitiesImg from "../../../assets/images/landing/landingBullets/bulletStudyGirl.png";

// consts
import { teachers, female, male } from "./TeacherProfile.data";
import { lightGreen } from "@mui/material/colors";


const teacher = teachers[0]

const birthDate = new Date(teacher.dateOfBirth);
const currentDate = new Date();

const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);


const TeacherProfile: FC = () => {
    return (
        <>
        <S.Container>
            <S.ProfileImage src={landingQualitiesImg}></S.ProfileImage>
            <S.PersonalDetails>
                <S.TeacherName>{teacher.firstName} {teacher.lastName}</S.TeacherName>
                <S.ShortDescription>{teacher.shortDescription}</S.ShortDescription>
                <S.Detail>{teacher.gender === female ? "בת":"בן"} {age}</S.Detail>
                <S.Detail>{teacher.city}</S.Detail>
                <S.Detail>{teacher.institution}</S.Detail>
            </S.PersonalDetails>
            
        </S.Container>
        </>
    );
};

export default TeacherProfile;