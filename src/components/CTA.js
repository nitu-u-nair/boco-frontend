
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function CTA() {
  return (
    <Container fluid className="cta-section py-5 text-center bg-dark text-white">
      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        Ready to Collaborate?
      </motion.h3>
      <Button variant="light" size="lg" className="mt-3">
        Let's Talk
      </Button>
    </Container>
  );
}

export default CTA;