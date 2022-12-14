import express from "express";
import { router } from "../routes/openaiRoutes.js";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//set static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))

//api routing
app.use("/api/openai", router);

app.get("/api/test", (req, res) => {
  res.status(200).send('Hello World')
});

export default app;