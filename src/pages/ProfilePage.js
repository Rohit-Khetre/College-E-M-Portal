import React, { useState } from "react";
import { Card, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "../style/StudentDashboard.css";
import logo from "../assets/logo.png"
import ankita from "../assets/ankita.jpg";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState({
    name: "Ankita shinde",
    email: "ankita@example.com",
    institute: "Mit polytechnic, chh.sambhaji nagar",
    institutecode: "2291",
    branch: " Electronic And Computer Engineering",
    rollNo: "48",
    year: "Final Year",
    profilePic: ankita,
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setStudent({ ...student, profilePic: imageURL });
    }
  };

  const handleSave = () => {
    setShowModal(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-4">
      <h4 className="text-Primary mb-5">My Profile</h4>
      <Card className="shadow-sm p-5">
        <Row>
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
              className="mt-2 btn-primary"
              onClick={() => setShowModal(true)}
            >
              Edit Profile
            </Button>
          </Col>

          <Col md={8} className="mt-5">
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
        <Row>
            <img src={logo} alt="logo"
            style={{ width: 'auto', height: '100px' }}
            className="mx-auto my-5"
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
              <Form.Control
                type="text"
                name="institute"
                value={student.institute}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Institute Code</Form.Label>
              <Form.Control
                type="text"
                name="institutecode"
                value={student.institutecode}
                readOnly
              />
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
  );
};

export default ProfilePage;
