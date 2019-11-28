import express from 'express';
import {
    findUserByUserId,
} from '../services';

export const userRouter = express.Router();

userRouter.route('/profile')
    .get(async (req, res) => {
        const user = await findUserByUserId(req.user.userID);
        res.status(200).send(user);
    });
