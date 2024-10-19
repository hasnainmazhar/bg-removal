import "dotenv/config";
import express from "express";
import cors from "cors";
import connDB from "./config/mongodb.js";

// App Config
const PORT = process.env.PORT || 8080;
const app = express();
await connDB();

// Initializa Middlewares

app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
