import express from "express";

const PORT = process.env.CMS_PORT || 80;
const app = express();

app.listen(PORT, () => {
  console.log("~ service listening on port", PORT);
});

// home page
app.get("/", async (req, res) => {
  res.send("Hey there");
});

// unknown paths handler
app.get("*", async (req, res) => {
  res.send("Hello world " + Date());
});
