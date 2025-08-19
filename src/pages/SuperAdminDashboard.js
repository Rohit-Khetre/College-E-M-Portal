  import React from "react";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import SuperAdminNavbar from "../component/SuperAdminNavbar";
import SuperAdminSidebar from "../component/SuperAdminSidebar";
import "../style/SuperAdminDashboard.css";

const SuperAdminDashboard = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      {}
      <div className="d-none d-md-block">
        <SuperAdminSidebar />
      </div>

      {}
      <div className="flex-grow-1">
        <SuperAdminNavbar /> {}

        <Container fluid className="py-4">
          <h4 className="fw-bold mb-4">Super Admin Panel</h4>

          {}
          <Row className="g-3">
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center">
                <h6>Total Users</h6>
                <h3>1,250</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center">
                <h6>Total Events</h6>
                <h3>48</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center">
                <h6>Active Registrations</h6>
                <h3>320</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="stat-card text-center">
                <h6>Pending Approvals</h6>
                <h3>15</h3>
              </Card>
            </Col>
          </Row>

          {}
          <Card className="mt-4">
            <Card.Header className="fw-bold">Recent Activities</Card.Header>
            <Card.Body className="p-0">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Activity</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>New Event Added: Hackathon 2025</td>
                    <td>Admin</td>
                    <td>13 Aug 2025</td>
                    <td><Badge bg="success">Completed</Badge></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User Registered for Data Science Workshop</td>
                    <td>John Doe</td>
                    <td>12 Aug 2025</td>
                    <td><Badge bg="info">In Progress</Badge></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Event Deleted: AI Bootcamp</td>
                    <td>Super Admin</td>
                    <td>11 Aug 2025</td>
                    <td><Badge bg="danger">Removed</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default SuperAdminDashboard; 

