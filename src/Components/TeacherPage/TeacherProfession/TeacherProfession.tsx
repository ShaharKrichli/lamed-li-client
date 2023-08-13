import React, { FC } from "react";
import * as S from "./TeacherProfession.style";

import { teachers } from "../TeacherProfile/TeacherProfile.data";
import { Button } from "@mui/material";

const teacher = teachers[0];

export const TeacherProfession: FC = () => {
    return (
        <S.Container>
            <S.Title>תחומי לימוד</S.Title>
            <S.Prof>
                {teacher.profession.map((key, index) => (
                    <Button key={index} variant="contained" style={{ margin: "5px" }}>
                        {key}
                    </Button>
                ))}
            </S.Prof>
        </S.Container>
    );
};

export default TeacherProfession;
