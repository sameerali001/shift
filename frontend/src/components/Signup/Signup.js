import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, password } = formData;
    // Basic validation checks
    if (!name || !email || !password) {
      handleError("All fields are required");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      handleError("Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      handleError("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true); // Set loading state to true while making the request

    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        handleError(error?.details?.[0]?.message || message || "Signup failed");
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <Col lg="6" md="8">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-4">
            <small>Sign up with</small>
          </div>
          <div className="text-center">
            <Button
              className="btn-neutral btn-icon mr-4"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon">
                <img
                  alt="..."
                  src={require("../../assets/img/icons/common/github.svg").default}
                />
              </span>
              <span className="btn-inner--text">Github</span>
            </Button>
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon">
                <img
                  alt="..."
                  src={require("../../assets/img/icons/common/google.svg").default}
                />
              </span>
              <span className="btn-inner--text">Google</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or sign up with credentials</small>
          </div>
          <Form role="form" onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="new-email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </InputGroup>
            </FormGroup>
            <div className="text-muted font-italic">
              <small>
                password strength:{" "}
                <span className="text-success font-weight-700">strong</span>
              </small>
            </div>
            <Row className="my-4">
              <Col xs="12">
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckRegister"
                    type="checkbox"
                  />
                  <label className="custom-control-label" htmlFor="customCheckRegister">
                    <span className="text-muted">
                      I agree with the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
            <div className="text-center">
              <Button className="mt-4" color="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Create account"}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col className="text-center">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </Col>
      </Row>
      <ToastContainer />
    </Col>
  );
};

export default Signup;
