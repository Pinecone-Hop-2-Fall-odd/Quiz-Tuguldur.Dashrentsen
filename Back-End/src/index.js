import express from "express";
import cors from "cors"
import { userRouter } from "./routes/user-routes.js";
// import { userRouter } from "./routes/user-routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);

app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`)
})