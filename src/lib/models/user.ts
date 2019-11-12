import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String,
    googleID: {
        required: true,
        type: String,
        unique: true,
    },
    name: String,
    phone: String,
    picture: String,
});

export const UserModel = mongoose.model('User', UserSchema);
