import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: { type: String, unique: true },
    createdOn: Date,
});

export const UserModel = mongoose.model("user", userSchema);