import React from "react";
import banner from '../../assets/img/brand/banner.jpg'; // Ensure the path is correct
import advantageIcon1 from '../../assets/img/brand/advantageIcon1.jpg'; // Replace with actual image paths
import advantageIcon2 from '../../assets/img/brand/advantageIcon2.jpg';
import advantageIcon3 from '../../assets/img/brand/advantageIcon3.jpg';
import "../Delivery/Delivery.css";

// import Footer from "../Footer/Footer";

function Delivery() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          backgroundColor: "#f6f6f6",
          height: "100vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Section */}
        <div className="px-5">
          <h1 className="text-primary fw-bold mb-3">Have a mini truck or bike?</h1>
          <p className="text-muted fs-4">
            Earn money by fulfilling transportation orders assigned by Porter.
          </p>
        </div>

        {/* Registration Form */}
        <div
          className="bg-white shadow p-4"
          style={{
            borderRadius: "8px",
            width: "350px",
            marginRight: "2rem",
          }}
        >
          <h3 className="text-center fw-bold mb-3">Attach Vehicle Now</h3>
          <form>
            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required />
            </div>

            {/* Mobile Number Input */}
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter your mobile number"
                required />
            </div>

            {/* City Dropdown */}
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select className="form-select" id="city" required>
                <option value="">Select a city</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
              </select>
            </div>

            {/* Vehicle Dropdown */}
            <div className="mb-3">
              <label htmlFor="vehicle" className="form-label">
                Vehicle
              </label>
              <select className="form-select" id="vehicle" required>
                <option value="">Select a vehicle</option>
                <option>Bike</option>
                <option>Mini Truck</option>
                <option>Truck</option>
              </select>
            </div>

            {/* Source Input */}
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source
              </label>
              <input
                type="text"
                className="form-control"
                id="source"
                placeholder="Enter source location"
                required />
            </div>

            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          {/* Footer Section */}
          <div className="mt-4 text-center">
            <p className="text-muted small mb-2">Start Earning Immediately</p>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Download on Google Play"
                style={{ width: "150px" }} />
            </a>
          </div>
        </div>
      </div>

      {/* Porter Advantage Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f6f6f6" }}>
        <h2 className="text-center fw-bold mb-5" style={{ color: "#333" }}>
          SHIFT ADVANTAGE
        </h2>
        <div className="row text-center">
          {/* Regular Trips */}
          <div className="col-md-4 mb-4">
            <img
              src={advantageIcon1}
              alt="Regular Trips"
              style={{ width: "80px", height: "80px" }} />
            <h4 className="fw-bold mt-3">Regular Trips</h4>
            <p className="text-muted">
              With our growing presence across multiple cities, we always have
              our hands full! This means you will never run out of trips.
            </p>
          </div>

          {/* Better Earning */}
          <div className="col-md-4 mb-4">
            <img
              src={advantageIcon2}
              alt="Better Earning"
              style={{ width: "80px", height: "80px" }} />
            <h4 className="fw-bold mt-3">Better Earning</h4>
            <p className="text-muted">
              Earn more by partnering with the best! Regular trips and efficient
              service can grow your earnings!
            </p>
          </div>

          {/* On-Time Payment */}
          <div className="col-md-4 mb-4">
            <img
              src={advantageIcon3}
              alt="On-Time Payment"
              style={{ width: "80px", height: "80px" }} />
            <h4 className="fw-bold mt-3">On-Time Payment</h4>
            <p className="text-muted">
              Be assured to receive all payments on time & get the best in class
              support, by renting/hiring your vehicle along with the operator to
              Porter.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Delivery;
