import express from "express";
import { getFarmerAnalytics } from "../controllers/analyticsController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, authorize("farmer"), getFarmerAnalytics);
export default router;
