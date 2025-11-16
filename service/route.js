import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router working");
});

router.post("/api/webhook", (req, res) => {
  console.log("Body keys:", Object.keys(req.body));
  console.log('body-------------->', res);

  res.status(200).send("OK");
});


export default router;
