import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Home.css'

const Home = () => {
  const services = [
    {
      title: "Two Wheelers",
      description: "Reliable goods transportation services for up to 20 kg",
      icon: "🛵",
      cities: ["Bangalore", "Mumbai", "Delhi"],
    },
    {
      title: "Trucks",
      description: "Hassle-free goods transportation up to 2500 kg",
      icon: "🚛",
      cities: ["Bangalore", "Hyderabad", "Chennai"],
    },
    {
      title: "Packers & Movers",
      description: "House shifting hai? Ho Jayega",
      icon: "📦",
      cities: ["Delhi", "Mumbai", "Pune"],
    },
    {
      title: "Intercity Courier Service",
      description: "Get goods delivered across cities",
      icon: "📮",
      cities: ["Bangalore", "Mumbai", "Delhi", "Chennai"],
    },
    {
      title: "API Integration",
      description:
        "Automate the transportation of your goods by integrating our APIs",
      icon: "🔗",
      cities: ["All Cities"],
    },
  ];

  const cities = ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune"];

  const [filter, setFilter] = useState(""); // Filter for services
  const [selectedCity, setSelectedCity] = useState("Bangalore"); // Filter for city
  const [showEstimateModal, setShowEstimateModal] = useState(false);
  const [estimateInput, setEstimateInput] = useState({
    source: "",
    destination: "",
    weight: "",
    serviceType: "Two Wheelers",
  });
  const [estimatedCost, setEstimatedCost] = useState(null);

  // Handle filtering services by city and title
  const filteredServices = services.filter((service) => {
    const cityMatch =
      selectedCity === "All Cities" || service.cities.includes(selectedCity);
    const serviceMatch = filter === "" || service.title.includes(filter);
    return cityMatch && serviceMatch;
  });

  // Handle input changes for estimate
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstimateInput({ ...estimateInput, [name]: value });
  };

  // Calculate Estimate
  const calculateEstimate = () => {
    const { weight, serviceType } = estimateInput;
    let baseCost;

    switch (serviceType) {
      case "Two Wheelers":
        baseCost = 50;
        break;
      case "Trucks":
        baseCost = 150;
        break;
      case "Packers & Movers":
        baseCost = 500;
        break;
      case "Intercity Courier Service":
        baseCost = 300;
        break;
      default:
        baseCost = 100;
    }

    const cost = baseCost + (weight ? parseFloat(weight) * 10 : 0);
    setEstimatedCost(cost);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="position-relative">
  <div
    className="position-relative"
    style={{
      height: "400px",
      backgroundImage:
        "url('https://www.shutterstock.com/image-vector/3d-vector-delivery-van-box-600nw-2176128311.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="position-absolute top-50 start-50 translate-middle text-center text-white p-3"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "8px",
        maxWidth: "90%",
        width: "600px",
      }}
    >
      <h1 className="display-5">
        Delivery hai? <span className="text-primary">#HoJayega!</span>
      </h1>
    </div>
  </div>
</header>


      {/* City Selection */}
      <div className="bg-primary text-white text-center py-4">
        <h2 className="mb-3">
          City:{" "}
          <select
            className="form-select d-inline-block w-auto bg-primary text-white border-0"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {["All Cities", ...cities].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </h2>
        <button
          className="btn btn-light mt-3"
          onClick={() => setShowEstimateModal(true)}
        >
          Get an Estimate (Takes ~2 mins)
        </button>
      </div>

      {/* Filter Section */}
      <section className="container my-4">
        <h3 className="text-center">Filter Our Services</h3>
        <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
          {["Two Wheelers", "Trucks", "Packers & Movers", "Intercity Courier Service"].map(
            (category) => (
              <button
                key={category}
                className={`btn ${
                  filter === category
                    ? "btn-primary text-white"
                    : "btn-outline-primary"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            )
          )}
          <button
            className={`btn ${
              filter === "" ? "btn-secondary text-white" : "btn-outline-secondary"
            }`}
            onClick={() => setFilter("")}
          >
            Show All
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {filteredServices.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="display-1 mb-3">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimate Modal */}
      {showEstimateModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get an Estimate</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEstimateModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Source</label>
                    <input
                      type="text"
                      className="form-control"
                      name="source"
                      value={estimateInput.source}
                      onChange={handleChange}
                      placeholder="Enter source location"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input
                      type="text"
                      className="form-control"
                      name="destination"
                      value={estimateInput.destination}
                      onChange={handleChange}
                      placeholder="Enter destination location"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Weight (kg)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="weight"
                      value={estimateInput.weight}
                      onChange={handleChange}
                      placeholder="Enter weight of goods"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service Type</label>
                    <select
                      className="form-select"
                      name="serviceType"
                      value={estimateInput.serviceType}
                      onChange={handleChange}
                    >
                      <option>Two Wheelers</option>
                      <option>Trucks</option>
                      <option>Packers & Movers</option>
                      <option>Intercity Courier Service</option>
                    </select>
                  </div>
                </form>
                {estimatedCost !== null && (
                  <div className="alert alert-success mt-3" role="alert">
                    Estimated Cost: ₹{estimatedCost.toFixed(2)}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={calculateEstimate}
                >
                  Calculate
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowEstimateModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
