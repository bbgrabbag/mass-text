import { createClient } from '../../../lib';

export const useAuthProvider = (): Auth.ContextValue => {

    const getToken: Auth.GetToken = () => localStorage.getItem('bearer-token');
    const setAuthHeader: XHR.Middleware = (config) => {
        config.headers = new Headers();
        config.headers.set('Authorization', getToken() || '');
        return config;
    };

    const client = createClient('http://localhost:8080', [setAuthHeader], {});

    return {
        client,
    };
};
