import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      VAULTED <i className="logo__by">by</i> JD
    </Link>
  );
};

export default Logo;
