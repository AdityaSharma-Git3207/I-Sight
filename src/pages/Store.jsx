import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import storeImg from "../assets/store-hero.png";

import glassesImg from "../assets/glasses.png";
import lensesImg from "../assets/lenses.png";
import eyedropsImg from "../assets/eyedrops.png";
import cleanerImg from "../assets/cleaner.png";
import sunglassesImg from "../assets/sunglasses.png";
import accessoriesImg from "../assets/accessories.png";

export default function Store() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [toast, setToast] = useState(false);

  const openEnquiry = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(false);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />

      {/* TOAST */}
      {toast && (
        <div className="success-toast">
          ✓ Enquiry submitted successfully
        </div>
      )}

      {/* HERO */}
      <section className="store-hero">
        <div className="store-left">
          <span className="page-tag">EYEWEAR STORE</span>

          <h1>Premium Eyewear, Better Vision.</h1>

          <p>
            Discover stylish frames, quality lenses and essential eye-care
            products curated for comfort, clarity and confidence.
          </p>

          <div className="store-buttons">
            <button onClick={() => openEnquiry("General Store Products")}>
              Shop Now
            </button>

            <Link to="/">Back Home</Link>
          </div>
        </div>

        <div className="store-right">
          <img src={storeImg} alt="Eyewear Store" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="store-section">
        <div className="store-head">
          <span>CATEGORIES</span>
          <h2>Everything for Better Eye Care</h2>
          <p>
            Shop premium essentials for vision, comfort and daily eye wellness.
          </p>
        </div>

        <div className="store-grid">
          <div className="store-card">
            <img src={glassesImg} alt="Eyeglasses" />
            <h3>Eyeglasses</h3>
            <p>Stylish frames for work, study and everyday wear.</p>
            <button onClick={() => openEnquiry("Eyeglasses")}>
              Shop Now
            </button>
          </div>

          <div className="store-card">
            <img src={lensesImg} alt="Contact Lenses" />
            <h3>Contact Lenses</h3>
            <p>Comfortable lenses for clear, natural vision.</p>
            <button onClick={() => openEnquiry("Contact Lenses")}>
              Shop Now
            </button>
          </div>

          <div className="store-card">
            <img src={eyedropsImg} alt="Eye Drops" />
            <h3>Eye Drops</h3>
            <p>Relief for dryness, strain and irritation.</p>
            <button onClick={() => openEnquiry("Eye Drops")}>
              Shop Now
            </button>
          </div>

          <div className="store-card">
            <img src={cleanerImg} alt="Lens Care" />
            <h3>Lens Care</h3>
            <p>Cleaners, wipes and sprays for crystal clarity.</p>
            <button onClick={() => openEnquiry("Lens Care")}>
              Shop Now
            </button>
          </div>

          <div className="store-card">
            <img src={sunglassesImg} alt="Sunglasses" />
            <h3>Sunglasses</h3>
            <p>UV protection with premium style.</p>
            <button onClick={() => openEnquiry("Sunglasses")}>
              Shop Now
            </button>
          </div>

          <div className="store-card">
            <img src={accessoriesImg} alt="Accessories" />
            <h3>Accessories</h3>
            <p>Cases, chains, kits and essentials.</p>
            <button onClick={() => openEnquiry("Accessories")}>
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="store-cta">
        <span>EXPERT HELP</span>

        <h2>Need Help Choosing the Right Product?</h2>

        <p>
          Connect with our experts for glasses, lenses and eye care essentials
          tailored to your daily needs.
        </p>

        <div className="store-cta-buttons">
          <button onClick={() => openEnquiry("Expert Product Guidance")}>
            Consult Expert
          </button>

          <button
            className="secondary-btn"
            onClick={() => openEnquiry("Full Product Range")}
          >
            Shop All Products
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <div className="store-footer-wrap">
        <Footer />
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="consult-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <h2>Product Enquiry</h2>

            <p>
              Interested in: <strong>{selectedProduct}</strong>
            </p>

            <form
              className="consult-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <textarea
                rows="4"
                placeholder="Your requirement / power / quantity"
              ></textarea>

              <p className="launch-note">
                Full inventory browsing and secure checkout
                launching soon.
              </p>

              <button
                type="submit"
                className="submit-btn"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}