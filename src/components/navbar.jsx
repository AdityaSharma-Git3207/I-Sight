import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>I - Sight</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/consultation">
          Consultation
        </NavLink>

        <NavLink to="/store">
          Store
        </NavLink>

        <NavLink to="/awareness">
          Awareness
        </NavLink>
      </div>

      <Link
        to="/consultation"
        className="nav-btn"
      >
        Get Started
      </Link>
    </nav>
  );
}