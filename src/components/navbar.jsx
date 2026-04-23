import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>I - Sight</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/consultation">Consultation</Link>
        <Link to="/store">Store</Link>
        <Link to="/awareness">Awareness</Link>
      </div>

      <Link to="/consultation" className="nav-btn">
        Get Started
      </Link>
    </nav>
  );
}