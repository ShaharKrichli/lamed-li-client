export interface ITeacher {
    email: string;
    gender: string
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    shortDescription: string;
    description: string;
    institution: string;
    isOnline: boolean;
    isFrontal: boolean;
    isFrontalStudnetHouse: boolean;
    priceOnline: number;
    priceFrontal: number;
    priceFrontalStudentHouse?: number;
}

export const teachers: ITeacher[] = [
    {
    email: "a@gmail.com",
    gender: "נקבה",
    dateOfBirth: new Date('1989-01-01'),
    firstName: "פארוק",
    lastName: "שנות-אור",
    phone: "052123456798",
    address: "קהילת וינה",
    city: "תל אביב",
    shortDescription: "אל האינסוף ומעבר לו",
    description: "זה משחה של שערות. זה משחה הכי חזק מה יש היום בשוק, עושים אותה מדג פטיש, דג חרב ודג חשמל. מערבבים הכול ביחד, לוקחים מיץ מרה של חיה מה בלילה של ירח מלא מסכנה עושה גורו גורו, גורו גורו.",
    institution: "אוניברסיטת תל אביב",
    isOnline: true,
    isFrontal: true,
    isFrontalStudnetHouse: true,
    priceOnline: 120,
    priceFrontal: 150,
    priceFrontalStudentHouse: 200,
    }
]