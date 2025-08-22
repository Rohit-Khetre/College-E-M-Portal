// src/pages/utility/UnauthorizedPage.js
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import "../style/UtilityPages.css";


const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="utility-container d-flex flex-column justify-content-center align-items-center text-center">
      <LockKeyhole size={80} className="text-primary mb-3" />
      <h1 className="utility-title">403 - Unauthorized</h1>
      <p className="utility-text">
        Sorry, you don’t have permission to access this page.
      </p>
      <Button className="utility-btn" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default UnauthorizedPage;