/// <reference types="react-scripts" />

declare type BearerToken = string;

declare namespace Models {
    interface IUser {
        _id: string;
        email: string;
        googleID: string;
        name: string;
        picture: string;
        serviceID: string;
    }
    interface IContacts {
        _id: string;
        email: string;
        name: string;
        phone: string;
        user: string;
    }
}

declare namespace Resources {
    interface IGoogleOAuth {
        link: Auth.GoogleOAuthLink;
    }
}