import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AdminNavbar from "../component/AdminNavbar";
import AdminSidebar from "../component/AdminSidebar";
import "../style/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar (Visible on Desktop) */}
      <div className="d-none d-md-block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <AdminNavbar />

        <Container fluid className="py-4">
          <h4 className="fw-bold mb-4">Admin Panel</h4>

          {/* Stats Section */}
          <Row className="g-3">
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center shadow-sm p-3">
                <h6>Registered Students</h6>
                <h3 className="fw-bold">120</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center shadow-sm p-3">
                <h6>Total Events</h6>
                <h3 className="fw-bold">35</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center shadow-sm p-3">
                <h6>Pending Approvals</h6>
                <h3 className="fw-bold">15</h3>
              </Card>
            </Col>
          </Row>

          {/* Recent Access */}
          <Card className="mt-4 shadow-sm border-0">
            <Card.Header className="fw-bold">Recent Access</Card.Header>
            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Adree Access 2023</strong>
                  <p className="mb-0 text-muted">2022-09-10</p>
                </Col>
                <Col md={6} className="text-end text-muted">
                  Participated in Upcoming Events
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <strong>Beth Access 2024</strong>
                  <p className="mb-0 text-muted">2024-04-10</p>
                </Col>
                <Col md={6} className="text-end text-muted">
                  Results Uploaded & Verified
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Notifications */}
          <Card className="mt-4 shadow-sm border-0">
            <Card.Header className="fw-bold">Notifications</Card.Header>
            <Card.Body>
              <ul className="mb-0">
                <li>✅ 5 new users registered today.</li>
                <li>🚀 “Startup Meetup” received excellent feedback.</li>
                <li>⚠ 2 events awaiting admin approval.</li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
