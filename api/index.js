import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
import { router } from "../routes/openaiRoutes.js";
// import * as path from 'path';
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

//start server
// app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;