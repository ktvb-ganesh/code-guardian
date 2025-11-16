import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router working");
});

router.post("/api/webhook", (req, res) => {
  console.log("🔔 Webhook received");

  console.log("Headers:", req.headers["x-github-event"]);
  console.log("Body keys:", Object.keys(req.body));

  res.status(200).send("OK");
});


export default router;
