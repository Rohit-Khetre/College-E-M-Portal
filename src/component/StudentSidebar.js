import React from "react";
import { LayoutDashboard, Calendar, FileText, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../style/StudentDashboard.css";
import logo from '../assets/logo.png';

const StudentSidebar = () => {
  return (
    <div className="Student-sidebar p-3">
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
        <Calendar className="me-2" size={18} />Student Dashboard
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
        <button className="btn btn-light text-danger w-100 d-flex align-items-center justify-content-center">
          <LogOut className="me-2" size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default StudentSidebar;
