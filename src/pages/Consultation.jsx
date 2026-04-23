import { useState } from "react";
import { Link } from "react-router-dom";
import doctorImg from "../assets/doctor-consult.png";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function Consultation() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const openModal = () => {
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
          ✓ Appointment request submitted successfully
        </div>
      )}

      {/* HERO */}
      <section className="service-hero">
        <div className="consult-left">
          <span className="page-tag">CONSULTATION</span>

          <h1>Trusted Eye Specialists, Online.</h1>

          <p>
            Book consultations with experienced professionals, discuss symptoms,
            receive guidance and manage follow-ups with ease.
          </p>

          <div className="consult-buttons">
            <button onClick={openModal}>
              Book Appointment
            </button>

            <Link to="/">Back Home</Link>
          </div>
        </div>

        <div className="consult-right">
          <img src={doctorImg} alt="Doctor Consultation" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="consult-process">
        <div className="section-head">
          <span>HOW IT WORKS</span>
          <h2>Get Expert Eye Care in 3 Easy Steps</h2>
          <p>
            Fast, secure and convenient consultations from certified
            specialists.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="step-no">01</div>
            <h3>Book Appointment</h3>
            <p>Select your preferred date and specialist in minutes.</p>
          </div>

          <div className="process-card">
            <div className="step-no">02</div>
            <h3>Consult Online</h3>
            <p>
              Talk to experienced eye doctors through video consultation.
            </p>
          </div>

          <div className="process-card">
            <div className="step-no">03</div>
            <h3>Get Guidance</h3>
            <p>
              Receive treatment advice, prescriptions and follow-ups.
            </p>
          </div>
        </div>
      </section>

      {/* WHY I-SIGHT */}
      <section className="consult-benefits">
        <div className="section-head">
          <span>WHY I-SIGHT</span>
          <h2>Trusted Consultation Experience</h2>
          <p>
            Designed to make eye care faster, safer and more accessible.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Certified Specialists</h3>
            <p>
              Consult qualified eye doctors with experience in routine care,
              infections, vision correction and follow-up guidance.
            </p>
            <span>Experienced professionals</span>
          </div>

          <div className="benefit-card">
            <h3>Quick Appointments</h3>
            <p>
              Book available consultation slots in minutes without standing
              in hospital queues or waiting for callbacks.
            </p>
            <span>Fast scheduling system</span>
          </div>

          <div className="benefit-card">
            <h3>Digital Prescription</h3>
            <p>
              Receive prescriptions, care instructions and recommended next
              steps directly after your consultation.
            </p>
            <span>Instant access records</span>
          </div>

          <div className="benefit-card">
            <h3>Private & Secure</h3>
            <p>
              Your consultation details remain protected with a secure
              system designed for safe medical communication.
            </p>
            <span>Confidential support</span>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="consult-conditions">
        <div className="section-head">
          <span>ANY CONDITION</span>
          <h2>We Can Connect You With the Right Doctor</h2>
          <p>
            No matter the concern, our platform helps you reach experienced
            eye specialists for timely consultation and proper guidance.
          </p>
        </div>

        <div className="conditions-grid">
          <div className="condition-card">Dry Eyes</div>
          <div className="condition-card">Blurred Vision</div>
          <div className="condition-card">Eye Infection</div>
          <div className="condition-card">Redness & Irritation</div>
          <div className="condition-card">Eye Strain</div>
          <div className="condition-card">Headaches</div>
          <div className="condition-card">Power Change</div>
          <div className="condition-card">Emergency Guidance</div>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="consult-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <h2>Book Consultation</h2>

            <p>
              Fill your details and our team will contact you soon.
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
                placeholder="Describe your concern"
              ></textarea>

              <button
                type="submit"
                className="submit-btn"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}