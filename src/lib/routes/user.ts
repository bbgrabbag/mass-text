import express from 'express';
import {
    findUserByUserId,
    updateUser,
} from '../services';
import { partialize } from '../utils';

export const userRouter = express.Router();

userRouter.route('/profile')
    .get(async (req, res) => {
        const user = await findUserByUserId(req.user.userID);
        res.status(200).send(user);
    })
    .put(async (req, res) => {
        const user = await updateUser(
            req.user.userID,
            partialize(['name', 'serviceID', 'picture'], req.body));
        res.status(200).send(user);
    });
