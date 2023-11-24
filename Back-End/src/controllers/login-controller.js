import { UserModel } from "../models/user-model.js";

export const login = async (req, res) => {
    // password, email
    const body = req.body;
    console.log(body);

    if (body.email === undefined) {
        res.status(403).json({ message: "Email required" })
        return;
    }
    if (body.password === undefined) {
        res.status(403).json({ message: "Password required" })
        return;
    }

    const user = await UserModel.find({ email: body.email });
    console.log(user);
    console.log(user[0].password);
    console.log(body.password);

    if (user.length === 0) {
        res.status(405).json({ message: "User not found" });
    } else {

        if (user[0].password === body.password) {
            res.status(200).json({ user: user[0] });
            return;
        } else {
            res.status(406).json({ message: "Password not match" });
            return;
        }
    }


}