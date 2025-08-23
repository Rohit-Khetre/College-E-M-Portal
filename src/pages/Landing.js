import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


import MyNavbar from '../component/Navbar';
import Footer from '../component/Footer';
import AnimatedCharacter from '../component/CharacterAnimation';
import '../style/Landing.css';

import bell from '../assets/bell.png';
import cal from '../assets/cal.png';
import shield from '../assets/shield.png';
import muc from '../assets/muc.png';

const features = [
  { img: muc, title: "Multi-College Support", desc: "Manage events across colleges." },
  { img: shield, title: "Role-Based Access", desc: "Custom access for students/admins." },
  { img: cal, title: "Event Scheduling", desc: "Create and manage events easily." },
  { img: bell, title: "Real-Time Announcements", desc: "Instant notifications to users." }
];

const cards = [
  { img: cal, title: "Create Events Easily", desc: "Setup and customize events quickly." },
  { img: muc, title: "Register & Participate", desc: "Simple event registration for students." },
  { img: shield, title: "Admin Controlled Access", desc: "Tools for admins to manage events." }
];

const steps = [
  "Register your college",
  "Create/Join events",
  "Manage & track"
];

function Landing() {
  return (
    <>
      <MyNavbar />

      {/* Hero Section */}
      <section className="hero-section-wrapper mt-5 bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Welcome to <span className="text-Primary">CampusWave</span>

              </h1>
              <p className="lead text-secondary mb-4">
                Your ultimate platform for managing campus events with ease and elegance.
              </p>
              <Button
                as={Link}
                to="/auth"
                style={{
                  border: '2px solid #EC4899',
                  color: '#EC4899',
                  backgroundColor: 'transparent',
                }}
                className="fw-semibold"
              >
                Get Started
              </Button>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <AnimatedCharacter />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="features text-center py-5">
        <Container>
          <h3 className="mb-5">Features</h3>
          <Row className="g-4">
            {features.map((item, index) => (
              <Col md={3} xs={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={item.img} alt={item.title} height={50} className="mb-2" />
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Cards Section */}
      <section className="text-center py-5">
        <Container>
          <Row className="g-4">
            {cards.map((card, index) => (
              <Col md={4} key={index}>
                <Card className="shadow-sm p-3 h-100">
                  <Card.Body>
                    <img src={card.img} alt={card.title} height={50} />
                    <h5 className="mt-4">{card.title}</h5>
                    <p>{card.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How it Works */}
      <section className="how-it-works text-center py-5 bg-light">
        <Container>
          <h4 className="mb-5">How It Works</h4>
          <Row className="justify-content-center align-items-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Col xs={12} md={3} className="mb-4 mb-md-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className="step-number mx-auto mb-2"
                  >
                    {index + 1}
                  </motion.div>
                  <p className="fw-medium">{step}</p>
                </Col>
                {index < steps.length - 1 && (
                  <Col xs="auto" className="d-none d-md-block">
                    <h3 className="text-muted">➜</h3>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </section>









       {/* <section className="bg-dark text-white py-5 mt-5">
        <Container>
          <h4 className="mb-4">🔐 Dashboard Preview (For Mam)</h4>
          <p className="mb-4">Click to walkthrough each dashboard automatically</p>
          <Row className="g-3 justify-content-center">
            <Col xs={12} md={4}>
              <Button variant="light"
                 as={Link}
                to="/student"
                className="w-100">
                🎓 Student Dashboard
              </Button>
            </Col>
            <Col xs={12} md={4}>
              <Button variant="light" as={Link} to="/AdminDashboard" className="w-100" >
                🛠 Admin Dashboard 
              </Button>
            </Col>
           <Col xs={12} md={4}>
              <Button variant="light"
                 as={Link}
                to="/dashboard"
                className="w-100">
                🎓 Super admin
        </Button>

            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <div> 
         <Button
                as={Link}
                to="/loading"
                style={{
                  border: '2px solid #EC4899',
                  color: '#EC4899',
                  backgroundColor: 'transparent',
                }}
                className="fw-semibold"
              >
                Loader
              </Button>
              <Button
                as={Link}
                to="/unauthorized"
                style={{
                  border: '2px solid #EC4899',
                  color: '#EC4899',
                  backgroundColor: 'transparent',
                }}
                className="fw-semibold"
              >
                UN page
              </Button>
              <Button
                as={Link}
                to="/notfoundpage"
                style={{
                  border: '2px solid #EC4899',
                  color: '#EC4899',
                  backgroundColor: 'transparent',
                }}
                className="fw-semibold"
              >
                NF pages 
              </Button>
      </div>  */}

      <Footer />
    </>
  );
}

export default Landing;
