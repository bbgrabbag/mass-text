import * as dotenv from 'dotenv';
import {
    jsonify,
    logger,
    serveStatic,
} from './lib';

dotenv.config();

export const config = {
    baseURL: process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}` : '', /* PRODUCTION URL*/
    dbURI: process.env.MONGODB_URI,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    loaders: [logger, jsonify, serveStatic],
    port: process.env.PORT,
};
