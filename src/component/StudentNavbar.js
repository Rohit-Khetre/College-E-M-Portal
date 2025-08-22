import React, { useState } from "react";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import StudentSidebar from "./StudentSidebar";   // ✅ Correct name
import logo from "../assets/logo.png";

const StudentNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Navbar bg="light" className="px-3 sticky-top">
        <Container fluid>
          {/* Mobile Menu Button */}
          <button
            className="btn btn-outline-primary d-md-none"
            onClick={() => setShowMenu(true)}
          >
            ☰
          </button>
        </Container>
      </Navbar>

      {/* Mobile Sidebar Offcanvas */}
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <div className="sidebar-logo mb-4 text-center">
            <img
              src={logo}
              alt="CampusWave Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {/* ✅ Now matches the import */}
          <StudentSidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default StudentNavbar;
