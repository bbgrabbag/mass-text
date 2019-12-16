/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace Auth {
    type GoogleOAuthLink = string;
    interface ContextValue {
        user: Models.IUser;
        googleOAuthLink: GoogleOAuthLink;
        loadUserProfile: () => Promise,
        getOAuthLink: () => Promise,
        logout: () => void;
    }
}