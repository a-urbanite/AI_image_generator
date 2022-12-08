import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
// const router = express.Router();
import { router } from "./routes/openaiRoutes.js";

const app = express();

app.use('/openai', router);



app.listen(port, () => console.log(`Server started on port ${port}`));
