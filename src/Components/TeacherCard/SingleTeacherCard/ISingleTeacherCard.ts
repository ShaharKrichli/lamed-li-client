import { Currency } from "../Currency/ICurrency"

export interface SingleTeacherCard {
    firstName: string
    lastName: string
    profession: string
    shortDescription: string
    description: string
    picture: string
    dateOfBirth: Date
    institution: string
    priceOnline: number
    priceFrontal: number
    priceFrontalStudent: number
    currency: Currency | undefined
}

