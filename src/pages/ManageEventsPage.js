// ManageEventsPage.js
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";
import "../style/AdminDashboard.css";
import AdminNavbar from "../component/AdminNavbar";
import AdminSidebar from "../component/AdminSidebar";
import { useNavigate } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    name: "CodeMania 2025",
    date: "25 Aug 2025",
    location: "Auditorium Hall",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "AI Bootcamp",
    date: "5 Sep 2025",
    location: "Lab 2, Block C",
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Cyber Security Workshop",
    date: "10 July 2025",
    location: "Seminar Hall",
    status: "Completed",
  },
];

const ManageEventsPage = () => {
    const navigate = useNavigate();
  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <AdminNavbar />

        <Container fluid className="py-4 px-3 admin-bg min-vh-100">
          {/* Header with Create Event Button */}
          <Row className="mb-4 align-items-center">
            <Col>
              <h2 className="fw-bold text-theme">Manage Events</h2>
            </Col>
            <Col xs="auto">
            
              <Button className="d-flex align-items-center btn-accent shadow" onClick={() => navigate("/create-event")}>
                
                <PlusCircle className="me-2" size={18} /> Create Event
              </Button>
            </Col>
          </Row>
          

          {/* Event Cards */}
          <Row>
            {eventsData.map((event) => (
              <Col md={6} lg={4} key={event.id} className="mb-4">
                <Card className="shadow-lg rounded-3 border-0 event-card h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary-theme">
                      {event.name}
                    </Card.Title>
                    <Card.Text className="mb-2 text-muted">
                      <strong>Date:</strong> {event.date}
                      <br />
                      <strong>Location:</strong> {event.location}
                    </Card.Text>
                    <Badge
                      bg={
                        event.status === "Upcoming"
                          ? "warning"
                          : event.status === "Ongoing"
                          ? "success"
                          : "secondary"
                      }
                      className="mb-3"
                    >
                      {event.status}
                    </Badge>

                    <div className="d-flex justify-content-between">
                      <Button
                        size="sm"
                        variant="outline-primary"
                        className="rounded-pill"onClick={() => navigate("/view-event")}
                      >
                        <Eye size={16} className="me-1" /> View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-success"
                        className="rounded-pill"onClick={() => navigate("/edit-event")}
                      >
                        <Edit size={16} className="me-1" /> Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        className="rounded-pill"
                      >
                        <Trash2 size={16} className="me-1" /> Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ManageEventsPage;
