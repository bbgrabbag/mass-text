import { createClient } from '../../../lib';

export const useAuthProvider = (): Auth.ContextValue => {

    const getToken: Auth.GetToken = () => localStorage.getItem('bearer-token');
    const setAuthHeader: XHR.Middleware = (config) => {
        config.headers = new Headers();
        config.headers.set('Authorization', `Bearer ${getToken()}`);
        return config;
    };

    const protectedClient = createClient([setAuthHeader], {});
    const publicClient = createClient([], {});

    return {
        protected: protectedClient,
        public: publicClient,
    };
};
