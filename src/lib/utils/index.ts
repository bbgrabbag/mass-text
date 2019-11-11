export const convertObjectToURLQuery = (obj: { [k: string]: string }): string => {
    return Object.keys(obj).map((key) => `${key}=${encodeURIComponent(obj[key])}`).join('&');
};
