import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String,
    googleID: String,
    name: String,
});
