import React from "react";
import {Calendar, FileText, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../style/StudentDashboard.css";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <div className="Student-sidebar sticky-xl-top p-3">
      {/* Top Logo Only */}
      <div className="sidebar-logo mb-4 text-center d-none d-md-block mx-auto">
        <img 
          src={logo} 
          alt="CampusWave Logo" 
          style={{ width: '120px', height: 'auto' }} 
        />
      </div>

      {/* Sidebar Menu Items */}
      
<NavLink to="/student" className="sidebar-link">
        <Calendar className="me-2" size={18} />Dashboard
      </NavLink>

      

      <NavLink to="/student-events" className="sidebar-link">
        <Calendar className="me-2" size={18} />  Events
      </NavLink>

      <NavLink to="/student-MyEvents" className="sidebar-link">
        <Calendar className="me-2" size={18} /> My Events
      </NavLink>

      <NavLink to="/student-result" className="sidebar-link">
        <FileText className="me-2" size={18} /> Results
      </NavLink>

      
      <NavLink to="/student-profile" className="sidebar-link">
        <FileText className="me-2" size={18} />Profile
      </NavLink>

      {/* Logout Button */}
      <div className="mt-4">
        <NavLink as={Link} to="/" className="btn btn-light text-danger w-100 d-flex align-items-center justify-content-center">
          <LogOut className="me-2" size={18} /> Logout
        </NavLink>
      </div>
    </div>
  );
};

export default StudentSidebar;
