import express from "express";
import cors from "cors";
import viewRouter from "./routes/views";
import operationRouter from "./routes/operations";
import { connectToMongoDB } from "./db";
import { MONGO_URI } from "./config";

const PORT = process.env.PORT || 80;
const app = express();

//options
app.use(cors());
app.use(express.urlencoded({ extended: true })); // getting URL encodings
app.use(express.json());

// database connection
connectToMongoDB(MONGO_URI);

// routes
app.use("/api/view", viewRouter);
app.use("/api/action", operationRouter);

app.listen(PORT, () => {
  console.log("~ service listening on port", PORT);
});

// home page
app.get("/", (req, res) => {
  res.send("Hey there");
});

// unknown paths handler
app.get("*", async (req, res) => {
  res.send("Hello world " + Date());
});
