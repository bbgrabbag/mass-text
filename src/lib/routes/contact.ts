import express from 'express';
import {
    createContact,
    findContacts,
} from '../services';

export const contactRouter = express.Router();

contactRouter.route('/')
    .get(async (req, res) => {
        const contacts = await findContacts(req.user.userID);
        res.status(200).send(contacts);
    })
    .post(async (req, res) => {
        const jsonContact = { ...req.body, userID: req.user.userID };
        const contact = await createContact(jsonContact);
        res.status(201).send(contact);
    });
    // EDIT
    // DELETE
