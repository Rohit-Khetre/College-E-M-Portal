// UploadResultPage.js
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import { Plus, Trash2 } from "lucide-react";
import AdminSidebar from "../component/AdminSidebar";
import AdminNavbar from "../component/AdminNavbar";
import "../style/SuperAdminDashboard.css";

const UploadResultPage = () => {
  const [event, setEvent] = useState("");
  const [rank, setRank] = useState("");
  const [studentName, setStudentName] = useState("");
  const [results, setResults] = useState([]);

  const handleAddResult = () => {
    if (event && rank && studentName) {
      const newResult = { event, rank, studentName };
      setResults([...results, newResult]);
      setRank("");
      setStudentName("");
    }
  };

  const handleDelete = (index) => {
    const updated = [...results];
    updated.splice(index, 1);
    setResults(updated);
  };

  const handleUpload = () => {
    alert("✅ Results uploaded successfully!");
    // TODO: Add API POST call here
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{ background: "#F9FAFB", minHeight: "100vh" }}
      >
        <AdminNavbar />

        <Container fluid className="super-admin-bg min-vh-100 py-4 px-3">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Body>
                  <h4 className="fw-bold mb-4" style={{ color: "#0a0a0aff" }}>
                    Upload Event Results
                  </h4>

                  {/* Form */}
                  <Row className="g-3 align-items-end">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Select Event</Form.Label>
                        <Form.Select
                          value={event}
                          onChange={(e) => setEvent(e.target.value)}
                        >
                          <option value="">-- Select Event --</option>
                          <option value="Codemania 2025">Codemania 2025</option>
                          <option value="Data Science Workshop">
                            Data Science Workshop
                          </option>
                          <option value="Cyber Security Bootcamp">
                            Cyber Security Bootcamp
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Rank</Form.Label>
                        <Form.Select
                          value={rank}
                          onChange={(e) => setRank(e.target.value)}
                        >
                          <option value="">-- Rank --</option>
                          <option value="1st">1st</option>
                          <option value="2nd">2nd</option>
                          <option value="3rd">3rd</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Student Name"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={2}>
                      <Button
                        onClick={handleAddResult}
                        className="w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: "#EC4899",
                          border: "none",
                          borderRadius: "12px",
                        }}
                      >
                        <Plus size={18} /> Add
                      </Button>
                    </Col>
                  </Row>

                  {/* Results Table */}
                  {results.length > 0 && (
                    <div className="mt-5">
                      <h5 className="fw-bold mb-3">Results Preview</h5>
                      <Table bordered hover responsive className="align-middle">
                        <thead
                          style={{ backgroundColor: "#6366F1", color: "#fff" }}
                        >
                          <tr>
                            <th>#</th>
                            <th>Event</th>
                            <th>Rank</th>
                            <th>Student Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.map((res, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{res.event}</td>
                              <td>{res.rank}</td>
                              <td>{res.studentName}</td>
                              <td>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleDelete(index)}
                                  className="d-flex align-items-center gap-1"
                                >
                                  <Trash2 size={16} /> Delete
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>

                      <div className="text-end">
                        <Button
                          onClick={handleUpload}
                          style={{
                            backgroundColor: "#22C55E",
                            border: "none",
                            borderRadius: "12px",
                          }}
                          className="px-4 py-2 fw-bold"
                        >
                          Upload Result
                        </Button>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default UploadResultPage;
