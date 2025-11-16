import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router working");
});

router.post("/api/webhook", (req, res) => {
  console.log('req.headers:', req.headers);
  if (req.headers["x-github-event"] === "push") {
    const payload = req.body;
    const repo = payload.repository.full_name;
    const commit = payload.after;
    const branch = payload.ref;

    console.log("Repo:", repo);
    console.log("Commit:", commit);
    console.log("Branch:", branch);
  }

  res.status(200).send("OK");
});


export default router;
