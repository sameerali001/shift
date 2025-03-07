import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util"; // Ensure these functions are defined elsewhere
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = loginData;

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !password) {
      handleError("All fields are required");
      return false;
    }

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
    const { email, password } = loginData;

    try {
      const response = await fetch("http://localhost:8080/auth/login", { // Fixed typo in URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send login data as JSON
      });

      const data = await response.json();

      if (response.ok) {
        const { success, message, token, name } = data;

        if (success) {
          handleSuccess(message);
          localStorage.setItem("token", token);
          localStorage.setItem("loggedinUser", name);

          // No need to reload the page, React Router handles it
          navigate("/home");
        } else {
          handleError(data?.error?.details?.[0]?.message || "Something went wrong");
        }
      } else {
        handleError(data.message || "Something went wrong");
      }
    } catch (err) {
      handleError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-3">
            <small>Sign in with</small>
          </div>
          <div className="btn-wrapper text-center">
            <Button
              className="btn-neutral btn-icon"
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
            <small>Or sign in with credentials</small>
          </div>
          <Form role="form" onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
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
                  value={loginData.email}
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
                  value={loginData.password}
                />
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id="customCheckLogin"
                type="checkbox"
              />
              <label className="custom-control-label" htmlFor="customCheckLogin">
                <span className="text-muted">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Sign in"}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <Link className="text-light" to="/auth/forgot-password">
            <small>Forgot password?</small>
          </Link>
        </Col>
        <Col className="text-right" xs="6">
          <Link className="text-light" to="/auth/signup">
            <small>Create new account</small>
          </Link>
        </Col>
      </Row>
      <ToastContainer />
    </Col>
  );
};

export default Login;
