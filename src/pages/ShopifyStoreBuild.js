// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
// import Navbar from "./Navbar";
// import Footer from "../components/Footer";
// import Qna from "../components/Qna";
// import Imageslidertwo from "../components/ImageSliderTwo"; // updated to Bootstrap-compatible version
// import API from "../api";
// import { useNavigate } from "react-router-dom";

// const ShopifyStoreBuild = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     API.get("/StorePage")
//       .then(res => setData(res.data.data))
//       .catch(err => console.error(err));
//   }, []);

//   if (!data) {
//     return (
//       <Container className="text-center my-5">
//         <Spinner animation="border" variant="secondary" />
//         <div className="mt-3 text-muted">Loading…</div>
//       </Container>
//     );
//   }

//   const {
//     Section1Head,
//     Section1SubHead,
//     Section3Head,
//     Section3SubHead,
//     Section5Head,
//     Section5SubHead
//   } = data;

//   return (
//     <>
//       <Navbar />
//       <Container className="py-5 text-center">
//         <h1>{Section1Head}</h1>
//         <p className="lead">{Section1SubHead}</p>
//         <div className="d-flex justify-content-center gap-2 mb-4">
//           <Button variant="outline-primary" onClick={() => navigate("/Newpage")}>
//             Audit My Website
//           </Button>
//           <Button variant="primary" onClick={() => navigate("/Newpage")}>
//             Talk To Us →
//           </Button>
//         </div>
//         <img
//           src={require("../assets/hero-image.png")}
//           alt="Hero"
//           className="img-fluid rounded"
//         />
//       </Container>

//       <section className="bg-light py-5">
//         <Container>
//           <Row className="g-4 text-center">
//             {[1, 2, 3].map((_, idx) => {
//               const features = [
//                 {
//                   src: require("../assets/feature1.png"),
//                   title: "Built for High Conversion Rate",
//                   desc: "Outperform conversion benchmarks.",
//                 },
//                 {
//                   src: require("../assets/feature2.png"),
//                   title: "Lightning Fast & Visually Stable",
//                   desc: "Speed and visual consistency guaranteed.",
//                 },
//                 {
//                   src: require("../assets/feature3.png"),
//                   title: "Timelines & Budgets On Track",
//                   desc: "Clear process and milestone updates.",
//                 },
//               ];
//               const f = features[idx];
//               return (
//                 <Col md={4} key={idx}>
//                   <div className="bg-white p-4 shadow rounded">
//                     <img src={f.src} alt="" width="120" height="120" className="mb-3" />
//                     <h4>{f.title}</h4>
//                     <p>{f.desc}</p>
//                   </div>
//                 </Col>
//               );
//             })}
//           </Row>
//         </Container>
//       </section>

//       <Container className="py-5">
//         <Row className="align-items-center gy-4">
//           <Col md={6}>
//             <img
//               src={require("../assets/section3-image.png")}
//               alt="Feature"
//               className="img-fluid rounded"
//             />
//           </Col>
//           <Col md={6}>
//             <h2>{Section3Head}</h2>
//             <p>{Section3SubHead}</p>
//             {/* Example bullet list */}
//             <ul>
//               <li>Unmatched Speed & Stability</li>
//               <li>Build for Conversions</li>
//               <li>Reduced App Stack</li>
//               <li>Fully Integrated Tools</li>
//               <li>Highly Scalable</li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>

//       <Container className="text-center py-5">
//         <Imageslidertwo />
//         <div className="mt-4">
//           <Button variant="outline-secondary" onClick={() => navigate("/ShopifyStoreBuild")}>
//             Explore More Case Studies
//           </Button>
//         </div>
//       </Container>

//       <Container className="py-5">
//         <Row className="align-items-center gy-4">
//           <Col md={6}>
//             <img
//               src={require("../assets/section5-image.png")}
//               alt="Feature"
//               className="img-fluid rounded"
//             />
//           </Col>
//           <Col md={6}>
//             <h2>{Section5Head}</h2>
//             <p>{Section5SubHead?.[0]?.children?.[0]?.text || ""}</p>
//             <ul>
//               <li>Sign up for a FREE Audit</li>
//               <li>Share brand details</li>
//               <li>Receive audit report</li>
//             </ul>
//             <Button variant="primary" onClick={() => navigate("/Newpage")}>
//               Audit My Website →
//             </Button>
//           </Col>
//         </Row>
//       </Container>

