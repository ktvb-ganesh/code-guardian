import express from "express";
import router from "./route.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
