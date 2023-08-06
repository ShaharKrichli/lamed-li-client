import { FC } from "react";

// components
import SingleTeacherCard from "./SingleTeacherCard/SingleTeacherCard";

// css
import * as S from "./TeacherCards.style"

// images
const backImageTeachers = "https://img.freepik.com/free-vector/hand-drawn-teachers-day-background_23-2149063816.jpg?size=626&ext=jpg"

// consts
import { TEACHER_CARDS } from "./TeacherCards.data";

const TeacherCards: FC = () => {
  return (
    <S.container>

        {/* <S.title>צוות המרצים שלנו</S.title>
        <S.CenterLeftImg src={backImageTeachers}></S.CenterLeftImg> */}
        
        <S.AllTeacherWrapper>
      
        {TEACHER_CARDS.map((teacher, index) => (
          <SingleTeacherCard
            firstName={teacher.firstName}
            lastName={teacher.lastName}
            profession={teacher.profession}
            shortDescription={teacher.shortDescription}
            description= {teacher.description} 
            picture= {teacher.picture}
            age = {teacher.age}
            institution= {teacher.institution}
            priceOnline={ teacher.priceOnline}
            priceFrontal={teacher.priceFrontal}
            priceFrontalStudent={teacher.priceFrontalStudent}
            currency={teacher.currency}            
            key={index}
          />
        ))}
      </S.AllTeacherWrapper>

      
    </S.container>
  );
};

export default TeacherCards;
