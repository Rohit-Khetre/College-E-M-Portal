import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Lottie from "lottie-react";
import loginAnim from "../assets/login.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const primary = "#6366F1";
  const accent = "#EC4899";
  const bg = "rgba(249, 251, 250, 0)";

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // redirect role wise
  const handleRedirect = (role) => {
    const r = role?.toLowerCase();
    if (r === "student") navigate("/student");
    else if (r === "admin") navigate("/Admindashboard");
    else if (r === "superadmin") navigate("/dashboard");
    else console.warn("Unknown role:", r);
  };

  // login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      alert("Login Success ✅");

      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      handleRedirect(res.data.user.role);
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // register
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);

      alert("Registration Success ✅");

      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      handleRedirect(res.data.user.role);
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container mt-2 py-5" style={{ backgroundColor: bg }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Row className="g-0">
                {/* Lottie Animation */}
                <Col
                  md={6}
                  className="d-none d-md-flex justify-content-center align-items-center p-3"
                >
                  <Lottie animationData={loginAnim} loop style={{ height: "300px" }} />
                </Col>

                {/* Form Section */}
                <Col xs={12} md={6} className="p-4">
                  <h4 className="mb-4 text-center" style={{ color: primary }}>
                    {isLogin ? "Login to CampusWave" : "Create Your Account"}
                  </h4>

                  {/* Mobile Animation */}
                  <div className="d-block d-md-none mb-4 text-center">
                    <Lottie animationData={loginAnim} loop style={{ height: "200px" }} />
                  </div>

                  <Form onSubmit={isLogin ? handleLogin : handleRegister}>
                    {isLogin ? (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          
                          <Form.Control
                            type="text"
                            name="instituteCode"
                            placeholder="Institute Code"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Select name="role" onChange={handleChange} required>
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                          </Form.Select>
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          className="w-100"
                          style={{ backgroundColor: primary, border: "none" }}
                          disabled={loading}
                        >
                          {loading ? "Please wait..." : "Login"}
                        </Button>

                        <div className="text-center mt-2">
                          <a
                            href="/forgot-password"
                            style={{ color: accent, fontSize: "0.9rem" }}
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <Row className="mb-3">
                          <Col>
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              onChange={handleChange}
                              required
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              type="text"
                              name="middleName"
                              placeholder="Middle Name"
                              onChange={handleChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              onChange={handleChange}
                              required
                            />
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="instituteName"
                            placeholder="Institute Name"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="instituteCode"
                            placeholder="Institute Code"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Select name="role" onChange={handleChange} required>
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                            <option value="superadmin">SuperAdmin</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            required
                          />
                        </Form.Group>

                        <Button
                          type="submit"
                          className="w-100"
                          style={{ backgroundColor: primary, border: "none" }}
                          disabled={loading}
                        >
                          {loading ? "Please wait..." : "Register"}
                        </Button>

                        <div className="text-center mt-4">
                          <p>Or sign up with</p>
                          <div className="d-flex justify-content-center gap-3">
                            <Button variant="outline-danger" className="d-flex align-items-center gap-2">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                                alt="Google"
                                width="20"
                              />
                              Google
                            </Button>
                            <Button variant="outline-primary" className="d-flex align-items-center gap-2">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                alt="Facebook"
                                width="20"
                              />
                              Facebook
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </Form>

                  {/* Toggle Login/Register */}
                  <div className="text-center mt-3">
                    <small>
                      {isLogin ? (
                        <>
                          Don't have an account?{" "}
                          <span
                            onClick={() => setIsLogin(false)}
                            style={{ color: accent, cursor: "pointer" }}
                          >
                            Register
                          </span>
                        </>
                      ) : (
                        <>
                          Already have an account?{" "}
                          <span
                            onClick={() => setIsLogin(true)}
                            style={{ color: accent, cursor: "pointer" }}
                          >
                            Login
                          </span>
                        </>
                      )}
                    </small>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthPage;