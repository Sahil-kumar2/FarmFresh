import Order from "../models/Order.js";
import Crop from "../models/Crop.js";

export const createOrder = async (req, res) => {
  const { items } = req.body;
  let total = 0;

  for (let item of items) {
    const crop = await Crop.findById(item.crop);
    total += crop.price * item.qty;
  }

  const order = await Order.create({
    buyer: req.user.id,
    items,
    totalAmount: total,
  });

  res.status(201).json(order);
};
