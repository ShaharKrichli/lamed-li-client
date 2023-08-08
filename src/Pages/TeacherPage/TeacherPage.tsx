import React, { FC } from 'react';

//components
import TeacherProfile from '../../Components/TeacherPage/TeacherProfile/TeacherProfile';
import TeacherAbout from '../../Components/TeacherPage/TeacherAbout/TeacherAbout';

const TeacherPage: FC = () => {
    return (
        <>
        <TeacherProfile />
        <TeacherAbout />
        </>
    );
};

export default TeacherPage;