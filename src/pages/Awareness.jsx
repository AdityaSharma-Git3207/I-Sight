import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import eyeHero from "../assets/eye-hero.png";

export default function Awareness() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="aware-hero"
        style={{
          "--bg-url": `url(${eyeHero})`,
        }}
      >
        <span className="page-tag">AWARENESS</span>

        <h1>Learn Today. Protect Vision for Life.</h1>

        <p>
          Simple awareness, daily habits and early action can prevent
          many common eye problems before they grow serious.
        </p>

        <div className="aware-buttons">
          <Link
            to="/consultation"
            className="primary-btn"
          >
            Book Consultation
          </Link>

          <Link to="/store">
            Explore Store
          </Link>
        </div>
      </section>

      {/* TOPICS */}
      <section className="aware-section">
        <div className="store-head">
          <span>ESSENTIAL TOPICS</span>

          <h2>Eye Care That Actually Matters</h2>

          <p>
            Practical awareness tips for students, professionals and families.
          </p>
        </div>

        <div className="aware-grid">
          <div className="aware-card">
            <h3>Screen Time Care</h3>
            <p>Use the 20-20-20 rule to reduce strain and dryness.</p>
          </div>

          <div className="aware-card">
            <h3>Healthy Nutrition</h3>
            <p>Include carrots, spinach, nuts and omega-3 foods.</p>
          </div>

          <div className="aware-card">
            <h3>Sleep & Recovery</h3>
            <p>Proper sleep helps eye muscles recover daily.</p>
          </div>

          <div className="aware-card">
            <h3>Warning Signs</h3>
            <p>Blurred vision, pain or redness needs attention early.</p>
          </div>

          <div className="aware-card">
            <h3>Lens Hygiene</h3>
            <p>Always clean lenses and avoid unsafe reuse habits.</p>
          </div>

          <div className="aware-card">
            <h3>Regular Checkups</h3>
            <p>Routine tests help detect issues before symptoms appear.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aware-cta">
        <span>BETTER HABITS</span>

        <h2>Small Daily Care Creates Long-Term Vision Health</h2>

        <p>
          Start protecting your eyesight with simple steps and expert support.
        </p>

        <div className="aware-buttons">
          <Link
            to="/consultation"
            className="primary-btn"
          >
            Consult Expert
          </Link>

          <Link to="/store">
            Shop Essentials
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}