import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Clients() {
  const clientLogos = ["🌟", "🚀", "🎯", "🏆", "🧠"];

  return (
    <Container className="py-4 text-center">
      <h5 className="mb-3">Trusted By</h5>
      <Row>
        {clientLogos.map((logo, index) => (
          <Col key={index} xs={4} sm={2} className="mb-3">
            <div className="client-logo fs-2">{logo}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Clients;