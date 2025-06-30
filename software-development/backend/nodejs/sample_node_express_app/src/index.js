import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import mainRouter from "./routes/mainRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); // Parses application/json
app.use(urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded
app.use(cors({ origin: process.env.CORS_URL }));

app.use("/", mainRouter);

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "Something Went Wrong !", error: err.message });
});

app.listen(port, () => {
  console.log("Messaging App is running on http://localhost:", port);
});
