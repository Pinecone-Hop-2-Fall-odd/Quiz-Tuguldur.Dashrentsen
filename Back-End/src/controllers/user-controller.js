export const users = [
  {id: 1700649791140, userName: "aaa", password: "aaa", email: "aaa@gmail.com"}];

export const getAllUsers = (req, res) => {
  res.status(200).json({ users: users });
};

export const getUser = (req, res) => {
  const params = req.params;
  const filteredUser = users.filter((cur) => cur.id === Number(params.id));
  

  if (filteredUser.length === 0) {
    res.status(405).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: filteredUser });
  }
};

export const createUser = (req, res) => {
  const body = req.body;

  const newUser = {
    id: new Date().getTime(),
    userName: body.userName,
    password: body.password,
    email: body.email,
  };
  users.push(newUser);
  res.status(200).json({ users: users });
};
