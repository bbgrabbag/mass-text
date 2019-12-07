export const createClient: XHR.CreateClient = (origin, middleware, baseConfig): XHR.IClient => {

    const request: XHR.Request = async (path, body, options = {}) => {
        const config = middleware.reduce<RequestInit>((a, m) => m(a), {
            ...baseConfig,
            ...options,
            body,
        });
        return await fetch(origin + path, config);
    };

    return {
        delete: request,
        get: request,
        post: request,
        put: request,
    };
};
