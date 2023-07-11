import { IGenericFieldValidation } from "./IGeneridFieldValidation.interface";

export interface IGenericFieldProps {
    fieldType: string,
    fieldName: string,
    isValid: boolean,
    validation: IGenericFieldValidation[],
    onChange: (fieldName: string, fieldValue: string, isValid: boolean) => void
}