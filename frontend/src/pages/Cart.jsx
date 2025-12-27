import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    await API.post("/orders", {
      items: cart.map(i => ({
        crop: i._id,
        qty: i.qty,
      })),
    });

    clearCart();
    alert("Order placed successfully ✅");
    navigate("/marketplace");
  };

  if (cart.length === 0) {
    return (
      <Layout title="Your Cart">
        <p className="text-gray-500">Your cart is empty.</p>
      </Layout>
    );
  }

  return (
    <Layout title="Your Cart">
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        {cart.map(item => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price} / kg</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item._id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => increaseQty(item._id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="mt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={placeOrder}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Place Order
        </button>
      </div>
    </Layout>
  );
}
