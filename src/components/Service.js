import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  { title: "Brand Strategy", desc: "Creating emotional and memorable brand identities." },
  { title: "Social Campaigns", desc: "Driving impact through creative storytelling." },
  { title: "Performance Marketing", desc: "Maximizing conversions with data-driven growth." },
];

function Services() {
  return (
    <Container id="services" className="py-5 bg-white text-center">
      <h2 className="mb-4">What We Do</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} sm={12} md={4} className="mb-4">
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;