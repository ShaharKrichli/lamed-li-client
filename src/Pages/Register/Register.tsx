import { FC } from "react";

import * as S from './Register.style'
import { IGenericFieldValidation } from "../../Components/register/GenericField/IGeneridFieldValidation.interface";
import { IGenericField } from "../../Components/register/GenericField/IGenericField.interface";
import { GenericForm } from "../../Components/register/GenericForm/GenericForm";
import { REGISTER_ROUTE } from "../../consts/routes";
import register from "../../services/register/register";

const validationNames = {
  required: { validationName: 'required', errorText: 'שדה זה הינו שדה חובה' } as IGenericFieldValidation,
  onlyNumbers: { validationName: 'onlyNumbers', errorText: 'שדה זה יכול להכיל מספרים בלבד' } as IGenericFieldValidation,
}
const newRegisterFields = [
  {
    fieldType: 'TextField',
    fieldName: 'שם מלא',
    dbName: 'name',
    isValid: false,
    value: '',
    validation: [validationNames.required]
  },
  {
    fieldType: 'TextField',
    fieldName: 'מייל',
    dbName: 'email',
    isValid: false,
    value: '',
    validation: [validationNames.required]
  },
  {
    fieldType: 'TextField',
    fieldName: 'סיסמה',
    dbName: 'password',
    isValid: false,
    validation: [validationNames.required]
  },
  {
    fieldType: 'TextField',
    fieldName: 'אימות סיסמה',
    isValid: false,
    validation: [validationNames.required]
  }
] as IGenericField[]

const Register = () => {
  return (
    <S.ContainerGrid>
    <GenericForm fields={newRegisterFields} title='Register' actionButtonText='REGISTER' saveFormFunction={register.createUser}></GenericForm>
</S.ContainerGrid>
  )
};

export default Register;