import React from "react";
import { LayoutDashboard, Calendar, FileText, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../style/AdminDashboard.css";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="superadmin-sidebar sticky-xl-top p-3">
      {/* Top Logo Only */}
      <div className="sidebar-logo mb-4 text-center d-none d-md-block mx-auto">
        <img 
          src={logo} 
          alt="CampusWave Logo" 
          style={{ width: '120px', height: 'auto' }} 
        />
      </div>

      {/* Sidebar Menu Items */}
      <NavLink to="/Admindashboard" className="sidebar-link">
        <LayoutDashboard className="me-2" size={18} /> Dashboard
      </NavLink>

      

      <NavLink to="/events" className="sidebar-link">
        <Calendar className="me-2" size={18} />  Manage Event
      </NavLink>

      <NavLink to="/Registered-Students" className="sidebar-link">
        <Calendar className="me-2" size={18} /> Registered Students
      </NavLink>

      <NavLink to="/Upload-Result" className="sidebar-link">
        <FileText className="me-2" size={18} /> Upload Result
      </NavLink>

      <NavLink to="/report" className="sidebar-link">
        <Settings className="me-2" size={18} /> Report
      </NavLink>
      <NavLink to="/Admin-Profile" className="sidebar-link">
        <FileText className="me-2" size={18} /> Profile
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

export default AdminSidebar;
