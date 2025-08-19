import React from "react";
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../style/SuperAdminDashboard.css";
import logo from '../assets/logo.png';

const SuperAdminSidebar = () => {
  return (
    <div className="superadmin-sidebar p-3">
      {/* Top Logo Only */}
      <div className="sidebar-logo mb-4 text-center d-none d-md-block mx-auto">
        <img 
          src={logo} 
          alt="CampusWave Logo" 
          style={{ width: '120px', height: 'auto' }} 
        />
      </div>

      {/* Sidebar Menu Items */}
      <NavLink to="/dashboard" className="sidebar-link">
        <LayoutDashboard className="me-2" size={18} /> Dashboard
      </NavLink>

      <NavLink to="/manage-users" className="sidebar-link">
        <Users className="me-2" size={18} /> Manage Users
      </NavLink>

      <NavLink to="/manage-events" className="sidebar-link">
        <Calendar className="me-2" size={18} /> Manage Events
      </NavLink>

      <NavLink to="/reports" className="sidebar-link">
        <FileText className="me-2" size={18} /> Reports
      </NavLink>

      <NavLink to="/SuperAdminProfile" className="sidebar-link">
        <Settings className="me-2" size={18} /> Profile
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

export default SuperAdminSidebar;
