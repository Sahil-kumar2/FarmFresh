import Order from "../models/Order.js";
import Crop from "../models/Crop.js";

export const getFarmerAnalytics = async (req, res) => {
  const farmerCrops = await Crop.find({ farmer: req.user.id }).select("_id");
  const cropIds = farmerCrops.map(c => c._id);

  const orders = await Order.find({
    "items.crop": { $in: cropIds },
  });

  let revenue = 0;
  const dailySales = {};

  orders.forEach(order => {
    revenue += order.totalAmount;
    const day = order.createdAt.toISOString().split("T")[0];
    dailySales[day] = (dailySales[day] || 0) + order.totalAmount;
  });

  res.json({ revenue, dailySales });
};
