import React from "react";
import footerLogo from "../Assets/Image/logo-png.png"; // Replace with the correct path to your logo image

const Footer = () => {
  return (
    <footer
      className="text-light"
      style={{
        background: "linear-gradient(to bottom, #1a1a1d, #000000)",
        padding: "4rem 0",
      }}
    >
      <div className="container">
        {/* Top Section */}
        <div className="row align-items-center text-center text-md-start">
          {/* Logo and Tagline */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src={footerLogo}
              alt="Company Logo"
              style={{ width: "160px", height: "auto", marginBottom: "1rem" }}
            />
            <p className="small mb-0">
              Send anything, anywhere, anytime with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  API Integrations
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  InterCity Courier
                </a>
              </li>
            </ul>
          </div>

          {/* App Download Buttons */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-uppercase fw-bold mb-3">Get the App</h5>
            <button className="btn btn-outline-light btn-sm me-2">
              Android
            </button>
            <button className="btn btn-outline-light btn-sm">iOS</button>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Social Media and Bottom Section */}
        <div className="row justify-content-between align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <a
              href="#!"
              className="text-light me-3"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#!"
              className="text-light me-3"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#!"
              className="text-light me-3"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#!"
              className="text-light"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
