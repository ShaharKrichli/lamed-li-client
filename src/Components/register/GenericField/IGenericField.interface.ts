import { IGenericFieldValidation } from "./IGeneridFieldValidation.interface";

export interface IGenericField {
    fieldType: string,
    fieldName: string,
    dbName: string,
    isValid: boolean,
    value: string,
    validation: IGenericFieldValidation[]
}