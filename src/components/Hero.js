import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Container fluid className="hero-section py-5 bg-light text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        We Are BOCO
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
      >
        Digital Strategy & Creative Performance
      </motion.p>
      <Button variant="dark" className="mt-3">Explore Work</Button>
    </Container>
  );
}

export default Hero;