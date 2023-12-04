import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";

env.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
