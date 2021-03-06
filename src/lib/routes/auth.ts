import express from 'express';
import { config } from '../../config';
import {
    createNewUser,
    findUserByGoogleId,
    generateOAuthLink,
    getAccessToken,
    getGoogleUserInfo,
    issueToken,
} from '../services';

export const authRouter = express.Router();

authRouter.route('/link')
    .get((req, res) => {
        res.status(200).send({ link: generateOAuthLink() });
    });
authRouter.route('/callback')
    .get(async (req, res) => {
        const token = await getAccessToken(req.query.code);
        const userInfo = await getGoogleUserInfo(token.access_token);
        let dbUser = await findUserByGoogleId(userInfo.id);
        if (!dbUser) {
            dbUser = await createNewUser({ ...userInfo, googleID: userInfo.id });
        }
        const apiToken = issueToken(dbUser._id, dbUser.googleID);
        return res.redirect(`${config.redirectURL()}/?apiToken=${apiToken}`);
    });
