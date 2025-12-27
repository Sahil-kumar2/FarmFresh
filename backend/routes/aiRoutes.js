import express from "express";
import { cropSense } from "../controllers/aiController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/cropsense", protect, cropSense);
export default router;
