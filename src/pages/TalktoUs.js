// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import Navbar from "./Navbar";
// import Footer from "../components/Footer";
// import API from "../api";

// const TalktoUs = () => {
//   const [formData, setFormData] = useState({
//     brandname: "",
//     yourname: "",
//     websiteurl: "",
//     emailaddress: "",
//     Phonenumber: "",
//     Monthlystores: "",
//     conversion: "",
//     issue: [],
//     overview: "",
//     today: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         issue: checked
//           ? [...prev.issue, value]
//           : prev.issue.filter((it) => it !== value),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/form-submissions", { data: formData });
//       alert("Form submitted successfully!");
//       setFormData({
//         brandname: "",
//         yourname: "",
//         websiteurl: "",
//         emailaddress: "",
//         Phonenumber: "",
//         Monthlystores: "",
//         conversion: "",
//         issue: [],
//         overview: "",
//         today: "",
//       });
//     } catch (err) {
//       console.error(err);
//       alert("Submission failed.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Container className="my-5">
//         <h1 className="text-center mb-4">Got a Project? Let’s Talk!</h1>
//         <Form onSubmit={handleSubmit}>
//           {[
//             { label: "Brand Name", name: "brandname", type: "text" },
//             { label: "Your Name", name: "yourname", type: "text" },
//             { label: "Website URL", name: "websiteurl", type: "text" },
//             { label: "Email Address", name: "emailaddress", type: "email" },
//             { label: "Phone Number", name: "Phonenumber", type: "tel" },
//           ].map((f) => (
//             <Form.Group className="mb-3" key={f.name}>
//               <Form.Label>{f.label}*</Form.Label>
//               <Form.Control
//                 type={f.type}
//                 name={f.name}
//                 value={formData[f.name]}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//           ))}

//           <Form.Label>Monthly Store Sessions*</Form.Label>
//           <Form.Group className="mb-3">
//             {["Less than 10k", "10k‑50k", "50k‑100k", "100k+"].map((opt, idx) => (
//               <Form.Check
//                 type="radio"
//                 name="Monthlystores"
//                 key={idx}
//                 label={opt}
//                 value={opt}
//                 checked={formData.Monthlystores === opt}
//                 onChange={handleChange}
//                 required
//               />
//             ))}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Current Conversion Rate</Form.Label>
//             <Form.Control
//               name="conversion"
//               value={formData.conversion}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>
//               What issues are you facing? (Select all that apply)*
//             </Form.Label>
//             {[
//               "Website Design & Development",
//               "High Converting Landing Pages",
//               "Technical Maintenance & Support",
//               "Conversion Rate Optimization",
//             ].map((opt, idx) => (
//               <Form.Check
//                 type="checkbox"
//                 key={idx}
//                 label={opt}
//                 value={opt}
//                 checked={formData.issue.includes(opt)}
//                 onChange={handleChange}
//               />
//             ))}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Overview*</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={4}
//               name="overview"
//               value={formData.overview}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>How did you find us today?</Form.Label>
//             <Form.Control
//               name="today"
//               value={formData.today}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <div className="text-center mt-4">
//             <Button variant="primary" type="submit">
//               Submit →
//             </Button>
//           </div>
//         </Form>
//       </Container>

//       <div className="py-5 bg-light text-center">
//         <h2>Faster Websites. Higher conversion. More revenue.</h2>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default TalktoUs;



// import React, { useState,useEffect } from "react";
// import { Container, Form, Button, Alert, Spinner ,Row, Col } from "react-bootstrap";
// //import React, { useState, useEffect } from "react";
// //import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import Navbar from "./Navbar";
// import Footer from "../components/Footer";
// import API from "../api";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const TalktoUs = () => {
//   const [formData, setFormData] = useState({
//     brandname: "",
//     yourname: "",
//     websiteurl: "",
//     emailaddress: "",
//     Phonenumber: "",
//     Monthlystores: "",
//     conversion: "",
//     issue: [],
//     overview: "",
//     today: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }, []);

//   const validate = () => {
//     const newErrors = {};
    
