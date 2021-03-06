import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    apiSecret: process.env.API_SECRET,
    baseURL: () => {
        return process.env.NODE_ENV === 'development' ?
            `http://localhost:${process.env.PORT}` :
            ''; /* PRODUCTION URL*/
    },
    dbURI: process.env.MONGODB_URI,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    port: process.env.PORT,
    redirectURL: () => {
        return process.env.NODE_ENV === 'development' ?
            `http://localhost:${process.env.DEV_CLIENT_PORT}` :
            ''; /* PRODUCTION URL */
    },
    twilioAccountSID: process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
};
