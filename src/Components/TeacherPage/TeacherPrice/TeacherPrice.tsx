import React, { FC, useState } from "react";
import * as S from "./TeacherPrice.style";

import { teachers } from "../TeacherProfile/TeacherProfile.data";
import { Button } from "@mui/material";

const teacher = teachers[0];

const TeacherPrice: FC = () => {
    const [showPhone, setShowPhone] = useState(false);

    const togglePhoneVisibility = () => {
        setShowPhone(!showPhone);
    };

    return (
        <S.Container>
            <S.Title>ניתן לגשת</S.Title>
            <div>
                {showPhone ? (
                    <div>{teacher.phone}</div>
                ) : (
                    <Button
                        onClick={togglePhoneVisibility}
                        variant="contained"
                    >
                        הצג טלפון
                    </Button>
                )}
            </div>
            <S.TeacherPrice>
                {teacher.priceFrontal && (
                    <div>מחיר פגישה פרונטלי {teacher.priceFrontal}</div>
                )}
                {teacher.priceFrontalStudentHouse && (
                    <div>מחיר פגישה בבית התלמיד {teacher.priceFrontalStudentHouse}</div>
                )}
                {teacher.priceOnline && (
                    <div>מחיר פגישה אונליין {teacher.priceOnline}</div>
                )}
            </S.TeacherPrice>
        </S.Container>
    );
};

export default TeacherPrice;