//     if (!formData.brandname.trim()) newErrors.brandname = "Brand name is required";
//     if (!formData.yourname.trim()) newErrors.yourname = "Your name is required";
//     if (!formData.emailaddress.trim()) {
//       newErrors.emailaddress = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.emailaddress)) {
//       newErrors.emailaddress = "Email is invalid";
//     }
//     if (!formData.Monthlystores) newErrors.Monthlystores = "Please select an option";
//     if (formData.issue.length === 0) newErrors.issue = "Please select at least one option";
//     if (!formData.overview.trim()) newErrors.overview = "Overview is required";
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         issue: checked 
//           ? [...prev.issue, value] 
//           : prev.issue.filter((it) => it !== value),
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validate()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       await API.post("/form-submissions", { data: formData });
//       setSubmitSuccess(true);
//       setFormData({
//         brandname: "",
//         yourname: "",
//         websiteurl: "",
//         emailaddress: "",
//         Phonenumber: "",
//         Monthlystores: "",
//         conversion: "",
//         issue: [],
//         overview: "",
//         today: "",
//       });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
      
//       <section className="py-5 bg-light">
//         <Container className="py-4">
//           <h1 className="text-center mb-4" data-aos="fade-up">Got a Project? Let's Talk!</h1>
//           <p className="text-center lead mb-5" data-aos="fade-up" data-aos-delay="100">
//             Fill out the form below and we'll get back to you within 24 hours
//           </p>
          
//           {submitSuccess && (
//             <Alert variant="success" className="text-center" data-aos="fade-up">
//               Thank you! Your submission has been received. We'll contact you soon.
//             </Alert>
//           )}
          
//           <Form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Brand Name*</Form.Label>
//                   <Form.Control 
//                     type="text" 
//                     name="brandname" 
//                     value={formData.brandname}
//                     onChange={handleChange}
//                     isInvalid={!!errors.brandname}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.brandname}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Your Name*</Form.Label>
//                   <Form.Control 
//                     type="text" 
//                     name="yourname" 
//                     value={formData.yourname}
//                     onChange={handleChange}
//                     isInvalid={!!errors.yourname}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.yourname}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Col>
//             </Row>
            
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Website URL</Form.Label>
//                   <Form.Control 
//                     type="url" 
//                     name="websiteurl" 
//                     value={formData.websiteurl}
//                     onChange={handleChange}
//                     placeholder="https://"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email Address*</Form.Label>
//                   <Form.Control 
//                     type="email" 
//                     name="emailaddress" 
//                     value={formData.emailaddress}
//                     onChange={handleChange}
//                     isInvalid={!!errors.emailaddress}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.emailaddress}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Col>
//             </Row>
            
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control 
//                 type="tel" 
//                 name="Phonenumber" 
//                 value={formData.Phonenumber}
//                 onChange={handleChange}
//               />
//             </Form.Group>
            
//             <Form.Group className="mb-3">
//               <Form.Label>Monthly Store Sessions*</Form.Label>
//               <div className="d-flex flex-wrap gap-3">
//                 {["Less than 10k", "10k‑50k", "50k‑100k", "100k+"].map((opt, idx) => (
//                   <Form.Check
//                     key={idx}
//                     type="radio"
//                     name="Monthlystores"
//                     id={`Monthlystores-${idx}`}
//                     label={opt}
//                     value={opt}
//                     checked={formData.Monthlystores === opt}
//                     onChange={handleChange}
//                     inline
//                     isInvalid={!!errors.Monthlystores}
//                   />
//                 ))}
//               </div>
//               {errors.Monthlystores && (
//                 <div className="text-danger small mt-1">{errors.Monthlystores}</div>
//               )}
//             </Form.Group>
            
//             <Form.Group className="mb-3">
//               <Form.Label>Current Conversion Rate</Form.Label>
//               <Form.Control 
//                 name="conversion" 
//                 value={formData.conversion}
//                 onChange={handleChange}
//                 placeholder="e.g. 2.5%"
//               />
//             </Form.Group>
            
