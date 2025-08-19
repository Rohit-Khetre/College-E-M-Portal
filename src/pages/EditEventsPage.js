// EditEventPage.jsx
// src/pages/EditEventPage.js
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import AdminSidebar from "../component/AdminSidebar";
import AdminNavbar from "../component/AdminNavbar";

const EditEventPage = () => {
  // Example existing event data (later load from backend)
  const [eventData, setEventData] = useState({
    title: "Codemania 2025",
    description: "A thrilling coding competition for all branches.",
    date: "2025-09-12",
    time: "10:00",
    location: "Main Auditorium",
    coverPhoto: null,
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // handle file upload
  const handleFileChange = (e) => {
    setEventData({ ...eventData, coverPhoto: e.target.files[0] });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Event:", eventData);
    alert("✅ Event updated successfully!");
    // later: call API to update event
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <AdminNavbar />
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="p-4 shadow-lg border-0 rounded-4">
                <h3
                  className="mb-4 text-center"
                  style={{ color: "var(--primary)" }}
                >
                  ✏ Edit Event
                </h3>

                <Form onSubmit={handleSubmit}>
                  {/* Event Title */}
                  <Form.Group className="mb-3">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={eventData.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Event Description */}
                  <Form.Group className="mb-3">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={eventData.description}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Date & Time */}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={eventData.date}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                          type="time"
                          name="time"
                          value={eventData.time}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Location */}
                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={eventData.location}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Cover Photo */}
                  <Form.Group className="mb-3">
                    <Form.Label>Cover Photo</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {eventData.coverPhoto && (
                      <small className="text-success">
                        Selected: {eventData.coverPhoto.name}
                      </small>
                    )}
                  </Form.Group>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "var(--primary)",
                        border: "none",
                        borderRadius: "12px",
                        padding: "10px",
                      }}
                    >
                      Update Event
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EditEventPage;
