// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer-custom mt-4 text-white py-4">
      <Container>
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h6>Contact</h6>
            <p className="footer-link">📧 contact@campuswave.com</p>
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h6>Team Infiniti</h6>
            <p>Ankita | Rohit | Vaibhav | Parth</p>
          </Col>
          <Col xs={12} md={4}>
            <h6>© 2025 CampusWave</h6>
            <div className="footer-logo-box">
              <img src={logo} alt="CampusWave Logo" height="40" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
