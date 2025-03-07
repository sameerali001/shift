import React, { useState } from "react";
// import Footer from "../Footer/Footer";

const Support = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInput.name || !formInput.email || !formInput.message) {
      alert("Please fill in all fields.");
      return;
    }
    setFormSubmitted(true);
  };

  const faqList = [
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment by entering your tracking ID on the Track Shipment page.",
    },
    {
      question: "What is the estimated delivery time?",
      answer: "Delivery times depend on the service type and destination but typically range from 2 to 7 days.",
    },
    {
      question: "How do I cancel my shipment?",
      answer: "To cancel a shipment, contact our support team with your shipment ID.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit/debit cards, UPI, and net banking.",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <header
        className="position-relative text-center text-white"
        style={{
          background: "linear-gradient(to bottom, #6a11cb, #2575fc)",
          padding: "4rem 2rem",
        }}
      >
        <h1 className="display-4 fw-bold">We’re Here to Help</h1>
        <p className="lead">Reach out for assistance or find quick answers below</p>
      </header>

      {/* Main Content */}
      <div className="container py-5">
        {/* Contact Form Section */}
        <section className="mb-5">
          <h2 className="text-primary fw-bold text-center mb-4">Contact Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/007/623/974/non_2x/customer-service-word-concepts-dark-blue-banner-provide-excellent-aid-infographics-with-linear-icons-on-background-isolated-typography-color-illustration-with-text-vector.jpg"
                alt="Customer Support"
                className="img-fluid rounded"
                style={{
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
            <div className="col-md-6">
              {formSubmitted ? (
                <div className="alert alert-success" role="alert">
                  Thank you for reaching out! We’ll get back to you shortly.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="shadow-lg p-4 rounded"
                  style={{
                    background: "#f8f9fa",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formInput.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formInput.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      value={formInput.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold"
                    style={{
                      background: "linear-gradient(to right, #6a11cb, #2575fc)",
                      border: "none",
                    }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-secondary fw-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="row g-4">
            {faqList.map((faq, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="card border-0 shadow"
                  style={{
                    borderRadius: "12px",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-primary">{faq.question}</h5>
                    <p className="card-text text-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Support;
