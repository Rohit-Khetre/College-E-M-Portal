// src/pages/EventDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Badge} from "react-bootstrap";
import hack from "../assets/hackathon.jpg";
import ai from "../assets/workshop.webp";
import cyber from "../assets/cyber.jpg";
import '../style/StudentDashboard.css';
import { Link } from "react-router-dom";

const eventData = {
  "hackathon-2025": {
    title: "Hackathon 2025",
    img: hack,
    date: "5th September 2025",
    description: "A 24-hour coding marathon focused on innovative tech solutions.",
    location: 'Seminar Hall A',
  },
  "ai-workshop": {
    title: "AI Workshop",
    img: ai,
    date: "12th August 2025",
    description: "Hands-on workshop on machine learning and AI tools.",
    location: 'Seminar Hall A',
  },
  "cyber-security-bootcamp": {
    title: "Cyber Security Bootcamp",
    img: cyber,
    date: "28th August 2025",
    description: "An intense bootcamp on cyber threats and ethical hacking.",
    location: 'Seminar Hall A',
  },
};

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventData[eventId];

  if (!event) {
    return (
      <Container className="p-5 text-center">
        <h4 className="text-danger">Event not found</h4>
      </Container>
    );
  }

  return (
    <Container className="p-4">
      <Card className="p-4 shadow-sm">
        <img src={event.img} alt={event.title} className="img-fluid cover-pic mx-auto rounded mb-4" />
        <h3>{event.title}</h3>
        <Badge bg="info" className="mb-2">📅{event.date}</Badge>
        <Badge bg="info" className="mb-2">📍{event.location}</Badge>
        <p className="mt-3">{event.description}</p>
        {/* <Button variant="primary">Register Now</Button> */}
        {/* <Link to={`/register/${event.id}`} className="btn btn-primary btn-sm">
                Register Now
              </Link> */}
              <Link to={`/register/${eventId}`} className="btn btn-primary btn-sm">
  Register Now
</Link>
      </Card>
    </Container>
  );
};

export default EventDetails;
