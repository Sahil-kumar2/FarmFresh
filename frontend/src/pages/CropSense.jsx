import { useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

export default function CropSense() {
  const [soil, setSoil] = useState("");
  const [climate, setClimate] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getSuggestion = async () => {
    setLoading(true);
    const res = await API.post("/ai/cropsense", {
      soilType: soil,
      climate,
      location,
    });
    setResult(res.data.suggestion);
    setLoading(false);
  };

  return (
    <Layout title="CropSense AI 🌱">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Input */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Farm Details</h3>

          <input
            className="border p-3 rounded mb-3 w-full"
            placeholder="Soil Type (e.g. Loamy)"
            onChange={(e) => setSoil(e.target.value)}
          />
          <input
            className="border p-3 rounded mb-3 w-full"
            placeholder="Climate (e.g. Tropical)"
            onChange={(e) => setClimate(e.target.value)}
          />
          <input
            className="border p-3 rounded mb-3 w-full"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
            onClick={getSuggestion}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            {loading ? "Thinking..." : "Get AI Suggestions"}
          </button>
        </div>

        {/* Output */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">AI Recommendation</h3>
          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
            {result || "AI suggestions will appear here."}
          </pre>
        </div>
      </div>
    </Layout>
  );
}
