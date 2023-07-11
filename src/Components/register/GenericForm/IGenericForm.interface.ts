import { IGenericField } from "../GenericField/IGenericField.interface"

export interface IGenericForm {
    fields: IGenericField[],
    title: string,
    actionButtonText: string,
    saveFormFunction: (newObject: any) => Promise<any>
}