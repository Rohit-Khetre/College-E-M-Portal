import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "../style/StudentDashboard.css";
import StudentNavbar from "../component/StudentNavbar";
import StudentSidebar from "../component/StudentSidebar";

const myRegisteredEvents = [
  {
    id: "ai-workshop",
    name: "AI Workshop",
    date: "06-08-2025",
    status: "Registered",
    location: "Seminar Hall A",
  },
  {
    id: "hackathon-2025",
    name: "Hackathon 2025",
    date: "05-08-2025",
    status: "Registered",
    location: "Lab 204",
  },
  {
    id: "cyber-security-bootcamp",
    name: "Cyber Security Bootcamp",
    date: "06-08-2025",
    status: "Completed",
    location: "Seminar Hall A",
  },
  {
    id: "data-science-workshop",
    name: "Data Science Workshop",
    date: "04-08-2025",
    status: "Completed",
    location: "Seminar Hall A",
  },
  {
    id: "codemania-2025",
    name: "CodeMania 2025",
    date: "03-08-2025",
    status: "Completed",
    location: "Seminar Hall A",
  },
];

const MyEvents = () => {
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
          <h4 className="fw-bold mb-4">My Registered Events</h4>
          <Row>
            {myRegisteredEvents.map((event) => (
              <Col md={6} key={event.id}>
                <Card className="mb-3 p-3 shadow-sm">
                  <h6>{event.name}</h6>
                  <p className="mb-1">📅 {event.date}</p>
                  <p className="mb-1">📍 {event.location}</p>

                  {/* Bootstrap Badge instead of custom span */}
                  <Badge
                    bg={event.status === "Registered" ? "success" : "secondary"}
                  >
                    {event.status}
                  </Badge>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyEvents;
