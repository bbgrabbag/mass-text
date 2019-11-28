import express from 'express';
import { sendMessage } from '../services';
import { findContactByID, findUserByUserId } from '../services';

export const messagingRouter = express.Router();

messagingRouter.route('/send')
    .post(async (req, res) => {

        const from = await findUserByUserId(req.user.userID);
        if (!from.serviceID) { throw new Error(('Invalid Phone Number')); }

        const to = await findContactByID(req.user.userID, req.body.to);
        const message = await sendMessage({
            body: req.body.message,
            messagingServiceSid: from.serviceID,
            to: to.phone,
        } as IMessageConfig);

        res.status(201).send(message);
    });
