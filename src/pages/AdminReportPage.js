// src/pages/ReportPage.js
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable";

// ✅ Import Sidebar & Navbar
import AdminSidebar from "../component/AdminSidebar";
import AdminNavbar from "../component/AdminNavbar";

import "../style/AdminDashboard.css";

const COLORS = ["#6366F1", "#EC4899", "#22C55E", "#F59E0B"];

const sampleEvents = [
  {
    id: 1,
    name: "Codemania 2025",
    date: "12 Aug 2025",
    venue: "Auditorium Hall",
    description: "Inter-college coding competition.",
    status: "Completed",
    registered: [
      { id: 1, name: "Rohit Khetre", email: "rohit@mail.com" },
      { id: 2, name: "Ankita Shinde", email: "ankita@mail.com" },
      { id: 3, name: "Vaibhav Take", email: "vaibhav@mail.com" },
    ],
    results: [
      { rank: 1, name: "Rohit Khetre" },
      { rank: 2, name: "Ankita Shinde" },
      { rank: 3, name: "Vaibhav Take" },
    ],
  },
  {
    id: 2,
    name: "Data Science Workshop",
    date: "25 Aug 2025",
    venue: "Lab 302",
    description: "Hands-on workshop on AI & ML.",
    status: "Ongoing",
    registered: [
      { id: 1, name: "Parth Vandekar", email: "parth@mail.com" },
      { id: 2, name: "Rohit Khetre", email: "rohit@mail.com" },
    ],
    results: [],
  },
];

const ReportPage = () => {
  const [selectedEvent, setSelectedEvent] = useState("All Events");

  // 📌 PDF Download
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("📊 Admin Report", 14, 20);

    if (selectedEvent === "All Events") {
      sampleEvents.forEach((event, index) => {
        doc.setFontSize(14);
        doc.text(`${index + 1}. ${event.name}`, 14, 30 + index * 10);
      });
    } else {
      const event = sampleEvents.find((e) => e.name === selectedEvent);
      if (!event) return;

      doc.text(`Event: ${event.name}`, 14, 30);
      doc.text(`Date: ${event.date}`, 14, 40);
      doc.text(`Venue: ${event.venue}`, 14, 50);
      doc.text(`Status: ${event.status}`, 14, 60);

      doc.autoTable({
        startY: 70,
        head: [["ID", "Name", "Email"]],
        body: event.registered.map((s) => [s.id, s.name, s.email]),
      });

      if (event.results.length > 0) {
        doc.autoTable({
          startY: doc.lastAutoTable.finalY + 10,
          head: [["Rank", "Name"]],
          body: event.results.map((r) => [r.rank, r.name]),
        });
      }
    }

    doc.save("AdminReport.pdf");
  };

  // 📊 Chart Data
  const renderPieData = () => {
    if (selectedEvent === "All Events") {
      return [
        { name: "Total Events", value: sampleEvents.length },
        {
          name: "Completed",
          value: sampleEvents.filter((e) => e.status === "Completed").length,
        },
        {
          name: "Ongoing",
          value: sampleEvents.filter((e) => e.status === "Ongoing").length,
        },
      ];
    } else {
      const event = sampleEvents.find((e) => e.name === selectedEvent);
      return [
        { name: "Registered", value: event.registered.length },
        { name: "Results Declared", value: event.results.length },
      ];
    }
  };

  const currentEvent =
    selectedEvent !== "All Events"
      ? sampleEvents.find((e) => e.name === selectedEvent)
      : null;

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <AdminNavbar />
        <Container fluid className="py-4 super-admin-bg min-vh-100">
          <h4 className="fw-bold mb-4">📊 Admin Reports</h4>

          {/* 🔽 Dropdown + Download */}
          <Row className="mb-4">
            <Col md={4}>
              <DropdownButton
                variant="primary"
                title={`Select Event: ${selectedEvent}`}
                onSelect={(e) => setSelectedEvent(e)}
              >
                <Dropdown.Item eventKey="All Events">All Events</Dropdown.Item>
                {sampleEvents.map((event) => (
                  <Dropdown.Item key={event.id} eventKey={event.name}>
                    {event.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
            <Col md={8} className="text-end">
              <Button variant="success" onClick={handleDownload}>
                ⬇ Download Report (PDF)
              </Button>
            </Col>
          </Row>

          {/* 📊 Summary & Details */}
          <Row>
            <Col md={6}>
              <Card className="shadow-sm border-0 mb-4">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Event Summary</h5>
                  <PieChart width={300} height={250}>
                    <Pie
                      data={renderPieData()}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {renderPieData().map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </Card.Body>
              </Card>
            </Col>

            {currentEvent && (
              <Col md={6}>
                <Card className="shadow-sm border-0 mb-4">
                  <Card.Body>
                    <h5 className="fw-bold">Event Details</h5>
                    <p>
                      <strong>Name:</strong> {currentEvent.name}
                    </p>
                    <p>
                      <strong>Date:</strong> {currentEvent.date}
                    </p>
                    <p>
                      <strong>Venue:</strong> {currentEvent.venue}
                    </p>
                    <p>
                      <strong>Status:</strong> {currentEvent.status}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>

          {/* 📋 Registered Students */}
          {currentEvent && (
            <>
              <Row>
                <Col>
                  <Card className="shadow-sm border-0 mb-4">
                    <Card.Body>
                      <h5 className="fw-bold">Registered Students</h5>
                      <Table striped hover responsive>
                        <thead className="table-primary">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentEvent.registered.map((student) => (
                            <tr key={student.id}>
                              <td>{student.id}</td>
                              <td>{student.name}</td>
                              <td>{student.email}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* 🏆 Results */}
              {currentEvent.results.length > 0 && (
                <Row>
                  <Col>
                    <Card className="shadow-sm border-0">
                      <Card.Body>
                        <h5 className="fw-bold">Event Results</h5>
                        <Table striped hover>
                          <thead className="table-success">
                            <tr>
                              <th>Rank</th>
                              <th>Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentEvent.results.map((r, i) => (
                              <tr key={i}>
                                <td>{r.rank}</td>
                                <td>{r.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              )}
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ReportPage;