//             <Form.Group className="mb-3">
//               <Form.Label>What issues are you facing? (Select all that apply)*</Form.Label>
//               <div className="d-flex flex-column gap-2">
//                 {[
//                   "Website Design & Development",
//                   "High Converting Landing Pages",
//                   "Technical Maintenance & Support",
//                   "Conversion Rate Optimization",
//                 ].map((opt, idx) => (
//                   <Form.Check
//                     key={idx}
//                     type="checkbox"
//                     id={`issue-${idx}`}
//                     label={opt}
//                     value={opt}
//                     checked={formData.issue.includes(opt)}
//                     onChange={handleChange}
//                   />
//                 ))}
//               </div>
//               {errors.issue && (
//                 <div className="text-danger small mt-1">{errors.issue}</div>
//               )}
//             </Form.Group>
            
//             <Form.Group className="mb-3">
//               <Form.Label>Overview*</Form.Label>
//               <Form.Control 
//                 as="textarea" 
//                 rows={4} 
//                 name="overview" 
//                 value={formData.overview}
//                 onChange={handleChange}
//                 isInvalid={!!errors.overview}
//                 placeholder="Tell us about your project, goals, and any specific requirements..."
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.overview}
//               </Form.Control.Feedback>
//             </Form.Group>
            
//             <Form.Group className="mb-4">
//               <Form.Label>How did you find us today?</Form.Label>
//               <Form.Control 
//                 name="today" 
//                 value={formData.today}
//                 onChange={handleChange}
//                 placeholder="Google, Social Media, Referral, etc."
//               />
//             </Form.Group>
            
//             <div className="text-center mt-4">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="btn btn-primary btn-lg"
//                 type="submit"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Spinner
//                       as="span"
//                       animation="border"
//                       size="sm"
//                       role="status"
//                       aria-hidden="true"
//                       className="me-2"
//                     />
//                     Submitting...
//                   </>
//                 ) : (
//                   "Submit →"
//                 )}
//               </motion.button>
//             </div>
//           </Form>
//         </Container>
//       </section>
      
//       <section className="py-5 bg-dark text-white text-center">
//         <Container>
//           <h2 className="display-5 mb-4" data-aos="fade-up">Faster Websites. Higher conversion. More revenue.</h2>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn btn-outline-light btn-lg"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Schedule a Free Consultation
//           </motion.button>
//         </Container>
//       </section>
      
//       <Footer />
//     </>
//   );
// };

// export default TalktoUs;


// import React, { useState, useEffect } from "react";
// import { Container, Form, Alert, Spinner, Row, Col } from "react-bootstrap";
// import Navbar from "./Navbar";
// import Footer from "../components/Footer";
// import API from "../api";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const TalktoUs = () => {
//   const [formData, setFormData] = useState({
//     brandname: "",
//     yourname: "",
//     websiteurl: "",
//     emailaddress: "",
//     Phonenumber: "",
//     Monthlystores: "",
//     conversion: "",
//     issue: [],
//     overview: "",
//     today: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true
//     });
//   }, []);

//   // ... (keep existing validate, handleChange, handleSubmit functions)

//   return (
//     <>
//       <Navbar />
      
//       <section className="py-10 bg-light">
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={8} className="text-center mb-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <span className="text-uppercase text-primary fw-bold small mb-3 d-inline-block">
//                   Contact Us
//                 </span>
//                 <h1 className="display-3 fw-bold mb-4">Got a Project? Let's Talk!</h1>
//                 <p className="lead text-muted mb-0">
//                   Fill out the form below and we'll get back to you within 24 hours
//                 </p>
//               </motion.div>
//             </Col>
//           </Row>

//           <Row className="justify-content-center">
//             <Col lg={8}>
//               {submitSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mb-5"
//                 >
//                   <Alert variant="success" className="text-center">
//                     Thank you! Your submission has been received. We'll contact you soon.
//                   </Alert>
//                 </motion.div>
//               )}

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="card shadow-sm border-0 overflow-hidden"
//               >
//                 <div className="card-body p-5">
//                   <Form onSubmit={handleSubmit}>
//                     <Row className="g-4">
//                       <Col md={6}>
//                         <Form.Group className="mb-4">
//                           <Form.Label className="fw-bold mb-2">Brand Name *</Form.Label>
//                           <Form.Control 
//                             type="text" 
//                             name="brandname" 
//                             value={formData.brandname}
//                             onChange={handleChange}
//                             isInvalid={!!errors.brandname}
//                             className="py-3"
//                           />
//                           <Form.Control.Feedback type="invalid">
//                             {errors.brandname}
//                           </Form.Control.Feedback>
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group className="mb-4">
//                           <Form.Label className="fw-bold mb-2">Your Name *</Form.Label>
//                           <Form.Control 
//                             type="text" 
//                             name="yourname" 
//                             value={formData.yourname}
//                             onChange={handleChange}
//                             isInvalid={!!errors.yourname}
//                             className="py-3"
//                           />
//                           <Form.Control.Feedback type="invalid">
//                             {errors.yourname}
//                           </Form.Control.Feedback>
//                         </Form.Group>
//                       </Col>
//                     </Row>

