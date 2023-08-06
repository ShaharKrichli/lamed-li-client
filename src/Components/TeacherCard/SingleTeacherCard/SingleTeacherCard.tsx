import React, { FC } from "react";
import { ISingleTeacherCard } from "./ISingleTeacherCard";
import * as S from "./SingleTeacherCard.style";

const SingleTeacherCard: FC<ISingleTeacherCard> = ({ firstName, lastName,
   profession, shortDescription,description,picture,age,institution,priceOnline,
  priceFrontal, priceFrontalStudent, currency }) => {
  return (
    <S.wrapper>
      <S.titleContainer>
        <S.firstName>{firstName}</S.firstName>
        <S.lastName>{lastName}</S.lastName>
      </S.titleContainer>
      <S.profession>{profession}</S.profession>
      <S.shortDescription>{shortDescription}</S.shortDescription>
      <S.description>{description}</S.description>
      <S.picture> <img src={picture}/></S.picture>
      <S.age>{age}</S.age>
      <S.institution>{institution}</S.institution>
      <S.priceOnline>{priceOnline}</S.priceOnline>
      <S.priceFrontal>{priceFrontal}</S.priceFrontal>
      <S.priceFrontalStudent>{priceFrontalStudent}</S.priceFrontalStudent>
      <S.currencyName>{currency?.name}</S.currencyName>
      <S.currencyName>{currency?.symbol}</S.currencyName>
    </S.wrapper>
  );
};

export default SingleTeacherCard;
