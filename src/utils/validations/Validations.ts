export interface IValidations {
    required: (value: any) => boolean,
    onlyNumbers: (value: any) => boolean
}

export const validations = {
    required: (value: any): boolean => {
        return value.length > 0
    },
    onlyNumbers: (value: any): boolean => {
        return /^\d+$/.test(value)
    },
} as IValidations