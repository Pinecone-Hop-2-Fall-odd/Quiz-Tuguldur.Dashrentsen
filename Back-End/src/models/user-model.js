import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: String,
    password: { type: String, required: true },
    email: { type: String, unique: true,required: true },
    createdOn: Date,
});

export const UserModel = mongoose.model("user", userSchema);