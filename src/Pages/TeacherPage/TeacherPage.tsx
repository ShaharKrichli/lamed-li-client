import React, { FC } from "react";

//components
import TeacherProfile from "../../Components/TeacherPage/TeacherProfile/TeacherProfile";
import MinimizedTeacherProfile from "../../Components/TeacherPage/MinimizedTeacherProfile/MinimizedTeacherProfile";
import TeacherAbout from "../../Components/TeacherPage/TeacherAbout/TeacherAbout";

//hooks
import { useScrollPosition } from "../../hooks/useScrollPosition";
import TeacherCity from "../../Components/TeacherPage/TeacherCity/TeacherCity";
import TeacherProfession from "../../Components/TeacherPage/TeacherProfession/TeacherProfession";
import TeacherPrice from "../../Components/TeacherPage/TeacherPrice/TeacherPrice";

const scrollingThreshold = 50;

const TeacherPage: FC = () => {
  return (
    <>
      {useScrollPosition() < scrollingThreshold ? (
        <TeacherProfile />
      ) : (
        <MinimizedTeacherProfile />
      )}
      <TeacherPrice />
      <TeacherAbout />
      <TeacherProfession />
      <TeacherCity />
    </>
  );
};

export default TeacherPage;
