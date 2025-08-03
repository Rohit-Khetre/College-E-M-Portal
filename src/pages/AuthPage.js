import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Lottie from 'lottie-react';
import loginAnim from '../assets/login.json';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const primary = '#6366F1';
  const accent = '#EC4899';
   const bg = 'rgba(249, 251, 250, 0)';

  return (
    <div className="auth-container mt-2 py-5" style={{ backgroundColor: bg }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Row className="g-0">

                {/* Lottie Animation */}
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-3">
                  <Lottie animationData={loginAnim} loop style={{ height: '300px' }} />
                </Col>

                {/* Form Section */}
                <Col xs={12} md={6} className="p-4">
                  <h4 className="mb-4 text-center" style={{ color: primary }}>
                    {isLogin ? 'Login to CampusWave' : 'Create Your Account'}
                  </h4>

                  {/* Mobile Animation */}
                  <div className="d-block d-md-none mb-4 text-center">
                    <Lottie animationData={loginAnim} loop style={{ height: '200px' }} />
                  </div>

                  <Form>
                    {isLogin ? (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Institute Code" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Select required>
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
                          style={{ backgroundColor: primary, border: 'none' }}
                        >
                          Login
                        </Button>

                        <div className="text-center mt-2">
                          <a href="/forgot-password" style={{ color: accent, fontSize: '0.9rem' }}>
                            Forgot Password?
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <Row className="mb-3">
                          <Col>
                            <Form.Control type="text" placeholder="First Name" required />
                          </Col>
                          <Col>
                            <Form.Control type="text" placeholder="Middle Name" />
                          </Col>
                          <Col>
                            <Form.Control type="text" placeholder="Last Name" required />
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Institute Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Institute Code" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Select required>
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control type="email" placeholder="Email Address" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control type="password" placeholder="Create Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control type="password" placeholder="Confirm Password" required />
                        </Form.Group>

                        <Button type="submit" className="w-100" style={{ backgroundColor: primary, border: 'none' }}>
                          Register
                        </Button>

                        <div className="text-center mt-4">
                          <p>Or sign up with</p>
                          <div className="d-flex justify-content-center gap-3">
                            <Button variant="outline-danger" className="d-flex align-items-center gap-2">
                              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" width="20" />
                              Google
                            </Button>
                            <Button variant="outline-primary" className="d-flex align-items-center gap-2">
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" />
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
                          Don't have an account?{' '}
                          <span
                            onClick={() => setIsLogin(false)}
                            style={{ color: accent, cursor: 'pointer' }}
                          >
                            Register
                          </span>
                        </>
                      ) : (
                        <>
                          Already have an account?{' '}
                          <span
                            onClick={() => setIsLogin(true)}
                            style={{ color: accent, cursor: 'pointer' }}
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
