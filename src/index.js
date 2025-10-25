import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import publicRoutes from "./routes/public.route.js";
import overlayRoutes from "./routes/overlay.route.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173","https://ycc-overlay.netlify.app/"],
    credentials: true,
  })
);

// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/overlay", overlayRoutes);
app.use("/api/public", publicRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});