//       <Qna />
//       <Footer />
//     </>
//   );
// };

// export default ShopifyStoreBuild;




// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Spinner, Accordion } from "react-bootstrap";
// import Navbar from "./Navbar";
// import Footer from "../components/Footer";
// import Imageslidertwo from "../components/ImageSliderTwo";
// import API from "../api";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const ShopifyStoreBuild = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });

//     const fetchData = async () => {
//       try {
//         const res = await API.get("/StorePage");
//         setData(res.data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!data) {
//     return (
//       <Container className="text-center my-5 py-5">
//         <Spinner animation="border" variant="primary" />
//         <div className="mt-3 text-muted">Loading...</div>
//       </Container>
//     );
//   }

//   const { Section1Head, Section1SubHead, Section3Head, Section3SubHead, Section5Head, Section5SubHead } = data;

//   return (
//     <>
//       <Navbar />
      
//       <section className="py-5 bg-light">
//         <Container className="py-5 text-center" data-aos="fade-up">
//           <h1 className="display-4 fw-bold mb-4">{Section1Head}</h1>
//           <p className="lead mb-5">{Section1SubHead}</p>
//           <div className="d-flex justify-content-center gap-3 mb-5">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn btn-outline-primary"
//               onClick={() => navigate("/new-page")}
//             >
//               Audit My Website
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn btn-primary"
//               onClick={() => navigate("/talk-to-us")}
//             >
//               Talk To Us <i className="bi bi-arrow-right ms-1"></i>
//             </motion.button>
//           </div>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <img 
//               src={require("../assets/hero-image.png")} 
//               alt="Hero" 
//               className="img-fluid rounded shadow-lg" 
//             />
//           </div>
//         </Container>
//       </section>

//       <section className="py-5">
//         <Container>
//           <h2 className="text-center mb-5" data-aos="fade-up">Why Choose Our Shopify Services</h2>
//           <Row className="g-4 text-center">
//             {[
//               {
//                 src: require("../assets/feature1.png"),
//                 title: "Built for High Conversion Rate",
//                 desc: "Outperform conversion benchmarks.",
//                 delay: 100
//               },
//               {
//                 src: require("../assets/feature2.png"),
//                 title: "Lightning Fast & Visually Stable",
//                 desc: "Speed and visual consistency guaranteed.",
//                 delay: 200
//               },
//               {
//                 src: require("../assets/feature3.png"),
//                 title: "Timelines & Budgets On Track",
//                 desc: "Clear process and milestone updates.",
//                 delay: 300
//               },
//             ].map((feature, idx) => (
//               <Col md={4} key={idx} data-aos="fade-up" data-aos-delay={feature.delay}>
//                 <div className="p-4 h-100 hover-shadow rounded">
//                   <img 
//                     src={feature.src} 
//                     alt="" 
//                     width="120" 
//                     height="120" 
//                     className="mb-4 img-fluid"
//                   />
//                   <h4>{feature.title}</h4>
//                   <p className="text-muted">{feature.desc}</p>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       <section className="py-5 bg-light">
//         <Container className="py-5">
//           <Row className="align-items-center gy-4">
//             <Col md={6} data-aos="fade-right">
//               <img 
//                 src={require("../assets/section3-image.png")} 
//                 alt="Feature" 
//                 className="img-fluid rounded shadow-lg" 
//               />
//             </Col>
//             <Col md={6} data-aos="fade-left">
//               <h2 className="mb-4">{Section3Head}</h2>
//               <p className="lead mb-4">{Section3SubHead}</p>
//               <ul className="list-unstyled">
//                 {[
//                   "Unmatched Speed & Stability",
//                   "Build for Conversions",
//                   "Reduced App Stack",
//                   "Fully Integrated Tools",
//                   "Highly Scalable"
//                 ].map((item, idx) => (
//                   <li key={idx} className="mb-2">
//                     <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="py-5">
//         <Container className="text-center py-5">
//           <h2 className="mb-5" data-aos="fade-up">Our Recent Shopify Projects</h2>
//           <div data-aos="fade-up" data-aos-delay="100">
//             <Imageslidertwo />
//           </div>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn btn-outline-secondary mt-5"
//             onClick={() => navigate("/case-studies")}
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Explore More Case Studies
//           </motion.button>
//         </Container>
//       </section>

