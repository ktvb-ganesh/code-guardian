import express from 'express';

const app = express.Router();

app.get('/', (req, res) => {
  res.send('you hit the route running on port 3000');
});
app.post("/api/webhook", (req, res) => {
  console.log("🔔 Webhook received:");
  console.log(req.body);

  res.status(200).send("OK");
});


export default app;