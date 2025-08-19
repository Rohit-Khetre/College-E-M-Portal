import React, { useRef } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SuperAdminNavbar from "../component/SuperAdminNavbar";
import SuperAdminSidebar from "../component/SuperAdminSidebar";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// 🎨 Theme Colors
const theme = {
  primary: "#6366F1",
  accent: "#EC4899",
  background: "#F9FAFB",
  text: "#111827",
  success: "#22C55E",
  danger: "#EF4444",
};

const ReportPage = () => {
  const reportRef = useRef();

  // Pie Chart Data
  const pieData = {
    labels: ["Workshop", "Seminar", "Hackathon"],
    datasets: [
      {
        data: [12, 7, 9],
        backgroundColor: [theme.primary, theme.accent, theme.success],
        hoverOffset: 6,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ["Freshman", "Sophomore", "Junior", "Senior"],
    datasets: [
      {
        label: "Students",
        data: [15, 22, 30, 40],
        backgroundColor: theme.primary,
      },
    ],
  };

  // Download as PDF
  const downloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("FullReport.pdf");
    });
  };

  return (
    <div className="d-flex flex-column flex-md-row" style={{ backgroundColor: theme.background, color: theme.text }}>
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <SuperAdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <SuperAdminNavbar />

        <Container fluid className="p-4" ref={reportRef}>
          {/* Header */}
          <Row className="mb-4 align-items-center">
            <Col>
              <h3 style={{ color: theme.primary }}>📑 Reports</h3>
            </Col>
            <Col className="text-end">
              <Button
                style={{
                  backgroundColor: theme.primary,
                  border: "none",
                }}
                onClick={downloadPDF}
              >
                Download Full Report
              </Button>
            </Col>
          </Row>

          {/* Charts */}
          <Row className="mb-4">
            <Col md={6}>
              <Card className="p-3 shadow-sm d-flex align-items-center" style={{ borderColor: theme.primary }}>
                <h5 style={{ color: theme.text }}>Event Participation by Type</h5>
                <div style={{ width: "300px", height: "300px" }}>
                  <Pie data={pieData} />
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 shadow-sm d-flex align-items-center" style={{ borderColor: theme.accent }}>
                <h5 style={{ color: theme.text }}>Student Distribution Patterns</h5>
                <div style={{ width: "400px", height: "300px" }}>
                  <Bar data={barData} />
                </div>
              </Card>
            </Col>
          </Row>

          {/* Event Details + Student Table */}
          <Row>
            <Col md={6}>
              <Card className="p-3 shadow-sm mb-4" style={{ borderColor: theme.success }}>
                <h5 style={{ color: theme.success }}>Event Details</h5>
                <p><b>Event:</b> TechFest 2025</p>
                <p><b>Date:</b> August 10, 2025</p>
                <p><b>Location:</b> Main Auditorium, Campus</p>
                <p><b>Description:</b> A full-day technology event covering AI, Robotics, and Web3.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 shadow-sm mb-4" style={{ borderColor: theme.danger }}>
                <h5 style={{ color: theme.accent }}>Registered Students</h5>
                <Table striped bordered hover size="sm">
                  <thead style={{ backgroundColor: theme.primary, color: "#fff" }}>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Rohit Khetre</td>
                      <td>rohit@example.com</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ankita Shinde</td>
                      <td>ankita@example.com</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Parth</td>
                      <td>parth@example.com</td>
                    </tr>
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

export default ReportPage;
