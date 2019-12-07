/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace XHR {
    interface IResponse<D> extends Response {
        json(): Promise<D>;
    }
    interface IClient {
        delete: XHR.Request;
        get: XHR.Request;
        post: XHR.Request;
        put: XHR.Request;
    }
    type Origin = string;
    type CreateClient = (middleware: XHR.Middleware[], config: XHR.BaseConfig, origin?: XHR.Origin) => IClient;
    type Request = <D = {}>(
        url: RequestInfo,
        body?: RequestInit['body'],
        options?: XHR.BaseConfig
    ) => Promise<XHR.IResponse<D>>;
    type BaseConfig = Omit<RequestInit, 'body' | 'method'>;
    type Middleware = (c: RequestInit) => RequestInit;
}
