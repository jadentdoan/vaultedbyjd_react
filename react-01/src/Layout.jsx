import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home",
      "/services": "Services",
      "/vault": "The Vault",
      "/live": "Live Shows",
      "/about": "About",
      "/grading": "Grading",
      "/saints-preview": "Saints Collection",
      "/collegiate-preview": "Collegiate Collection",
      "/gold-preview": "Other Gold",
    };
    document.title =
      (titles[location.pathname] || "Page not found") + " | VAULTED by JD";
    const section = document.getElementById(location.hash.slice(1));
    if (section) section.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location]);

  return (
    <div id="content">
      <Toaster position="top-center" toastOptions={{ duration: 5000, style: { background: "#f3f0e9", color: "#0d181e" } }} />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content").focus();
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
