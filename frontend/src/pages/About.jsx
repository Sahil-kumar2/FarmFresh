import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <PublicNavbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">About FarmFresh</h2>
        <p className="text-gray-600 leading-relaxed">
          FarmFresh is an AI-powered agri-commerce platform designed to
          empower farmers and provide consumers with fresh, traceable
          produce. We eliminate middlemen and promote sustainable farming.
        </p>
      </div>
      <Footer />
    </>
  );
}
