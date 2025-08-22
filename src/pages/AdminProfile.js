// src/pages/ProfilePage.js
import React, { useState } from "react";
import { Card, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "../style/StudentDashboard.css";
import logo from "../assets/logo.png";
// ✅ Import missing components
import AdminNavbar from "../component/AdminNavbar";
import AdminSidebar from "../component/AdminSidebar";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    email: "",
    institute: "",
    institutecode: "",
    branch: "",
    rollNo: "",
    year: "",
    profilePic: ""
  });

  // Handle text input changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle profile picture change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setStudent({ ...student, profilePic: imageURL });
    }
  };

  // Save Profile
  const handleSave = () => {
    setShowModal(false);
    alert("✅ Profile updated successfully!");
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
        <div className="p-4">
          <h4 className="fw-bold mb-4">My Profile</h4>

          <Card className="shadow-sm p-4">
            <Row>
              {/* Profile Info Left */}
              <Col md={4} className="text-center">
                <img
                  src={student.profilePic}
                  alt="Profile"
                  className="rounded-circle"
                  width="150"
                  height="150"
                  style={{ objectFit: "cover" }}
                />
                <h5 className="mt-3">{student.name}</h5>
                <p className="text-muted">{student.email}</p>
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => setShowModal(true)}
                >
                  Edit Profile
                </Button>
              </Col>

              {/* Profile Details Right */}
              <Col md={8} className="mt-4">
                <Row className="mb-3">
                  <Col md={6}><strong>Institute:</strong></Col>
                  <Col md={6}>{student.institute}</Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}><strong>Institute Code:</strong></Col>
                  <Col md={6}>{student.institutecode}</Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}><strong>Branch:</strong></Col>
                  <Col md={6}>{student.branch}</Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}><strong>Roll No:</strong></Col>
                  <Col md={6}>{student.rollNo}</Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}><strong>Year:</strong></Col>
                  <Col md={6}>{student.year}</Col>
                </Row>
              </Col>
            </Row>

            {/* Logo */}
            <Row>
              <img
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "100px" }}
                className="mx-auto my-4"
              />
            </Row>
          </Card>

          {/* Edit Profile Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {/* Profile Picture Upload */}
                <Form.Group className="mb-3 text-center">
                  <img
                    src={student.profilePic}
                    alt="Preview"
                    className="rounded-circle mb-2"
                    width="100"
                    height="100"
                    style={{ objectFit: "cover" }}
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <Form.Text muted>Upload a new profile picture</Form.Text>
                </Form.Group>

                {/* Editable Fields */}
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Institute</Form.Label>
                  <Form.Control type="text" value={student.institute} readOnly />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Institute Code</Form.Label>
                  <Form.Control type="text" value={student.institutecode} readOnly />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control
                    type="text"
                    name="branch"
                    value={student.branch}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Roll No</Form.Label>
                  <Form.Control
                    type="text"
                    name="rollNo"
                    value={student.rollNo}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    name="year"
                    value={student.year}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
