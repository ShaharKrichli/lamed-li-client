import { FC } from "react";
import * as S from "./TeacherCity.style"

import { teachers } from "../TeacherProfile/TeacherProfile.data";
import { Button } from "@mui/material";

const teacher = teachers[0]


export const TeacherCity: FC = () => {
    return (
        <S.Container>
         <S.Title>מקומות לימוד</S.Title>   
        <Button variant="contained">{teacher.city}</Button>
        </S.Container>
    );
};

export default TeacherCity