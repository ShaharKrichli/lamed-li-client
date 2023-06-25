export const encodeBase64 = (str: any) => {
    const data = JSON.stringify(str);
    const buff = Buffer.from(data);
    const base64data = buff.toString('base64');
    return base64data;
}