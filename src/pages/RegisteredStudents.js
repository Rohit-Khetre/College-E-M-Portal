// src/pages/RegisteredStudents.js
import React, { useState } from "react";
import { Search } from "lucide-react"; // Search icon
import AdminNavbar from "../component/AdminNavbar";
import AdminSidebar from "../component/AdminSidebar";

// Dummy Students Data
const studentsData = [
  {
    id: "STU001",
    name: "Ankita Shinde",
    email: "ankita@123",
    event: "CodeMania 2025",
    date: "2023-08-15",
    status: "Active",
  },
  {
    id: "STU002",
    name: "Amruta Puri",
    email: "amruta@123",
    event: "AI Bootcamp",
    date: "2023-08-15",
    status: "Active",
  },
  {
    id: "STU003",
    name: "Prerna Shinde",
    email: "prerna@123",
    event: "Cyber Security Workshop",
    date: "2023-08-20",
    status: "Pending",
  },
  {
    id: "STU004",
    name: "Rohit Khetre",
    email: "rohit@123",
    event: "CodeMania 2025",
    date: "2023-08-10",
    status: "Inactive",
  },
  {
    id: "STU005",
    name: "Emily Davis",
    email: "emily@123",
    event: "AI Bootcamp",
    date: "2023-08-10",
    status: "Pending",
  },
  {
    id: "STU006",
    name: "Tuolver",
    email: "tuolver@123",
    event: "Cyber Security Workshop",
    date: "2023-08-10",
    status: "Inactive",
  },
];

// Status Colors
const statusColors = {
  Active: "#28a745",
  Pending: "#ff9800",
  Inactive: "#dc3545",
};

const RegisteredStudents = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Filtering Students
  const filteredStudents = studentsData.filter((student) => {
    return (
      (student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.id.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus ? student.status === filterStatus : true)
    );
  });

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <AdminNavbar />

        <div
          style={{
            padding: "30px",
            background: "#f8f9fc",
            minHeight: "100vh",
          }}
        >
          {/* Page Header */}
          <h2 style={{ marginBottom: "20px", fontWeight: "600", color: "#333" }}>
            Registered Students
          </h2>

          {/* Search + Filter */}
          <div
            style={{
              marginBottom: "25px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {/* Search Box */}
            <div
              style={{
                position: "relative",
                flex: "1 1 250px",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
              />
              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 35px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  background: "#fff",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Status Filter */}
            <select
              onChange={(e) => setFilterStatus(e.target.value)}
              value={filterStatus}
              style={{
                flex: "1 1 200px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                background: "#fff",
                fontSize: "14px",
              }}
            >
              <option value="">Filter by status</option>
              <option value="Active">✅ Active</option>
              <option value="Pending">⏳ Pending</option>
              <option value="Inactive">❌ Inactive</option>
            </select>
          </div>

          {/* Student Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <h4
                  style={{ marginBottom: "10px", fontSize: "18px", color: "#222" }}
                >
                  {student.name}
                </h4>
                <p style={{ margin: "6px 0", fontSize: "14px", color: "#555" }}>
                  <strong>ID:</strong> {student.id}
                </p>
                <p style={{ margin: "6px 0", fontSize: "14px", color: "#555" }}>
                  <strong>Email:</strong> {student.email || "—"}
                </p>
                <p style={{ margin: "6px 0", fontSize: "14px", color: "#555" }}>
                  <strong>Event:</strong> {student.event}
                </p>
                <p style={{ margin: "6px 0", fontSize: "14px", color: "#555" }}>
                  <strong>Registered:</strong> {student.date}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#fff",
                    background: statusColors[student.status],
                  }}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredStudents;
