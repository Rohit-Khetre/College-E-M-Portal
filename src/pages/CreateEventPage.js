// src/pages/CreateEventPage.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Save } from "lucide-react"; // ✅ Fixed import
import "../style/CreateEventPage.css";

// ✅ Import Navbar and Sidebar
import AdminNavbar from "../component/AdminNavbar";
import AdminSidebar from "../component/AdminSidebar";

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    status: "Upcoming",
    coverPhoto: null,
  });

  const [preview, setPreview] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "coverPhoto") {
      const file = files[0];
      setFormData({ ...formData, coverPhoto: file });

      // Generate preview
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Event Created:", formData);
    alert("✅ Event Created Successfully!");
    // Later: Call API with formData including image
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
        <Container fluid className="create-event-bg min-vh-100 py-4 px-3">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="shadow-sm border-0 rounded-4 p-4">
                <h3 className="fw-bold text-dark mb-4">Create New Event</h3>

                <Form onSubmit={handleSubmit}>
                  {/* Event Name */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter event name"
                      required
                    />
                  </Form.Group>

                  {/* Event Date */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Event Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Location */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter event location"
                      required
                    />
                  </Form.Group>

                  {/* Description */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Write event description..."
                      required
                    />
                  </Form.Group>

                  {/* Status */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Event Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option>Upcoming</option>
                      <option>Ongoing</option>
                      <option>Completed</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Cover Photo */}
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Cover Photo</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="coverPhoto"
                      onChange={handleChange}
                    />
                    {preview && (
                      <div className="mt-3 text-center">
                        <img
                          src={preview}
                          alt="Preview"
                          className="img-preview"
                        />
                      </div>
                    )}
                  </Form.Group>

                  {/* Submit Button */}
                  <div className="text-end">
                    <Button type="submit" className="btn-save">
                      <Save size={18} className="me-2" /> Save Event
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

export default CreateEventPage;
