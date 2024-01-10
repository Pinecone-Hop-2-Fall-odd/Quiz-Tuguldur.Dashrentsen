import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    category:String

});

export const categoriesModel = mongoose.model("categories", categoriesSchema);