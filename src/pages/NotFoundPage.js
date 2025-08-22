// src/pages/utility/NotFoundPage.js
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import "../style/UtilityPages.css";


const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="utility-container d-flex flex-column justify-content-center align-items-center text-center">
      <AlertTriangle size={80} className="text-accent mb-3" />
      <h1 className="utility-title">404 - Page Not Found</h1>
      <p className="utility-text">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Button className="utility-btn" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;