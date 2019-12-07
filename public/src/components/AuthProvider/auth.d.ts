/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace Auth {
    type GetToken = () => BearerToken | null;
    interface ContextValue {
        public: XHR.IClient;
        protected: XHR.IClient;
    }
}