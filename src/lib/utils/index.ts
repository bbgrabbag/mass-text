export const convertObjectToURLQuery = (obj: object): string => {
    return Object.keys(obj).map((key) => `${key}=${encodeURIComponent(obj[key])}`).join('&');
};

export const partialize = (fields: string[], obj: object) => {
    return Object.keys(obj).reduce((output, key) => {
        if (fields.includes(key)) { return { ...output, [key]: obj[key] }; }
        return output;
    }, {});
};
