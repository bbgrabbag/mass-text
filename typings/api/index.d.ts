
declare interface IUser {
    phone: string;
    googleID: string;
    name: string;
    picture: string;
    email: string;
}

declare interface IContact {
    phone: string;
    email: string;
    name: string;
    user: string;
}
