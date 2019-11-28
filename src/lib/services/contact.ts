import { MongooseDocument } from 'mongoose';
import { ContactModel } from '../models/contact';

export const createContact = async (contact: IContact): Promise<MongooseDocument> => {
    const saved = await new ContactModel(contact).save();
    return saved;
};

export const findContacts = async (userID: string): Promise<MongooseDocument[]> => {
    const contacts = await ContactModel.find({ user: userID });
    return contacts;
};

export const findContactByID = async (userID: string, contactID: string) => {
    const contact = await ContactModel.findOne({ user: userID, _id: contactID });
    return contact.toJSON();
};
