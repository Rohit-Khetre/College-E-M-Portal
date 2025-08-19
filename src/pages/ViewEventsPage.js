// ViewEventPage.jsx
import React from "react";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import SuperAdminSidebar from "../component/SuperAdminSidebar";
import SuperAdminNavbar from "../component/SuperAdminNavbar";

const ViewEventPage = () => {
  // Sample event data (normally fetched from backend)
  const eventDetails = {
    title: "Codemania 2025",
    description:
      "Codemania is a national level coding competition designed to challenge and inspire students to solve real-world problems using code.",
    date: "2025-09-12",
    time: "10:00 AM",
    location: "Main Auditorium",
    coverPhoto:
      "https://images.unsplash.com/photo-1581093588401-22b1f9d4f8e7?auto=format&fit=crop&w=900&q=80",
  };

  // Sample registered students data
  const registeredStudents = [
    { id: 1, name: "Ankita Shinde", email: "ankita123@gmail.com", status: "Confirmed" },
    { id: 2, name: "Rohit Khetre", email: "rohit.kh@gmail.com", status: "Pending" },
    { id: 3, name: "Vaibhav Take", email: "vaibhav.tk@gmail.com", status: "Confirmed" },
    { id: 4, name: "Parth Vandekar", email: "parth.vd@gmail.com", status: "Cancelled" },
  ];

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <SuperAdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <SuperAdminNavbar />

        <Container className="py-4">
          <Row>
            {/* Event Details */}
            <Col md={12} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4">
                <Row>
                  <Col md={5}>
                    <img
                      src={eventDetails.coverPhoto}
                      alt={eventDetails.title}
                      className="w-100 h-100 rounded-start-4 object-fit-cover"
                      style={{ minHeight: "300px" }}
                    />
                  </Col>
                  <Col md={7} className="p-4">
                    <h2 style={{ color: "var(--primary)" }}>{eventDetails.title}</h2>
                    <p className="text-muted">{eventDetails.description}</p>
                    <p>📅 <strong>Date:</strong> {eventDetails.date}</p>
                    <p>⏰ <strong>Time:</strong> {eventDetails.time}</p>
                    <p>📍 <strong>Location:</strong> {eventDetails.location}</p>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Registered Students */}
            <Col md={12}>
              <Card className="shadow-lg border-0 rounded-4 p-3">
                <h4 className="mb-3" style={{ color: "var(--primary)" }}>
                  👥 Registered Students
                </h4>
                <Table hover responsive className="align-middle">
                  <thead style={{ background: "var(--primary)", color: "#fff" }}>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredStudents.map((student, index) => (
                      <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                          <Badge
                            bg={
                              student.status === "Confirmed"
                                ? "success"
                                : student.status === "Pending"
                                ? "warning"
                                : "danger"
                            }
                            className="px-3 py-2 rounded-pill"
                          >
                            {student.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ViewEventPage;
