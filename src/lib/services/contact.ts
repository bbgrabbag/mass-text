import { MongooseDocument } from 'mongoose';
import { ContactModel } from '../models/contact';

export const createContact = async (contact: IContact): Promise<MongooseDocument> => {
    const saved = await new ContactModel(contact).save();
    return saved;
};

export const findContacts = async (userID: string) => {
    const contacts = await ContactModel.find({ user: userID });
    return contacts;
};
