import * as S from './GenericForm.style'
import { GenericField } from '../GenericField/GenericField';
import { IGenericForm } from './IGenericForm.interface';
import { GenericButton } from '../GenericButton/GenericButton';
import { useState } from 'react';
import { IGenericField } from '../GenericField/IGenericField.interface';

export function GenericForm({ fields, title, actionButtonText, saveFormFunction }: IGenericForm) {

    const [formData, setFormData] = useState(fields as IGenericField[])
    const [formDataValid, setFormDataValid] = useState(true)

    const updateFormData = (fieldName: string, fieldValue: string, isValid: boolean) => {
        const newFormData = [...formData];
        const fieldIndex = formData.findIndex(fld => fld.fieldName === fieldName);
        newFormData[fieldIndex].value = fieldValue;
        newFormData[fieldIndex].isValid = isValid;
        
        isFormValid(newFormData)
        setFormData(newFormData)
    }

    const saveForm = async () => {
        let formDataObject: any = {}
        formData.forEach(field => {
            formDataObject[field.dbName] = field.value
        })

        try {
        
            await saveFormFunction(formDataObject);
        } catch (err: any) {
            alert(err.response.data.message)
        }
    }

    const isFormValid = (newFormData: IGenericField[]) => {        
        let isValid = newFormData.every(field => field.isValid);
        setFormDataValid(isValid)
    }

    return (
        <>
            <S.FormFieldsGroup>
                <S.FormTitle>{title}</S.FormTitle>
                {fields.map(({ fieldType, fieldName, isValid, validation }) => (
                    <GenericField
                        fieldName={fieldName}
                        isValid={isValid}
                        fieldType={fieldType}
                        onChange={updateFormData}
                        validation={validation}
                    />
                ))}
                <GenericButton title={actionButtonText} action={saveForm} disabled={!formDataValid} />
            </S.FormFieldsGroup>
        </>
    );
}