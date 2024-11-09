import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { route } from "./routes/route.js";
import { connectDB } from "./config/db.js";

connectDB();

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", route);
app.all("*", (_, res) => {
  res.status(404).json({ message: "Ooops route not found" });
});

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
