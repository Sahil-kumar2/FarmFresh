import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-green-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Fresh Crops <span className="text-green-600">Directly</span><br />
              From Farmers to You
            </h1>

            <p className="text-gray-600 mt-4">
              FarmFresh connects farmers and consumers directly,
              ensuring fair prices, transparency, and freshness.
            </p>

            <div className="mt-6 space-x-4">
              <a
                href="/login"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Get Started
              </a>
              <a
                href="/how-it-works"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-lg"
              >
                Learn More
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="farm"
            className="rounded-xl shadow"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl shadow-sm">
            🌾
            <h3 className="font-semibold mt-3">For Farmers</h3>
            <p className="text-gray-600 text-sm">
              Sell directly, earn more, track sales easily.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm">
            🛒
            <h3 className="font-semibold mt-3">For Buyers</h3>
            <p className="text-gray-600 text-sm">
              Fresh produce, transparent pricing, fast orders.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm">
            🤖
            <h3 className="font-semibold mt-3">AI Powered</h3>
            <p className="text-gray-600 text-sm">
              Smart crop recommendations using AI.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
