import './App.css';
import Landing from './pages/Landing';
import AuthPage from './pages/AuthPage';


import StudentDashboard from './pages/StudentDashboard';
import EventDetails from './pages/EventDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Event from './pages/Event';
import EventRegister from './pages/EventRegister';
import MyEvents from './pages/MyEvents';
import Results from './pages/Results';
import StudentProfile from './pages/ProfilePage';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import ManageUsers from './pages/ManageUsers';
import ManageEvents from './pages/ManageEvents';
import ReportPage from './pages/ReportPage';
import SuperAdminProfile from './pages/SuperAdminProfile';
import AdminDashboard from './pages/AdminDashboard';
import RegisteredStudents from './pages/RegisteredStudents';
import UploadResults from './pages/UploadResults';
import ManageEventsPage from './pages/ManageEventsPage';
import AdminReportPage from './pages/AdminReportPage';
import CreateEventPage from './pages/CreateEventPage';
import EditEventsPage from './pages/EditEventsPage';
import ViewEventPage from './pages/ViewEventsPage';
import AdminProfile from './pages/AdminProfile';
import NotFoundPage from './pages/NotFoundPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import LoadingPage  from './pages/LoadingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔹 Landing Page (Default home route) */}
    <Route path="/" element={<Landing />} />

        {/* 🔹 Auth Page */}
    <Route path="/auth" element={<AuthPage />} />

        {/* 🔹 Student Dashboard Pages */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/student-events" element={<Event />} />
        <Route path="/register/:eventId" element={<EventRegister />} />
        <Route path="/student-MyEvents" element={<MyEvents />} />
        <Route path="/student-result" element={<Results />} />
        <Route path="/student-profile" element={<StudentProfile />} />
      
        
         <Route path="/dashboard" element={<SuperAdminDashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/SuperAdminProfile" element={<SuperAdminProfile />} />

        <Route path="/Admindashboard" element={<AdminDashboard />} />
        <Route path="/Registered-Students" element={<RegisteredStudents />} />
        <Route path="/Upload-Result" element={<UploadResults/>} />
        <Route path="/events" element={<ManageEventsPage/>} />
        <Route path="/report" element={<AdminReportPage/>} />
        <Route path="/admin-profile" element={<AdminProfile/>} />
        
        <Route path="/create-event" element={<CreateEventPage/>} />
      <Route path="/edit-event" element={<EditEventsPage />} />
      <Route path="/view-event" element={<ViewEventPage/>}  />   


      <Route path="*" element={<NotFoundPage />} />
<Route path="/unauthorized" element={<UnauthorizedPage />} />
<Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
