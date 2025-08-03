// src/pages/Events.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/StudentDashboard.css';
import event from '../assets/victory.png';
import hack from '../assets/hackathon.jpg';
import cyber from '../assets/cyber.jpg';
import ai from '../assets/workshop.webp';

const events = [
  {
    id: "codemania-2025",
    name: "CodeMania 2025",
    date: "03-08-2025",
    description: "Annual coding contest for all branches.",
    location: "Seminar Hall A",
    image: event,
  },
  {
    id: "data-science-workshop",
    name: "Data Science Workshop",
    date: "04-08-2025",
    description: "Hands-on workshop with real datasets.",
    location: "Seminar Hall A",
    image: event,
  },
  {
    id: "codemania-2025",
    name: "CodeMania 2025",
    date: "03-08-2025",
    description: "Annual coding contest for all branches.",
    location: "Seminar Hall A",
    image: event,
  },
  {
    id: "data-science-workshop",
    name: "Data Science Workshop",
    date: "04-08-2025",
    description: "Hands-on workshop with real datasets.",
    location: "Seminar Hall A",
    image: event,
  },
  {
    id: "hackathon-2025",
    name: "Hackathon 2025",
    date: "05-08-2025",
    description: "Annual coding contest for all branches.",
    location: "Seminar Hall A",
    image: hack,
  },
  {
    id: "ai-workshop",
    name: "AI Workshop",
    date: "06-08-2025",
    description: "Generative AI",
    location: "Seminar Hall A",
    image: ai,
  },
  {
    id: "cyber-security-bootcamp",
    name: "Cyber Security Bootcamp",
    date: "06-08-2025",
    description: "Cyber Security Bootcamp",
    location: "Seminar Hall A",
    image: cyber,
  },
  {
    id: "codemania-2025",
    name: "CodeMania 2025",
    date: "03-08-2025",
    description: "Annual coding contest for all branches.",
    location: "Seminar Hall A",
    image: event,
  }
];

const Events = () => {
  return (
    <Container className="p-4">
      <h4 className="mb-4 text-primary">All Events</h4>
      <Row>
        {events.map((event) => (
          <Col md={4} key={event.id}>
            <Card className="p-3 mb-4 shadow-sm event-card">
              <img src={event.image} alt={event.name} className="event-cover mx-auto" />
              <h6 className="mt-3">{event.name}</h6>
              <p>📅{event.date}</p>
              <p>📍{event.location}</p>
              <p>{event.description}</p>
              <Link to={`/register/${event.id}`} className="btn btn-primary btn-sm">
                Register
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
