export const convertObjectToURLQuery = (obj: object): string => {
    return Object.keys(obj).map((key) => `${key}=${encodeURIComponent(obj[key])}`).join('&');
};
