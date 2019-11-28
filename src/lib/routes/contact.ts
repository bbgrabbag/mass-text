import express from 'express';
import { runInNewContext } from 'vm';
import {
    createContact,
    deleteContactByID,
    findContacts,
    updateContactByID,
} from '../services';
import { partialize } from '../utils';

export const contactRouter = express.Router();

contactRouter.route('/')
    .get(async (req, res) => {
        const contacts = await findContacts(req.user.userID);
        res.status(200).send(contacts);
    })
    .post(async (req, res) => {
        const jsonContact = { ...req.body, user: req.user.userID };
        const contact = await createContact(jsonContact);
        res.status(201).send(contact);
    });

contactRouter.route('/:contactID')
    .put(async (req, res, next) => {
        const contact = await updateContactByID(
            req.user.userID, req.params.contactID,
            partialize(['name', 'phone'], req.body),
        );
        if (!contact) { return next({ message: 'No contact found', status: 404 }); }
        res.status(200).send(contact);
    })
    .delete(async (req, res, next) => {
        const removed = await deleteContactByID(req.user.userID, req.params.contactID);
        if (!removed) { return next({ message: 'There was a problem deleting record', status: 400 }); }
        res.status(204).send();
    });
