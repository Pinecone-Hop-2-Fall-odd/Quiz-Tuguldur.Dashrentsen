import { categoriesModel } from "../models/categories-model.js";

export const addCategory = async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    await categoriesModel.create({
      category: body.category,
      createdOn: new Date(),
    });
    const allCategory = await categoriesModel.find();

    res.status(200).json({ allCategory: allCategory });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};

export const getCategories = async (req, res) => {

  try {
    const allCategory = await categoriesModel.find();

    res.status(200).json({ allCategory: allCategory });
  } catch (err) {
    res.status(406).json({ message: err.message });
  }
};
