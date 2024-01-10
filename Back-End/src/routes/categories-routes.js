import express from "express";
import { addCategory,getCategories } from "../controllers/categories-controller.js";

export const categoriesRouter = express.Router();

categoriesRouter.post("/addCategory", addCategory);
categoriesRouter.get("/getCategories", getCategories);
