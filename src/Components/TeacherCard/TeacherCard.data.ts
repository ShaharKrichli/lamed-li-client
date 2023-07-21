import { SingleTeacherCard } from "./SingleTeacherCard/ISingleTeacherCard"
import { CURRENCIES } from "./Currency/Currency.data"
export const TEACHER_CARDS: SingleTeacherCard[] = [
    {
        firstName: 'Adi',
        lastName:'Cohen',
        profession: 'History',
        shortDescription: 'Passionate history teacher dedicated to bringing the past to life, inspiring students to explore the rich tapestry of historical events, cultures, and their profound impact on the present.',
        description:'Passionate history teacher with a deep knowledge of historical events and cultures. Dedicated to making the past come alive for students through engaging lessons and interactive discussions. Inspiring a love for learning and fostering critical thinking skills to understand the impact of history on our world today',
        picture:'https://st5.depositphotos.com/10932024/62718/i/450/depositphotos_627184000-stock-photo-portrait-middle-aged-woman-working.jpg',
        age:25,
        institution: 'university of pennsylvania',
        priceOnline:25,
        priceFrontal: 80,
        priceFrontalStudent: 60,
        currency: CURRENCIES.usdollar
    },
    {
        firstName: 'Alex',
        lastName:'Zabilov',
        profession: 'Math',
        shortDescription: 'Mr. Zabilov is a passionate male math teacher who inspires students with his deep knowledge and engaging teaching style. Through his guidance, students develop a strong understanding of mathematical concepts and gain confidence in their problem-solving skills.',
        description:'Mr. Zabilov is a dedicated math teacher who ignites students passion for mathematics through his engaging teaching approach and deep subject knowledge.',
        picture:'https://t3.ftcdn.net/jpg/02/83/67/14/240_F_283671411_rnVfVGq0Tx4idIktvK8xMXZ5ztNtwG7e.jpg',
        age: 38,
        institution: 'Princeton University',
        priceOnline:34,
        priceFrontal: 105,
        priceFrontalStudent: 78,
        currency: CURRENCIES.usdollar
    },
    {
        firstName: 'Adi',
        lastName:'Cohen',
        profession: 'History',
        shortDescription: 'Passionate history teacher dedicated to bringing the past to life, inspiring students to explore the rich tapestry of historical events, cultures, and their profound impact on the present.',
        description:'Passionate history teacher with a deep knowledge of historical events and cultures. Dedicated to making the past come alive for students through engaging lessons and interactive discussions. Inspiring a love for learning and fostering critical thinking skills to understand the impact of history on our world today',
        picture:'https://st5.depositphotos.com/10932024/62718/i/450/depositphotos_627184000-stock-photo-portrait-middle-aged-woman-working.jpg',
        age: 19,
        institution: 'university of pennsylvania',
        priceOnline:0,
        priceFrontal: 0,
        priceFrontalStudent: 0,
        currency: CURRENCIES.usdollar
    },
    {
        firstName: 'Adi',
        lastName:'Cohen',
        profession: 'History',
        shortDescription: 'Passionate history teacher dedicated to bringing the past to life, inspiring students to explore the rich tapestry of historical events, cultures, and their profound impact on the present.',
        description:'Passionate history teacher with a deep knowledge of historical events and cultures. Dedicated to making the past come alive for students through engaging lessons and interactive discussions. Inspiring a love for learning and fostering critical thinking skills to understand the impact of history on our world today',
        picture:'https://st5.depositphotos.com/10932024/62718/i/450/depositphotos_627184000-stock-photo-portrait-middle-aged-woman-working.jpg',
        age: 31,
        institution: 'university of pennsylvania',
        priceOnline:0,
        priceFrontal: 0,
        priceFrontalStudent: 0,
        currency: CURRENCIES.usdollar
    },
]