//       <section className="py-5 bg-light">
//         <Container className="py-5">
//           <Row className="align-items-center gy-4">
//             <Col md={6} data-aos="fade-right">
//               <img 
//                 src={require("../assets/section5-image.png")} 
//                 alt="Feature" 
//                 className="img-fluid rounded shadow-lg" 
//               />
//             </Col>
//             <Col md={6} data-aos="fade-left">
//               <h2 className="mb-4">{Section5Head}</h2>
//               <p className="lead mb-4">{Section5SubHead?.[0]?.children?.[0]?.text || ""}</p>
//               <ul className="list-unstyled mb-4">
//                 {[
//                   "Sign up for a FREE Audit",
//                   "Share brand details",
//                   "Receive audit report"
//                 ].map((item, idx) => (
//                   <li key={idx} className="mb-2">
//                     <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="btn btn-primary"
//                 onClick={() => navigate("/new-page")}
//               >
//                 Audit My Website <i className="bi bi-arrow-right ms-1"></i>
//               </motion.button>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="py-5">
//         <Container className="py-5">
//           <h2 className="text-center mb-5" data-aos="fade-up">Frequently Asked Questions</h2>
//           <Accordion data-aos="fade-up" data-aos-delay="100">
//             {[
//               {
//                 question: "What is the overall turnaround time for a Shopify project?",
//                 answer: "Shopify projects take 45-90 days depending on complexity."
//               },
//               {
//                 question: "Why should I choose Shopify for my e-commerce store?",
//                 answer: "It is scalable, secure, and user-friendly."
//               },
//               {
//                 question: "Do you offer ongoing support after launch?",
//                 answer: "Yes, we offer various support packages to meet your needs."
//               },
//               {
//                 question: "Can you migrate my existing store to Shopify?",
//                 answer: "Absolutely! We specialize in seamless platform migrations."
//               }
//             ].map((item, idx) => (
//               <Accordion.Item eventKey={idx.toString()} key={idx} className="mb-3">
//                 <Accordion.Header>{item.question}</Accordion.Header>
//                 <Accordion.Body>{item.answer}</Accordion.Body>
//               </Accordion.Item>
//             ))}
//           </Accordion>
//         </Container>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default ShopifyStoreBuild;


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import ClientLogoSlider from "../components/ImageSliderTwo";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopifyStoreBuild = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });

    const fetchData = async () => {
      try {
        const res = await API.get("/StorePage");
        setData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="min-vh-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const { Section1Head, Section1SubHead, Section3Head, Section3SubHead, Section5Head, Section5SubHead } = data;

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="container py-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="display-3 fw-bold mb-4" data-aos="fade-up">
                  {Section1Head}
                </h1>
                <p className="lead text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
                  {Section1SubHead}
                </p>
                <div className="d-flex flex-wrap gap-3 mb-5" data-aos="fade-up" data-aos-delay="200">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-primary px-4 py-3 rounded-pill"
                    onClick={() => navigate("/new-page")}
                  >
                    Audit My Website
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(13, 110, 253, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary px-4 py-3 rounded-pill"
                    onClick={() => navigate("/talk-to-us")}
                  >
                    Talk To Us
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ms-2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="position-relative"
                data-aos="fade-left"
              >
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4" style={{ transform: 'rotate(3deg)' }}></div>
                <img 
                  src={require("../assets/hero-image.png")} 
                  alt="Shopify Store Development" 
                  className="position-relative img-fluid rounded-4 shadow-lg" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <Container>
          <div className="text-center mb-8">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Why Choose Our Shopify Services</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }} data-aos="fade-up" data-aos-delay="100">
              We combine cutting-edge technology with proven e-commerce strategies
            </p>
          </div>
          
          <Row className="g-4">
            {[
              {
                icon: require("../assets/feature1.png"),
                title: "Built for High Conversion Rate",
                description: "Outperform conversion benchmarks with our data-driven designs.",
                delay: 100
              },
              {
                icon: require("../assets/feature2.png"),
                title: "Lightning Fast & Stable",
                description: "Market-leading performance with 99.9% uptime guarantee.",
                delay: 200
              },
              {
                icon: require("../assets/feature3.png"),
                title: "On Time & On Budget",
                description: "Clear milestones and transparent pricing throughout.",
                delay: 300
              }
            ].map((feature, idx) => (
              <Col md={4} key={idx} data-aos="fade-up" data-aos-delay={feature.delay}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="feature-card text-center h-100"
                >
                  <div className="feature-icon mb-4">
                    <img src={feature.icon} alt="" width="40" />
                  </div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="text-muted mb-0">{feature.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
              <img 
                src={require("../assets/section3-image.png")} 
                alt="Shopify Benefits" 
                className="img-fluid rounded-4 shadow-lg" 
              />
            </Col>
            <Col lg={6} data-aos="fade-left">
              <h2 className="display-6 fw-bold mb-4">{Section3Head}</h2>
              <p className="lead text-muted mb-5">{Section3SubHead}</p>
              <ul className="list-unstyled">
                {[
                  "Unmatched Speed & Stability",
                  "Optimized for Conversions",
                  "Reduced App Dependencies",
                  "Fully Integrated Solutions",
                  "Enterprise-grade Scalability"
                ].map((item, idx) => (
                  <li key={idx} className="mb-3 d-flex align-items-center">
                    <span className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Client Showcase */}
      <section className="section">
        <Container>
          <div className="text-center mb-8">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Our Shopify Success Stories</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }} data-aos="fade-up" data-aos-delay="100">
              Trusted by brands worldwide to deliver exceptional e-commerce experiences
            </p>
          </div>
          <ClientLogoSlider />
          <div className="text-center mt-5" data-aos="fade-up">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-primary rounded-pill px-4 py-3"
              onClick={() => navigate("/case-studies")}
            >
              View All Case Studies
            </motion.button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
              <img 
                src={require("../assets/section5-image.png")} 
                alt="Free Audit Offer" 
                className="img-fluid rounded-4 shadow-lg" 
              />
            </Col>
            <Col lg={6} data-aos="fade-left">
              <h2 className="display-6 fw-bold mb-4">{Section5Head}</h2>
              <p className="lead mb-5">{Section5SubHead?.[0]?.children?.[0]?.text || ""}</p>
              <ul className="list-unstyled mb-5">
                {[
                  "Sign up for a FREE Audit",
                  "Share brand details",
                  "Receive personalized report"
                ].map((item, idx) => (
                  <li key={idx} className="mb-3 d-flex align-items-center">
                    <span className="bg-white text-primary rounded-circle p-2 me-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-light rounded-pill px-4 py-3"
                onClick={() => navigate("/new-page")}
              >
                Get Your Free Audit
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <Container>
          <div className="text-center mb-8">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Frequently Asked Questions</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }} data-aos="fade-up" data-aos-delay="100">
              Everything you need to know about our Shopify development process
            </p>
          </div>
          
          <Accordion className="mx-auto" style={{ maxWidth: '800px' }} data-aos="fade-up">
            {[
              {
                question: "What is the typical timeline for a Shopify project?",
                answer: "Most Shopify projects take between 6-12 weeks from discovery to launch, depending on complexity. We break this down into clear milestones with regular deliverables."
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer: "Yes, we provide several support packages ranging from basic maintenance to full-scale continuous optimization. Our most popular option includes monthly performance reviews and optimizations."
              },
              {
                question: "Can you migrate my existing store to Shopify?",
                answer: "Absolutely! We've migrated hundreds of stores from platforms like WooCommerce, Magento, and BigCommerce. Our process ensures zero downtime and preserves all your SEO equity."
              },
              {
                question: "How do you ensure high conversion rates?",
                answer: "We combine UX best practices with continuous A/B testing. Every design decision is backed by data from our library of 500+ e-commerce tests and your specific analytics."
              }
            ].map((item, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx} className="mb-3 border-0 shadow-sm overflow-hidden">
                <Accordion.Header className="fw-bold p-4">
                  {item.question}
                </Accordion.Header>
                <Accordion.Body className="p-4">
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default ShopifyStoreBuild;