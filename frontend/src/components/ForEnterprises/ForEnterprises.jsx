import React from "react";
// import Footer from "../Footer/Footer"; // Import the Footer component
import './ForEnterprises.css'
const ForEnterprises = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="container-fluid bg-dark text-light py-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-center text-md-start px-4">
            <h1 className="fw-bold mb-3">
              Reliable Goods Transportation Services with Seamless Control
            </h1>
            <p className="mt-3">
              Hassle-Free Enterprise Logistics | Centralised Management | Transparent Operations & Full Control
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="col-md-5 offset-md-1 bg-white p-4 rounded shadow text-dark">
            <h5 className="text-center mb-4">Fill Out For More Details</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter your Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Enter your Company Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Enter your Company Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Enter your Phone Number<span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter your Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Our Clients</h3>
        <div
          id="clientsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {/* Single Slide with 6 Images */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWxfRTnA4s-Oi-MCzUgwjFW6Fadk-lJ-Z8Q&s"
                  className="d-block mx-3"
                  alt="Client 1"
                  style={{ height: "100px" }}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWxfRTnA4s-Oi-MCzUgwjFW6Fadk-lJ-Z8Q&s"
                  className="d-block mx-3"
                  alt="Client 2"
                  style={{ height: "100px" }}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWxfRTnA4s-Oi-MCzUgwjFW6Fadk-lJ-Z8Q&s"
                  className="d-block mx-3"
                  alt="Client 3"
                  style={{ height: "100px" }}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWxfRTnA4s-Oi-MCzUgwjFW6Fadk-lJ-Z8Q&s"
                  className="d-block mx-3"
                  alt="Client 4"
                  style={{ height: "100px" }}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWxfRTnA4s-Oi-MCzUgwjFW6Fadk-lJ-Z8Q&s"
                  className="d-block mx-3"
                  alt="Client 5"
                  style={{ height: "100px" }}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWxfRTnA4s-Oi-MCzUgwjFW6Fadk-lJ-Z8Q&s"
                  className="d-block mx-3"
                  alt="Client 6"
                  style={{ height: "100px" }}
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#clientsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#clientsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Industries We Serve</h3>
        <p className="text-center">
          With unmatched expertise and experience in handling diverse goods & consignments, we pride ourselves on being the trusted goods transport agency for businesses of all sizes. From small enterprises to large businesses, we transport a wide array of items with efficiency and reliability. Our capabilities span across industries. For seamless and effortless logistics for businesses and enterprises, choose Porter Enterprise, your trusted partner for goods transportation services.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h5>Electronics & Appliances</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Construction Materials</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Chemicals & Pharmaceuticals</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>E-Commerce</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>F&Vs & Processed Foods</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Efficient Logistics</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Furnitures</h5>
          </div>
          <div className="col-md-4 mb-4">
            <h5>FMCG</h5>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container text-center my-5">
        <h3>For Any More Query</h3>
        <p>
          Reach us out on <strong>9667309777</strong> today to know more about us and get benefits from our managed services offering. Our expert team will be happy to know more about your business and recommend the best possible solutions tailored to your logistics needs.
        </p>
        <button className="btn btn-primary">Request Callback</button>
      </div>

      {/* FAQs */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>
        <div className="row text-center">
          <div className="col-md-6">
            <a
              href="https://dom-website-prod-cdn-cms.porter.in/faq_icon_4a391321b6.svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://dom-website-prod-cdn-cms.porter.in/faq_icon_4a391321b6.svg"
                alt="FAQ Icon"
                style={{ width: "100px" }}
              />
              <p>Have questions about our Enterprise Services?</p>
              <p>Read our FAQs</p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      {/* Using the Footer Component */}
    </div>
  );
};

export default ForEnterprises;
