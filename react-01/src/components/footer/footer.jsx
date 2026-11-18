import "./footer.css";
import { Link } from "react-router-dom";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <footer id="connect">
      <div className="container footer-main">
        <div>
          <Logo />
          <p>A place for your passion</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/vault">The Vault</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <a href="https://www.whatnot.com/user/jd3cards">Whatnot</a>
          <a href="https://www.tiktok.com/@jd3cards">TikTok</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 VAULTED by JD</span>
        <span>Collect | Connect | Belong</span>
      </div>
    </footer>
  );
};

export default Footer;
