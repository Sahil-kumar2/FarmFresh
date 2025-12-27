import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

export default function HowItWorks() {
  return (
    <>
      <PublicNavbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          How FarmFresh Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold">1. Farmers List Crops</h3>
            <p className="text-gray-600 text-sm mt-2">
              Farmers upload crops with prices and availability.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold">2. Buyers Place Orders</h3>
            <p className="text-gray-600 text-sm mt-2">
              Buyers browse marketplace and order directly.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold">3. Smart Insights</h3>
            <p className="text-gray-600 text-sm mt-2">
              Farmers analyze sales and get AI crop guidance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
