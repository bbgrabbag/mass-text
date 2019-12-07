/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace Auth {
    type GetToken = () => BearerToken | null;
    interface ContextValue {
        client: XHR.IClient;
    }
}