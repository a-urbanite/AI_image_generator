import express from "express";
import { generateImage } from "../controllers/openaiController.js";
const router = express.Router();

router.post("/generateImage", generateImage);

export { router };
