import "dotenv/config";
import express from "express";
import cors from "cors";
import connDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

// App Config
const PORT = 8000;
const app = express();
await connDB();

// Initializa Middlewares

app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res) => {
  res.send("API working");
});
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
