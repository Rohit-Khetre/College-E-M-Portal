// src/pages/Events.js
import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/StudentDashboard.css";
import StudentNavbar from "../component/StudentNavbar";
import StudentSidebar from "../component/StudentSidebar";

// Import event images
import victory from "../assets/victory.png";
import hackathon from "../assets/hackathon.jpg";
import cyber from "../assets/cyber.jpg";
import ai from "../assets/workshop.webp";

const events = [
  {
    id: "codemania-2025",
    name: "CodeMania 2025",
    date: "03-08-2025",
    description: "Annual coding contest for all branches.",
    location: "Seminar Hall A",
    image: victory,
  },
  {
    id: "data-science-workshop-2025",
    name: "Data Science Workshop",
    date: "04-08-2025",
    description: "Hands-on workshop with real datasets.",
    location: "Seminar Hall A",
    image: victory,
  },
  {
    id: "hackathon-2025",
    name: "Hackathon 2025",
    date: "05-08-2025",
    description: "Annual coding contest for all branches.",
    location: "Seminar Hall A",
    image: hackathon,
  },
  {
    id: "ai-workshop-2025",
    name: "AI Workshop",
    date: "06-08-2025",
    description: "Generative AI workshop",
    location: "Seminar Hall A",
    image: ai,
  },
  {
    id: "cyber-security-bootcamp-2025",
    name: "Cyber Security Bootcamp",
    date: "06-08-2025",
    description: "Cyber Security hands-on bootcamp",
    location: "Seminar Hall A",
    image: cyber,
  },
];

const Events = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <StudentNavbar />

        <Container className="p-4">
          <h4 className="fw-bold mb-4">All Events</h4>
          <Row>
            {events.map((event, idx) => (
              // <Col md={4} key={event.id}>
              //   <Card className="p-3 mb-4 shadow-sm event-card text-center">
              //     <img
              //       src={event.image}
              //       alt={event.name}
              //       className="event-cover mx-auto"
              //     />
              //     <h6 className="mt-3">{event.name}</h6>
              //     <p>📅 {event.date}</p>
              //     <p>📍 {event.location}</p>
              //     <p>{event.description}</p>
              //     <Link
              //       to={`/register/${event.id}`}
              //       className="btn btn-primary btn-sm"
              //     >
              //       Register
              //     </Link>
              //   </Card>
              // </Col>
              <Col md={4} key={idx}>
                  <Card className="p-2 shadow-sm my-2 event-card">
                    <img
                      src={event.image}
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
        </Container>
      </div>
    </div>
  );
};

export default Events;
