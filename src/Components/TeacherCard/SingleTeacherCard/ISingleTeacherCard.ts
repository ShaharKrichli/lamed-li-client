import { Currency } from "../Currency/ICurrency"

export interface ISingleTeacherCard {
    firstName: string
    lastName: string
    profession: string
    shortDescription: string
    description: string
    picture: string
    age: number
    institution: string
    priceOnline: number
    priceFrontal: number
    priceFrontalStudent: number
    currency: Currency | undefined
}

