import React, { useState } from "react";
import {
  Container, Row, Col, Card, Button, Badge, Nav, Offcanvas
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import hack from '../assets/hackathon.jpg';
import cyber from '../assets/cyber.jpg';
import ai from '../assets/workshop.webp'
import '../style/StudentDashboard.css'


const StudentDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navItems = [
    { name: "Events", link: "/event" },
    { name: "My Events", link: "/my-events" },
    { name: "Results", link: "/results" },
    { name: "Profile", link: "/profile" },
  ];

  const quickStats = [
    { count: 5, label: "Registered Events" },
    { count: 8, label: "Total Events" },
    { count: 3, label: "Attended Events" },
  ];

  const upcomingEvents = [
    { name: "Hackathon 2025", img: hack },
    { name: "AI Workshop", img: ai },
    { name: "Cyber Security Bootcamp", img: cyber },
  ];

  const notifications = [
    "📢 New event 'AI Workshop' registration is now open.",
    "🎉 You attended 'Web Dev Bootcamp'. Check Results for certificate.",
    "⚡ 'Hackathon 2025' has limited seats. Register soon!",
  ];

  return (
    <Container fluid className="bg-light min-vh-100 text-dark">
      
      {/* Mobile Header */}
      <div className="d-flex d-md-none justify-content-between align-items-center p-2 shadow-sm bg-white">
        <Button variant="outline-primary" onClick={() => setShowSidebar(true)}>
          ☰
        </Button>
      </div>

      {/* Offcanvas for Mobile */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)}>
        <Offcanvas.Header closeButton>
        { /* <Offcanvas.Title className="text-primary">CampusWave</Offcanvas.Title>*/}
           <img src={logo} alt="CampusWave" style={{ width: 120, height: 50 }} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                as={Link}
                to={item.link}
                className="mb-2 nav-hover mt-4 text-dark"
                onClick={() => setShowSidebar(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="light" className="mt-4 text-danger">
              Logout
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Row>
        {/* Sidebar */}
        <Col md={2} className="sidebar shadow-sm p-3 d-none d-md-block">
          <div className="mb-4 ">
            <img src={logo} alt="CampusWave" style={{ width: 120, height: 50 }} />
          </div>
          <Nav defaultActiveKey="/student-dashboard" className="flex-column">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                as={Link}
                to={item.link}
                className="mb-2 nav-hover  mt-4 text-dark"
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="light" className="mt-4 text-danger">
              Logout
            </Button>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h4 className="mb-4 text-primary">Student Dashboard</h4>

          {/* Quick Stats */}
          <Row className="mb-4">
            {quickStats.map((stat, idx) => (
              <Col key={idx} xs={12} sm={6} md={4}>
                <Card className="text-center shadow-sm border-0 my-1 stat-card">
                  <h2>{stat.count}</h2>
                  <p className="mb-0">{stat.label}</p>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Upcoming Events */}
          <Card className="p-3 shadow-sm border-0 mb-4">
            <h5>Upcoming Events</h5>
            <Row className="mt-3">
              {upcomingEvents.map((event, idx) => (
                <Col md={4} key={idx}>
                  <Card className="p-2 shadow-sm my-2 event-card">
                    <img src={event.img} alt={event.name} className="img-fluid rounded event-cover d-block mx-auto" />
                    <h6 className="mt-2">{event.name}</h6>
                    <Badge bg="success">Upcoming</Badge>
                    <Link to={`/event/${event.name.toLowerCase().replace(/\s+/g, "-")}`} className="btn btn-primary btn-sm mt-2">
                       View Details
                    </Link>

                    {/* <Button variant="primary" size="sm" className="mt-2">
                      View Details
                    </Button> */}
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Notifications */}
          <Card className="p-3 shadow-sm border-0">
            <h5>Notifications</h5>
            <ul className="mt-3 ps-3">
              {notifications.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentDashboard;