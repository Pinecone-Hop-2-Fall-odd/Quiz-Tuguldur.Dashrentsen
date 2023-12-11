import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt"

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data });
};

export const getUser = async (req, res) => {
  const userId = req.user.user_id
  const user = await UserModel.findOne({ _id: userId });
  console.log(user);

  if (user.length == 0) {
    res.status(405).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: user });
  }
  console.log(user);
};

export const createUser = async (req, res) => {
  try {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password || "" , 10);
    await UserModel.create({
      userName: body.userName,
      email: body.email,
      password: hashedPassword,
      createdOn: new Date(),
    });
    const users = await UserModel.find();

    res.status(200).json({ users: users });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};
