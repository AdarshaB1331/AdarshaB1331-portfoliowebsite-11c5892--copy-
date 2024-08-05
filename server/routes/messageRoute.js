import express from "express";
import { postMessgae } from "../controller/postMessage.js";

const routers = express.Router();

routers.post("/posts/message", postMessgae);
export default routers;
