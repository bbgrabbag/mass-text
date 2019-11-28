
export interface IJWTPayload {
    userID: string;
    googleID: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: IJWTPayload;
        }
    }
}
