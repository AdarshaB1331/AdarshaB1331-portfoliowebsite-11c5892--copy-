import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import routers from "./routes/messageRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Successfully connected to the database");
});
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/", routers);
app.listen(process.env.PORT, () => {
  console.log("successfully connected to the PORT ", process.env.PORT);
});
