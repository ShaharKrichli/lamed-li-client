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
  passwordConfirm: { validationName: 'passwordConfirm', errorText: 'הסיסמאות אינן זהות' } as IGenericFieldValidation,
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
    dbName: 'password',
    isValid: false,
    validation: [validationNames.required, validationNames.passwordConfirm]
  }
] as IGenericField[]

const Register = () => {
  return (
    <S.registerContainer>
      <S.regiserBackgroundImage src={'https://img.freepik.com/premium-photo/frame-school-supplies-blue-pastel-colors-light-blue-background-place-text-back-school-it-was-flat_261761-961.jpg'} alt='noImage' />
      <S.registerForm>
        <GenericForm fields={newRegisterFields} title='הרשמה' actionButtonText='הירשם עכשיו' saveFormFunction={register.createUser} />
      </S.registerForm>
    </S.registerContainer>
  )
};


export default Register;