import Order from "../models/Order.js";
import Crop from "../models/Crop.js";

export const getFarmerOrders = async (req, res) => {
  try {
    // 1️⃣ Get all crops owned by this farmer
    const farmerCrops = await Crop.find({ farmer: req.user.id }).select("_id");
    const cropIds = farmerCrops.map(c => c._id);

    // 2️⃣ Find orders that include these crops
    const orders = await Order.find({
      "items.crop": { $in: cropIds },
    })
      .populate("buyer", "name email")
      .populate("items.crop", "name price");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
