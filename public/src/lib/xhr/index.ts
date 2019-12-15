import { Origin } from '../../globals';

export const createClient: XHR.CreateClient = (middleware, baseConfig, origin = Origin): XHR.IClient => {

    const request: XHR.Request = async (path, body, options = {}) => {
        const config = middleware.reduce<RequestInit>((a, m) => m(a), {
            ...baseConfig,
            ...options,
            body,
        });
        try {
            const res = await fetch(origin + path, config);
            if (res.status >= 400) {
                throw Error(res.statusText);
            } else {
                return res;
            }
        } catch (err) {
            return err;
        }
    };

    return {
        delete: request,
        get: request,
        post: request,
        put: request,
    };
};

const getTokenFromStorage = (
    storage: WindowLocalStorage['localStorage'] |
        WindowSessionStorage['sessionStorage'],
): XHR.GetToken => () => storage.getItem('bearer-token');

const setAuthHeader = (getToken: XHR.GetToken): XHR.Middleware => (config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${getToken()}`,
        },
    };
};

export const protectedClient = createClient([setAuthHeader(getTokenFromStorage(localStorage))], {});
export const publicClient = createClient([], {});
