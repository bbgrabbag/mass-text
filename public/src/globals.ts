export const Origin = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/';

export enum Paths {
    API = '/api',
    Auth = '/api/auth',
    User = '/api/user',
    Profile = '/api/user/profile',
    OAuthLink = '/api/auth/link',
}
