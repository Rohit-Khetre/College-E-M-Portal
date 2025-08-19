
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentNavbar from "../component/StudentNavbar";
import StudentSidebar from "../component/StudentSidebar";
import "../style/StudentDashboard.css";


const upcomingEvents = [
  {
    name: "Hackathon 2025",
    img: "https://via.placeholder.com/400x200?text=Hackathon+2025",
  },
  {
    name: "Tech Fest",
    img: "https://via.placeholder.com/400x200?text=Tech+Fest",
  },
  {
    name: "Cultural Fest",
    img: "https://via.placeholder.com/400x200?text=Cultural+Fest",
  },
];


const notifications = [
  "Your registration for Hackathon 2025 is confirmed.",
  "Tech Fest schedule has been updated.",
  "Don’t miss the Cultural Fest this weekend!",
];

const StudentDashboard = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      {}
      <div className="d-none d-md-block">
        <StudentSidebar />
      </div>

      {}
      <div className="flex-grow-1">
        <StudentNavbar />

        <Container fluid className="py-4">
          <h4 className="fw-bold mb-4">Student Dashboard</h4>

          {}
          <Row className="g-3 mb-4">
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center shadow-sm p-3">
                <h6>Registered Events</h6>
                <h3>5</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center shadow-sm p-3">
                <h6>Total Events</h6>
                <h3>8</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center shadow-sm p-3">
                <h6>Attended Events</h6>
                <h3>3</h3>
              </Card>
            </Col>
          </Row>

          {}
          <Card className="p-3 shadow-sm border-0 mb-4">
            <h5 className="fw-bold">Upcoming Events</h5>
            <Row className="mt-3">
              {upcomingEvents.map((event, idx) => (
                <Col md={4} key={idx}>
                  <Card className="p-2 shadow-sm my-2 event-card">
                    <img
                      src={event.img}
                      alt={event.name}
                      className="img-fluid rounded event-cover d-block mx-auto"
                    />
                    <h6 className="mt-2">{event.name}</h6>
                    <Badge bg="success">Upcoming</Badge>
                    <Link
                      to={`/event/${event.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="btn btn-primary btn-sm mt-2"
                    >
                      View Details
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {}
          <Card className="p-3 shadow-sm border-0">
            <h5 className="fw-bold">Notifications</h5>
            <ul className="mt-3 ps-3">
              {notifications.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default StudentDashboard;
