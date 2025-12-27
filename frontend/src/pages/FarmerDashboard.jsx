import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Layout from "../components/Layout";

export default function FarmerDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/farmer/orders")
      .then(res => setOrders(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout title="Farmer Dashboard">
      {/* TOP DASHBOARD CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {/* TOTAL ORDERS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <p className="text-3xl font-semibold mt-2">
            {orders.length}
          </p>
        </div>

        {/* AI CARD (IMPORTANT) */}
        <Link
          to="/ai"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 block"
        >
          <p className="text-gray-500 text-sm">AI Tools</p>
          <h3 className="text-xl font-semibold mt-2">
            🤖 CropSense AI
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Get AI-powered crop recommendations based on soil,
            climate, and location.
          </p>
        </Link>

        <Link
            to="/farmer/add-crop"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all block"
        >
            <p className="text-gray-500 text-sm">Selling</p>
            <h3 className="text-xl font-semibold mt-2">
                ➕ Add Crop for Sale
            </h3>
            <p className="text-gray-600 text-sm mt-2">
                List a new crop with price and quantity.
            </p>
        </Link>


        {/* PLACEHOLDER / FUTURE FEATURE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Insights</p>
          <p className="text-lg font-semibold mt-2">
            Sales Analytics
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Track revenue and performance trends.
          </p>
        </div>
      </div>

      {/* ORDERS SECTION */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">📦 Orders</h3>

        {loading && (
          <p className="text-gray-500">Loading orders...</p>
        )}

        {!loading && orders.length === 0 && (
          <p className="text-gray-500">
            No orders yet. Once buyers place orders,
            they’ll appear here.
          </p>
        )}

        {orders.map(order => (
          <div
            key={order._id}
            className="border-b py-4 text-sm last:border-none"
          >
            <p>
              <span className="font-semibold">Buyer:</span>{" "}
              {order.buyer.name}
            </p>
            <p>
              <span className="font-semibold">Total:</span>{" "}
              ₹{order.totalAmount}
            </p>
            <p className="text-gray-500">
              Status: {order.status || "Pending"}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
