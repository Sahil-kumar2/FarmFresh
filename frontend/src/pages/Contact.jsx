import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <PublicNavbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

        <form className="bg-white p-6 rounded-xl shadow">
          <input className="w-full border p-3 rounded mb-4" placeholder="Name" />
          <input className="w-full border p-3 rounded mb-4" placeholder="Email" />
          <textarea className="w-full border p-3 rounded mb-4" placeholder="Message" />
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
