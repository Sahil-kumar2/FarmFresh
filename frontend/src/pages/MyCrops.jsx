import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

export default function MyCrops() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    API.get("/crops/my").then(res => setCrops(res.data));
  }, []);

  return (
    <Layout title="My Crops">
      {crops.length === 0 && (
        <p className="text-gray-500">You have not added any crops yet.</p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {crops.map(crop => (
          <div key={crop._id} className="bg-white p-4 rounded-xl shadow">
            <img
              src={crop.image}
              alt={crop.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h3 className="font-semibold mt-2">{crop.name}</h3>
            <p className="text-gray-600">₹{crop.price} / kg</p>
            <p className="text-gray-500 text-sm">
              Qty: {crop.quantity} kg
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