//                     {/* Rest of the form fields with similar enhanced styling */}

//                     <motion.button 
//                       whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)' }}
//                       whileTap={{ scale: 0.98 }}
//                       className="btn btn-primary w-100 py-3 mt-4"
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Spinner
//                             as="span"
//                             animation="border"
//                             size="sm"
//                             role="status"
//                             aria-hidden="true"
//                             className="me-2"
//                           />
//                           Submitting...
//                         </>
//                       ) : (
//                         "Submit Request"
//                       )}
//                     </motion.button>
//                   </Form>
//                 </div>
//               </motion.div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="py-10 bg-dark text-white text-center">
//         <Container>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="display-5 fw-bold mb-5">Faster Websites. Higher conversion. More revenue.</h2>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn btn-outline-light btn-lg rounded-pill px-5 py-3"
//             >
//               Schedule a Free Consultation
//             </motion.button>
//           </motion.div>
//         </Container>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default TalktoUs;

import React, { useState, useEffect } from "react";
import { Container, Form, Alert, Spinner, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import API from "../api";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// Case study images data
const caseStudies = [
  { 
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png',
    title: "Fashion Store Redesign",
    description: "Increased conversions by 45% with strategic UX improvements",
    link: "/case-studies/fashion-store",
    category: "Shopify Plus"
  },
  { 
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png',
    title: "Mobile Shopping Experience",
    description: "90% faster mobile load times with PWA implementation",
    link: "/case-studies/mobile-experience",
    category: "UI/UX Design"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578539/sample3_07e3cde9bd.png",
    title: "Product Visualization",
    description: "AR integration increased add-to-cart by 32%",
    link: "/case-studies/product-visualization",
    category: "Conversion Optimization"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578605/sample4_add9a5a0ff.png",
    title: "Streamlined Checkout",
    description: "Reduced cart abandonment by 28% with one-page checkout",
    link: "/case-studies/checkout-optimization",
    category: "Shopify Plus"
  }
];

const TalktoUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    brandname: "",
    yourname: "",
    websiteurl: "",
    emailaddress: "",
    Phonenumber: "",
    Monthlystores: "",
    conversion: "",
    issue: [],
    overview: "",
    today: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => {
        if (checked) {
          return { ...prev, issue: [...prev.issue, value] };
        } else {
          return { ...prev, issue: prev.issue.filter(item => item !== value) };
        }
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await API.post('/contact', formData);
      setSubmitSuccess(true);
      setFormData({
        brandname: "",
        yourname: "",
        websiteurl: "",
        emailaddress: "",
        Phonenumber: "",
        Monthlystores: "",
        conversion: "",
        issue: [],
        overview: "",
        today: "",
      });
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validate = (data) => {
    const errors = {};
    
    if (!data.brandname.trim()) errors.brandname = 'Brand name is required';
    if (!data.yourname.trim()) errors.yourname = 'Your name is required';
    if (!data.emailaddress.trim()) {
      errors.emailaddress = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(data.emailaddress)) {
      errors.emailaddress = 'Email is invalid';
    }
    
    return errors;
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Value Proposition */}
      <section className="py-12 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="display-3 fw-bold mb-4">We Build High-Converting Shopify Stores</h1>
                <p className="lead mb-5">
                  As Shopify Partners and a leading eCommerce Web Design Agency, we empower brands to 
                  thrive through strategic design and robust Shopify development.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-light btn-lg rounded-pill px-5 py-3"
                >
                  View Our Work
                </motion.button>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png" 
                    alt="Shopify store example" 
                    className="img-fluid rounded-4" 
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 p-4 bg-gradient-to-top from-black/80 to-transparent">
                    <span className="badge bg-primary mb-2">Featured Project</span>
                    <h3 className="text-white mb-0">Fashion Store Redesign</h3>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Case Studies Slider */}
      <section className="py-10 bg-light">
        <Container>
          <Row className="justify-content-center mb-8">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-uppercase text-primary fw-bold small mb-3 d-inline-block">
                  Our Work
                </span>
                <h2 className="display-4 fw-bold mb-4">Shopify Store Builds That Convert</h2>
                <p className="lead text-muted mb-0">
                  Explore our portfolio of high-performing Shopify stores
                </p>
              </motion.div>
            </Col>
          </Row>

          <div className="position-relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".case-study-next",
                prevEl: ".case-study-prev",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {caseStudies.map((study, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="card border-0 overflow-hidden shadow-sm h-100"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                      <img
                        src={study.url}
                        alt={study.title}
                        className="img-fluid w-100 h-100 object-cover"
                      />
                      <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-0 hover-opacity-50 transition-all duration-300 d-flex align-items-center justify-content-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="btn btn-primary"
                        >
                          View Case Study
                        </motion.button>
                      </div>
                    </div>
                    <div className="card-body">
                      <span className="badge bg-primary-soft text-primary mb-2">{study.category}</span>
                      <h3 className="h4 mb-2">{study.title}</h3>
                      <p className="text-muted mb-0">{study.description}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex justify-content-center mt-5">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#0d6efd" }}
                whileTap={{ scale: 0.9 }}
                className="case-study-prev btn btn-outline-primary btn-icon rounded-circle mx-2"
              >
                <FaArrowLeft />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#0d6efd" }}
                whileTap={{ scale: 0.9 }}
                className="case-study-next btn btn-outline-primary btn-icon rounded-circle mx-2"
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-uppercase text-primary fw-bold small mb-3 d-inline-block">
                  Contact Us
                </span>
                <h1 className="display-3 fw-bold mb-4">Got a Project? Let's Talk!</h1>
                <p className="lead text-muted mb-0">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5"
                >
                  <Alert variant="success" className="text-center">
                    Thank you! Your submission has been received. We'll contact you soon.
                  </Alert>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card shadow-sm border-0 overflow-hidden"
              >
                <div className="card-body p-5">
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-4">
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-bold mb-2">Brand Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="brandname" 
                            value={formData.brandname}
                            onChange={handleChange}
                            isInvalid={!!errors.brandname}
                            className="py-3"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.brandname}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-bold mb-2">Your Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="yourname" 
                            value={formData.yourname}
                            onChange={handleChange}
                            isInvalid={!!errors.yourname}
                            className="py-3"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.yourname}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Additional form fields would go here */}

                    <motion.button 
                      whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-primary w-100 py-3 mt-4"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </motion.button>
                  </Form>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Value Proposition Section */}
      <section className="py-10 bg-dark text-white">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <motion.div 
                className="text-center p-4 h-100"
                whileHover={{ y: -5 }}
              >
                <div className="icon-xl bg-primary-soft text-primary rounded-circle mb-4 mx-auto">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <h3 className="h4 mb-3">Unmatched Speed</h3>
                <p className="mb-0">
                  Average page load times under 1.5 seconds for optimal conversions
                </p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div 
                className="text-center p-4 h-100"
                whileHover={{ y: -5 }}
              >
                <div className="icon-xl bg-primary-soft text-primary rounded-circle mb-4 mx-auto">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h3 className="h4 mb-3">Built for Conversions</h3>
                <p className="mb-0">
                  Data-driven designs that increase conversion rates by 30-50%
                </p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div 
                className="text-center p-4 h-100"
                whileHover={{ y: -5 }}
              >
                <div className="icon-xl bg-primary-soft text-primary rounded-circle mb-4 mx-auto">
                  <i className="bi bi-stack"></i>
                </div>
                <h3 className="h4 mb-3">Reduced App Stack</h3>
                <p className="mb-0">
                  Custom solutions that minimize app dependencies and monthly costs
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default TalktoUs;