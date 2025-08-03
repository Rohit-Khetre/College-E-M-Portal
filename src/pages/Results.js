import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/StudentDashboard.css';

const myRegisteredEvents = [
  { id: "cyber-security-bootcamp", status: "Completed" },
  { id: "data-science-workshop", status: "Completed" },
  { id: "codemania-2025", status: "Completed" },
];

const eventResults = [
  {
    id: 'cyber-security-bootcamp',
    name: 'cyber-security-bootcamp',
    date: '05-08-2025',
    position: '2nd Place',
    team: 'Team Infiniti',
  },
  {
    id: 'codemania-2025',
    name: 'CodeMania 2025',
    date: '03-08-2025',
    position: 'Winner 🥇',
    team: 'Team Infiniti',
  },
  {
    id: 'data-science-workshop',
    name: 'Data Science Workshop',
    date: '04-08-2025',
    position: 'Participation',
    team: 'Team Spark',
  }
];

const Results = () => {
  const filteredResults = eventResults.filter(result =>
    myRegisteredEvents.some(event => event.id === result.id && event.status === "Completed")
  );

  return (
    <Container className="p-4">
      <h4 className="mb-4 text-primary">🎉 My Event Results</h4>
      <Row>
        {filteredResults.length === 0 ? (
          <p className="text-muted">No results available yet.</p>
        ) : (
          filteredResults.map((event, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4 p-3 shadow-sm result-card border-0">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-bold text-theme mb-0">{event.name}</h5>
                  <span
                    className={`badge rounded-pill px-3 py-2 ${
                      event.position.toLowerCase().includes("winner") || event.position.includes("🥇")
                        ? "bg-success"
                        : event.position.toLowerCase().includes("2nd")
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {event.position}
                  </span>
                </div>
                <p className="mb-1 text-muted">📅 {event.date}</p>
                <p className="mb-0 text-muted">👥 Team: <span className="fw-semibold">{event.team}</span></p>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Results;
