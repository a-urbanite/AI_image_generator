import express from "express";
import { router } from "./routes/openaiRoutes.js";
import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

//start server

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

app.listen(port, () => console.log(`Server started on port http://localhost:${port}/`));
export default app;