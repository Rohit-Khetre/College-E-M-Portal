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
import ProfilePage from './pages/ProfilePage';

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
        <Route path="/event" element={<Event />} />
        <Route path="/register/:eventId" element={<EventRegister />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
