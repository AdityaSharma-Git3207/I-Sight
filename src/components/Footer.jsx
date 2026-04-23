import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>I - Sight</h2>

          <p>
            Complete eye care ecosystem for consultations, awareness, eyewear and better vision support.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/consultation">Consultation</Link>
          <Link to="/store">Store</Link>
          <Link to="/awareness">Awareness</Link>
        </div>

        <div className="footer-links">
          <h4>Support</h4>

          <a href="/">Help Center</a>
          <a href="/">Shipping</a>
          <a href="/">Returns</a>
          <a href="/">Contact Us</a>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>

          <p>support@isight.com</p>
          <p>+91 98765 43210</p>
          <p>Mon - Sat | 9AM - 7PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 I - Sight. All rights reserved.</p>
      </div>

    </footer>
  );
}