import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("isight-user");
    const savedName = localStorage.getItem("isight-name");

    if (savedUser) {
      setIsLoggedIn(true);
    }

    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const showToast = (message, time = 4000) => {
    setToastMessage(message);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, time);
  };

  const handleAuth = (e) => {
    e.preventDefault();

    let displayName = "";

    if (isSignup) {
      displayName = fullName.trim();
    } else {
      displayName = email.split("@")[0];
    }

    localStorage.setItem("isight-user", "loggedin");
    localStorage.setItem("isight-name", displayName);

    setUserName(displayName);
    setIsLoggedIn(true);
    setShowModal(false);

    setFullName("");
    setEmail("");
    setPassword("");

    showToast("✓ Successfully signed in");
  };

  const handleLogout = () => {
    localStorage.removeItem("isight-user");
    localStorage.removeItem("isight-name");

    setIsLoggedIn(false);
    setShowProfile(false);
    setUserName("");

    showToast("✓ Logged out successfully", 3000);
  };

  const initials =
    userName.trim().length > 1
      ? userName.trim().slice(0, 2).toUpperCase()
      : "IS";

  return (
    <>
      {/* TOAST */}
      {toast && (
        <div className="success-toast">
          {toastMessage}
        </div>
      )}

      <nav className="nav">
        <h2>I - Sight</h2>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/consultation">Consultation</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/awareness">Awareness</NavLink>
        </div>

        {isLoggedIn ? (
          <div className="profile-wrap">
            <button
              className="profile-btn"
              onClick={() =>
                setShowProfile(!showProfile)
              }
            >
              {initials}
            </button>

            {showProfile && (
              <div className="profile-menu">
                <p>{userName}</p>

                <button
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="nav-btn"
            onClick={() => setShowModal(true)}
          >
            Get Started
          </button>
        )}
      </nav>

      {/* AUTH MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="consult-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2>
              {isSignup
                ? "Create Account"
                : "Welcome Back"}
            </h2>

            <p>
              {isSignup
                ? "Join I-Sight in seconds."
                : "Sign in to continue your care journey."}
            </p>

            <form
              className="consult-form"
              onSubmit={handleAuth}
            >
              {isSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                />
              )}

              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="submit"
                className="submit-btn"
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </form>

            <p className="switch-auth">
              {isSignup
                ? "Already registered?"
                : "Not registered yet?"}{" "}
              <span
                onClick={() =>
                  setIsSignup(!isSignup)
                }
              >
                {isSignup
                  ? "Sign In"
                  : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}