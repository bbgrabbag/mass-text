/// <reference types="react-scripts" />
/// <reference types="react" />

declare namespace Auth {
    type GoogleOAuthLink = string;
    interface ContextValue {
        user: Models.IUser | null;
        googleOAuthLink: GoogleOAuthLink;
        loadUserProfile: () => Promise
    }
}