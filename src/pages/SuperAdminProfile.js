// src/pages/ProfilePage.js
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import "../style/SuperAdminDashboard.css";
import pic from "../assets/profilepic.png";
import logo from "../assets/logo.png";
import SuperAdminSidebar from "../component/SuperAdminSidebar";
import SuperAdminNavbar from "../component/SuperAdminNavbar";

const SuperAdminProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile data on load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("No token found. Please login again!");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setStudent(res.data.user);
      } catch (err) {
        console.error("Error fetching profile:", err.response?.data || err.message);
        alert("Error fetching profile data. Please login again!");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle change
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setStudent({ ...student, profilePic: imageURL });
    }
  };

  // Save profile
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/auth/me", student, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err.response?.data || err.message);
      alert("Failed to update profile!");
    } finally {
      setShowModal(false);
    }
  };

  if (loading) return <p className="p-4">Loading profile...</p>;
  if (!student) return <p className="p-4 text-danger">No profile data found.</p>;

  return (
         <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <SuperAdminSidebar/>
      </div>

      {/* Main Section */}
      <div className="flex-grow-1">
        <SuperAdminNavbar/>

        <div className="p-4">
          <h4 className="fw-bold mb-4">My Profile</h4>
          <Card className="shadow-sm p-5 rounded-4 border-0">
            <Row>
              {/* Profile Left Side */}
              <Col md={4} className="text-center">
                <img
                  src={student.profilePic || pic}
                  alt="Profile"
                  className="rounded-circle shadow-sm"
                  width="150"
                  height="150"
                  style={{ objectFit: "cover" }}
                />
                <h5 className="mt-3">{student.firstName} {student.lastName}</h5>
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

              {/* Profile Right Side */}
              <Col md={8} className="mt-5">
                <Row className="mb-3">
                  <Col md={6}><strong>Institute:</strong></Col>
                  <Col md={6}>{student.instituteName}</Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}><strong>Institute Code:</strong></Col>
                  <Col md={6}>{student.instituteCode}</Col>
                </Row>
                 <Row className="mb-3">
                  <Col md={6}><strong>Post:</strong></Col>
                  <Col md={6}>{student.post || "N/A"}</Col>
                </Row>
                {/*
                <Row className="mb-3">
                  <Col md={6}><strong>Roll No:</strong></Col>
                  <Col md={6}>{student.rollNo || "N/A"}</Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}><strong>Year:</strong></Col>
                  <Col md={6}>{student.year || "N/A"}</Col>
                </Row> */}
              </Col>
            </Row>

            {/* Logo */}
            <Row>
              <img
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "100px" }}
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
                    src={student.profilePic || "https://via.placeholder.com/100"}
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
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={student.firstName || ""}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={student.lastName || ""}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Post</Form.Label>
                  <Form.Select
                    name="post"
                    value={student.post || "Please Select your Post"}
                    onChange={handleChange}
                  >
                    <option value="">--Select Post--</option>
                    <option value="Principal">Principal</option>
                    <option value="Voice Principal">Voice Principal</option>
                    <option value="Professor">Professor</option>
                  </Form.Select>
                </Form.Group>

                {/* <Form.Group className="mb-3">
                  <Form.Label>Roll No</Form.Label>
                  <Form.Control
                    type="text"
                    name="rollNo"
                    value={student.rollNo || ""}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    name="year"
                    value={student.year || ""}
                    onChange={handleChange}
                  />
                </Form.Group> */}
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

export default SuperAdminProfile;
