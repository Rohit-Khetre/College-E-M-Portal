import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/StudentDashboard.css'

const myRegisteredEvents = [
  {
    id: 'ai-workshop',
    name: 'AI Workshop',
    date: '06-08-2025',
    status: 'Registered',
    location: 'Seminar Hall A',
  },
  {
    id: 'hackathon-2025',
    name: 'Hackathon 2025',
    date: '05-08-2025',
    status: 'Registered',
    location: 'Lab 204',
  },
  {
      id: "cyber-security-bootcamp",
      name: "Cyber Security Bootcamp",
      date: "06-08-2025",
      status:'Completed',
      location: "Seminar Hall A",
    },
    {
        id: "data-science-workshop",
        name: "Data Science Workshop",
        date: "04-08-2025",
        status:'Completed',
        location: "Seminar Hall A"
      },
      {
          id: "codemania-2025",
          name: "CodeMania 2025",
          date: "03-08-2025",
          status: 'Completed',
          location: "Seminar Hall A"
        }
];

const MyEvents = () => {
  return (
    <Container className="p-4">
      <h4 className="mb-4 text-primary">My Registered Events</h4>
      <Row>
        {myRegisteredEvents.map((event, index) => (
          <Col md={6} key={index}>
            <Card className="mb-3 p-3 shadow-sm">
              <h6>{event.name}</h6>
              <p className="mb-1">📅 {event.date}</p>
              <p className="mb-1">📍 {event.location}</p>
              <span className="badge status">{event.status}</span>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyEvents;
