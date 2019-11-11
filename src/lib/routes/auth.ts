import express from 'express';
import { config } from '../../config';
import { generateOAuthLink, getAccessToken, getGoogleUserInfo } from '../services';
import { convertObjectToURLQuery } from '../utils';

export const authRouter = express.Router();

authRouter.route('/link')
    .get((req, res) => {
        res.status(200).send({ link: generateOAuthLink() });
    });
authRouter.route('/callback')
    .get(async (req, res) => {
        const token = await getAccessToken(req.query.code);
        const userInfo = await getGoogleUserInfo(token.access_token);
        // check if user lives in DB (by googleID)
        // YES - send back saved user
        // NO - create new user and send it back
        res.redirect(`${config.baseURL}?${convertObjectToURLQuery(userInfo)}`);
    });
