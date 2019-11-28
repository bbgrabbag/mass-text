import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    email: String,
    name: String,
    phone: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const ContactModel = mongoose.model('Contact', ContactSchema);
