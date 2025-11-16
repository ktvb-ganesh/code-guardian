import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router working");
});

router.post("/api/webhook", async (req, res) => {
  console.log("Event:", req.headers["x-github-event"]);

  if (req.headers["x-github-event"] !== "push") {
    return res.status(200).send("ignored");
  }

  const payload = req.body;
  const repo = payload.repository.full_name;
  const commit = payload.after;

  console.log("Repo:", repo);
  console.log("Commit:", commit);

  const githubToken = process.env.GITHUB_TOKEN;

  try {
    const url = `https://api.github.com/repos/${repo}/commits/${commit}`;

    const response = await axios.get(url, {
      headers: {
        "Accept": "application/vnd.github.v3.diff",
        "Authorization": `Bearer ${githubToken}`,
        "User-Agent": "ai-code-reviewer"
      }
    });

    const diff = response.data;

    console.log("====== DIFF START ======");
    console.log(diff.slice(0, 500));
    console.log("====== DIFF END ======");
  } catch (err) {
    console.error("GitHub API failed:", err.response?.status, err.response?.data);
  }

  res.status(200).send("OK");
});

export default router;
