// src/pages/EventRegister.js
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import hack from '../assets/hackathon.jpg';
import ai from '../assets/workshop.webp';
import cyber from '../assets/cyber.jpg';
import event from '../assets/victory.png';
import '../style/StudentDashboard.css'

const eventMap = {
  "codemania-2025": {
    name: "CodeMania 2025",
    date: "03-08-2025",
    description: "Annual coding contest for all branches.",
    location: 'Seminar Hall A',
    image: event
  },
  "data-science-workshop": {
    name: "Data Science Workshop",
    date: "04-08-2025",
    description: "Hands-on workshop with real datasets.",
    location: 'Seminar Hall A',
    image: event,
  },
  "hackathon-2025": {
    name: "Hackathon 2025",
    date: "05-08-2025",
    description: "Annual coding contest for all branches.",
    location: 'Seminar Hall A',
    image: hack,
  },
  "ai-workshop": {
    name: "AI Workshop",
    date: "06-08-2025",
    description: "Generative AI",
    location: 'Seminar Hall A',
    image: ai,
  },
  "cyber-security-bootcamp": {
    name: "Cyber Security Bootcamp",
    date: "06-08-2025",
    description: "Cyber Security Bootcamp",
    location: 'Seminar Hall A',
    image: cyber,
  },
};

const EventRegister = () => {
  const { eventId } = useParams();
  const event = eventMap[eventId];

  const [formData, setFormData] = useState({ fullName: "", email: "", branch: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered for:", event?.name);
    console.log("Form Data:", formData);
    alert("Registration successful!");
    setFormData({ fullName: "", email: "", branch: "" });
  };

  if (!event) {
    return <Container className="p-4 text-center"><h4 className="text-danger">Event not found</h4></Container>;
  }

  return (
    <Container className="p-4">
      <Card className="p-4 shadow-sm">
        <img src={event.image} alt={event.name} className="img-fluid reg-pic mx-auto rounded mb-3"  />
        <h4>{event.name}</h4>
        <p className="text-muted">📅{event.date}</p>
        <p className="text-muted">📍{event.location}</p>
        <p>{event.description}</p>

        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Branch</Form.Label>
            <Form.Control
              type="text"
              name="branch"
              required
              value={formData.branch}
              onChange={handleChange}
              placeholder="Enter your branch"
            />
          </Form.Group>

          <Button type="submit" variant="success">
            Confirm Registration
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EventRegister;
