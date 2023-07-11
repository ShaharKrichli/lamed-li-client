import { useState } from 'react';
import * as S from './GenericField.style'
import { IGenericFieldProps } from './IGenericFieldProps.interface';
import { IValidations, validations } from '../../../utils/validations/Validations';



export function GenericField({ fieldType, fieldName, onChange, validation }: IGenericFieldProps) {
    const [textFieldValue, setTextFieldValue] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleTextFieldChange = (textValue: string) => {
        setTextFieldValue(textValue)
        const isFieldValid = validateInput(textValue)
        setError(!isFieldValid);
        onChange(fieldName, textValue, isFieldValid)
    }
    const validateInput = (input: string) => {
        let isFieldValid = true;

        validation.forEach((val) => {
            if (isFieldValid) {
                isFieldValid = validations[val.validationName as keyof IValidations](input)
                !isFieldValid && setErrorMessage(val.errorText) 
            }
        })

        return isFieldValid;
    };

    

    return (
        <S.FormTextField
            error={error}
            helperText={error && errorMessage}
            type={fieldType}
            value={textFieldValue}
            label={fieldName + (true ? ' *' : '')}
            onChange={(event) => handleTextFieldChange(event.target.value)}
        />
    );
}