import React, { useState } from "react";
import SuperAdminNavbar from "../component/SuperAdminNavbar";
import SuperAdminSidebar from "../component/SuperAdminSidebar";

const ManageEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const eventsData = [
    { name: "S5", date: "S5", location: "Active", status: "Completed", canceled: "View Details" },
    { name: "Chedur", date: "S04", location: "Active", status: "Active", canceled: "View Details" },
    { name: "Tram Altums", date: "SA2", location: "Splor", status: "Upcoming", canceled: "View Details" },
    { name: "Heclus", date: "3008", location: "Splor", status: "Completed", canceled: "View Details" },
    { name: "Bacclns", date: "2001", location: "Splor", status: "Upcoming", canceled: "View Details" },
    { name: "Beni Altums", date: "2023", location: "Splor", status: "Active", canceled: "View Details" },
    { name: "Eacclns", date: "2008", location: "Splor", status: "Upcoming", canceled: "View Details" },
  ];

  // Theme Colors
  const colors = {
    primary: "#6366F1",
    accent: "#EC4899",
    background: "#F9FAFB",
    text: "#111827",
    success: "#22C55E",
    danger: "#EF4444",
  };

  // Card border colors by status
  const statusColors = {
    Active: colors.success,
    Completed: colors.primary,
    Upcoming: colors.accent,
  };

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className="d-none d-md-block">
        <SuperAdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1" style={{ background: colors.background, minHeight: "100vh" }}>
        <SuperAdminNavbar />

        <div style={{ padding: "20px", fontFamily: "Arial" }}>
          <h2 style={{ color: colors.primary, fontWeight: "bold" }}>Manage Events</h2>

          {/* Search + Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Search Events"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: `1px solid ${colors.primary}`,
                width: "250px",
                flex: "1",
              }}
            />
            <button
              style={{
                background: colors.accent,
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Create New Event
            </button>
          </div>

          {/* Responsive Grid */}
          <div className="grid-container">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="event-card"
                style={{
                  backgroundColor: colors.background,
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  border: `2px solid ${statusColors[event.status] || colors.primary}`,
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h3 style={{ margin: "0 0 10px", color: colors.text }}>{event.name}</h3>
                <p style={{ color: colors.text }}>
                  <strong>Date:</strong> {event.date}
                </p>
                <p style={{ color: colors.text }}>
                  <strong>Location:</strong> {event.location}
                </p>
                <p style={{ color: statusColors[event.status] }}>
                  <strong>Status:</strong> {event.status}
                </p>
                <p style={{ color: colors.accent, cursor: "pointer", fontWeight: "500" }}>
                  {event.canceled}
                </p>
                <button
                  style={{
                    background: colors.danger,
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Inline CSS for responsiveness */}
          <style>
            {`
              .grid-container {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                gap: 20px;
              }
              .event-card {
                grid-column: span 4;
              }

              /* Tablet: 2 cards per row */
              @media (max-width: 1024px) {
                .event-card {
                  grid-column: span 6;
                }
              }

              /* Mobile: 1 card per row */
              @media (max-width: 768px) {
                .event-card {
                  grid-column: span 12;
                }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
