import React from "react";
import { Container, Button } from "react-bootstrap";

const Newpage = () => {
  return (
    <Container fluid className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="text-center px-4" style={{ maxWidth: "480px" }}>
        <h1 className="display-5 mb-4">Welcome!</h1>
        <p className="mb-5 text-secondary">
          We would love to connect with you to know more about your brand and your goals.<br />
          Kindly fill the form below for us to get some insights.
        </p>
        <Button variant="success" size="lg">
          Start
        </Button>
      </div>
    </Container>
  );
};

export default Newpage;
