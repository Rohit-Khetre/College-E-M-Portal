// src/pages/utility/LoadingPage.js
import React from "react";
import { Spinner, Container } from "react-bootstrap";
import "../style/UtilityPages.css";



const LoadingPage = () => {
  return (
    <Container className="utility-container d-flex flex-column justify-content-center align-items-center text-center">
      <Spinner animation="border" variant="primary" className="mb-3" style={{ width: "3rem", height: "3rem" }} />
      <h2 className="utility-title">Loading...</h2>
      <p className="utility-text">Please wait while we fetch the data.</p>
    </Container>
  );
};

export default LoadingPage;