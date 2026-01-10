import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import cropRoutes from "./routes/cropRoutes.js";
import marketplaceRoutes from "./routes/marketplaceRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import farmerOrderRoutes from "./routes/farmerOrderRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

/* ✅ CORS for Vite localhost */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://farmfresh.vercel.app", // or your actual Vercel URL
    ],
    credentials: true,
  })
);

/* ✅ REQUIRED for auth */
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/crops", cropRoutes);
app.use("/api/marketplace", marketplaceRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/farmer/orders", farmerOrderRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/ai", aiRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("FarmFresh API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
