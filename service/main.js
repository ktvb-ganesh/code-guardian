import express from "express";
import router from "./route.js";

const app = express();

// parse JSON
app.use(express.json({ limit: "5mb" }));

// parse urlencoded
app.use(express.urlencoded({ extended: true }));

// log for debugging
console.log("Mounting routes...");

// mount router
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
