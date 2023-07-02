import { Buffer } from "buffer";

export const encodeBase64 = (str: any) => {
    const data = JSON.stringify(str);
    const buff = Buffer.from(data);
    const base64data = buff.toString('base64');
    return base64data;
}

export const checkUrlParamsOnlyDigits = (param: string) => {
    return /^\d+$/.test(param)
}

export const checkUrlParamsOnlyLetters = (param: string) => {
    return /^[A-Za-z0-9]*$/.test(param);
}