import { FC } from "react";

// hooks
import { useScrollPosition } from "../../../hooks/useScrollPosition";

// css
import * as S from "./MinimizedTeacherProfile.style"


// images
import landingQualitiesImg from "../../../assets/images/landing/landingBullets/bulletStudyGirl.png";

// consts
import { teachers, female, male } from "./MinimizedTeacherProfile.data";
import { lightGreen } from "@mui/material/colors";


const teacher = teachers[0]

const birthDate = new Date(teacher.dateOfBirth);
const currentDate = new Date();

const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);


const TeacherProfile: FC = () => {
    return (
        <>
        <S.container>
            <S.profileImage src={landingQualitiesImg}></S.profileImage>
            <S.teacherName>{teacher.firstName} {teacher.lastName}</S.teacherName>
        </S.container>
        </>
    );
};

export default TeacherProfile;