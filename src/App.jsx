import {
  Eye,
  HeartPulse,
  ShoppingBag,
  Users,
  ShieldCheck,
  ArrowRight,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import heroImg from "./assets/hero.png";
import "./index.css";

const features = [
  {
    icon: <Eye size={28} />,
    title: "Vision Consultation",
    desc: "Book certified eye specialists and receive professional guidance online.",
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "Eyewear Store",
    desc: "Discover premium glasses, lenses and eye-care essentials.",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Prescription Solution",
    desc: "Upload prescriptions and manage orders with ease.",
  },
  {
    icon: <Users size={28} />,
    title: "Community Support",
    desc: "Connect with people, caregivers and awareness initiatives.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "NGO Network",
    desc: "Access affordable care through trusted partner NGOs.",
  },
  {
    icon: <FileText size={24} />,
    title: "Digital Health Records",
    desc: "Securely store prescriptions, reports and eye-care history in one place."
  }
];

export default function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
        <Navbar />
        
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <motion.span
            className="mini-badge"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Trusted Eye Care Ecosystem
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Clear Vision, <br />
            Better Living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            A complete eye-care ecosystem for consultations, eyewear,
            prescriptions, NGO support and accessibility-first experiences.
          </motion.p>

          <div className="hero-btns">
            <Link to="/store" className="primary">
              Explore Platform <ArrowRight size={18} />
            </Link>

            <Link to="/consultation" className="secondary">
              Book Consult
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>10K+</h3>
              <span>Users Helped</span>
            </div>

            <div>
              <h3>150+</h3>
              <span>Experts</span>
            </div>

            <div>
              <h3>25+</h3>
              <span>NGO Partners</span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-image-box"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImg} alt="Premium eye care experience" />

          
        </motion.div>
      </section>

  
      {/* WHY I-SIGHT */}
      <section className="why-section">
        <div className="why-left">
          <span className="why-tag">WHY I-SIGHT</span>

          <h2>Vision Care, Unified.</h2>

          <p>
            Eye care today feels scattered — consultations in one place,
            prescriptions in another, eyewear somewhere else, and awareness often missing.
          </p>

          <p>
            I-Sight brings everything together into one trusted platform built for
            accessibility, affordability and real impact.
          </p>
        </div>

        <div className="why-right">
          <div className="eco-card main-card">
            <h3>I-Sight Ecosystem</h3>
            <p>Everything connected for better vision care.</p>
          </div>

          <div className="float-card card1"> Doctor's Consultation</div>
          <div className="float-card card2"> Eye Care Records</div>
          <div className="float-card card3"> Trusted Eyewear</div>
          <div className="float-card card4"> NGO Access</div>
          <div className="float-card card5"> Awareness </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="features-section">
        <div className="section-head">
          <span>OUR SERVICES</span>
          <h2>Everything Your Eyes Need</h2>
          <p>
            Built to combine healthcare trust, premium experience and accessible
            design.
          </p>
        </div>

        <section className="features">
          {features.map((item, i) => (
            <motion.div
              className="card"
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </section>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}