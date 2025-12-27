import express from "express";
import { getFarmerOrders } from "../controllers/farmerOrderController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, authorize("farmer"), getFarmerOrders);

export default router;
