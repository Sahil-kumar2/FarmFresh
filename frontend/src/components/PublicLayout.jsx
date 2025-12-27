import PublicNavbar from "./PublicNavbar";
import PrivateNavbar from "./PrivateNavbar";
import Footer from "./Footer";
import { isLoggedIn } from "../utils/auth";

export default function PublicLayout({ children }) {
  const loggedIn = isLoggedIn();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {loggedIn ? <PrivateNavbar /> : <PublicNavbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
