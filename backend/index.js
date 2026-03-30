import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./src/routes/authRoute.js";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

mongoose.connect("mongodb://localhost:27017/event-sphere").then(()=>
        console.log("Connected to MongoDB")
    ).catch((error) => console.log("Db not Connected")); 

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});