import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Assets/Image/logo-transparent-png.png";  // Correct import

const Navbar1 = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    handleSuccess("User logged out successfully");
    setIsLoggingOut(true);
    localStorage.removeItem("loggedinUser");
    localStorage.removeItem("token");
    setLoggedIn(false);
    setTimeout(() => {
      navigate("/login");
      setIsLoggingOut(false);
    }, 1000);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom py-2">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
          <img
            src={logo}  // Correct usage
            alt="Brand Logo"
            height="30"
            className="me-2"
          />
          SHIFT
        </Link>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Navigation Links */}
          <div className="navbar-nav">
            <NavLink
              className="nav-link text-dark"
              to="/admin/enterprise"
              activeClassName="active"
            >
              For Enterprise
            </NavLink>
            <NavLink
              className="nav-link text-dark"
              to="/admin/partners"
              activeClassName="active"
            >
              Delivery Partners
            </NavLink>
            <NavLink
              className="nav-link text-dark"
              to="/admin/support"
              activeClassName="active"
            >
              Support
            </NavLink>
            {/* New Dashboard link */}
            <NavLink
              className="nav-link text-dark"
              to="/admin/dashboard"
              activeClassName="active"
            >
              Dashboard
            </NavLink>
          </div>

          {/* Login/Logout Button aligned to the right */}
          <div className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
                aria-label="Logout"
                disabled={isLoggingOut}
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            ) : (
              <Link className="btn btn-outline-primary" to="/auth/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </nav>
  );
};

export default Navbar1;
