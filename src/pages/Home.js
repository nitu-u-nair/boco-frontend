// import React, { useEffect } from 'react';
// import Navbar from './Navbar';
// import Footer from '../components/Footer';
// import Imageslider from '../components/ImageSlider';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar />
//       <div className="container py-5">
//         <div className="row align-items-center">
//           <div className="col-md-6 mb-4">
//             <h2 className="fw-bold">We build high‑converting Shopify stores that drive Profit</h2>
//             <p className="lead">We’re a leading Shopify & Shopify Plus agency who design and develop strategic ecommerce websites.</p>
//             <ul>
//               <li>Unmatched Speed & Stability</li>
//               <li>Built for Conversions</li>
//               <li>Reduced App Stack & Developer Dependencies</li>
//             </ul>
//             <div className="mt-3">
//               <button className="btn btn-outline-primary me-2" onClick={()=>navigate('/Newpage')}>
//                 Audit My Website
//               </button>
//               <button className="btn btn-primary" onClick={()=>navigate('/Newpage')}>
//                 Talk To Us →
//               </button>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <img src={require('../assets/feature-image.png')} alt="Feature" className="img-fluid rounded" />
//           </div>
//         </div>
//       </div>

//       <div className="container text-center py-5">
//         <h1 className="display-5 mb-4">Stunningly Crafted Shopify Solutions Driven by Insights</h1>
//         <p className="mb-5">As Shopify Partners and a leading eCommerce Web Design Agency…</p>
//         <Imageslider />
//       </div>

//       <div className="container py-5">
//         <div className="row text-center">
//           <div className="col-md-4 mb-4">
//             <img src={require('../assets/home1.png')} alt="" className="img-fluid mb-3" width="120" height="120"/>
//             <h3>Conversion Rate Optimisation</h3>
//             <p>Ensures your store outperforms benchmarks.</p>
//           </div>
//           <div className="col-md-4 mb-4">
//             <img src={require('../assets/home2.png')} alt="" className="img-fluid mb-3" width="120" height="120"/>
//             <h3>UI / UX Design</h3>
//             <p>Market-leading benchmarks for speed and stability.</p>
//           </div>
//           <div className="col-md-4 mb-4">
//             <img src={require('../assets/home3.png')} alt="" className="img-fluid mb-3" width="120" height="120"/>
//             <h3>Web Development</h3>
//             <p>Phase‑wise updates & smooth delivery.</p>
//           </div>
//         </div>
//       </div>

//       <div className="container text-center py-5">
//         <h2>Read Our Recent Case Studies</h2>
//         <button className="btn btn-outline-primary mt-4" onClick={()=>navigate('/CaseStudies')}>
//           Explore More Case Studies
//         </button>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;


// import React, { useEffect } from 'react';
// import Navbar from './Navbar';
// import Footer from '../components/Footer';
// import Imageslider from '../components/ImageSlider';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }, []);

//   return (
//     <>
//       <Navbar />
      
//       <section className="hero-section py-5">
//         <div className="container py-5">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4" data-aos="fade-right">
//               <h1 className="fw-bold display-5 mb-4">We build high‑converting Shopify stores that drive Profit</h1>
//               <p className="lead mb-4">We're a leading Shopify & Shopify Plus agency who design and develop strategic ecommerce websites.</p>
//               <ul className="list-unstyled mb-4">
//                 <li className="mb-2">
//                   <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                   Unmatched Speed & Stability
//                 </li>
//                 <li className="mb-2">
//                   <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                   Built for Conversions
//                 </li>
//                 <li className="mb-2">
//                   <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                   Reduced App Stack & Developer Dependencies
//                 </li>
//               </ul>
//               <div className="mt-3">
//                 <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn btn-outline-primary me-2"
//                   onClick={() => navigate('/new-page')}
//                 >
//                   Audit My Website
//                 </motion.button>
//                 <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn btn-primary"
//                   onClick={() => navigate('/talk-to-us')}
//                 >
//                   Talk To Us <i className="bi bi-arrow-right ms-1"></i>
//                 </motion.button>
//               </div>
//             </div>
//             <div className="col-md-6" data-aos="fade-left">
//               <img 
//                 src={require('../assets/feature-image.png')} 
//                 alt="Feature" 
//                 className="img-fluid rounded shadow-lg" 
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-5 bg-light">
//         <div className="container text-center py-5">
//           <h1 className="display-5 mb-4" data-aos="fade-up">Stunningly Crafted Shopify Solutions Driven by Insights</h1>
//           <p className="mb-5 lead" data-aos="fade-up" data-aos-delay="100">As Shopify Partners and a leading eCommerce Web Design Agency...</p>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <Imageslider />
//           </div>
//         </div>
//       </section>

//       <section className="py-5">
//         <div className="container py-5">
//           <div className="row text-center">
//             {[
//               {
//                 icon: require('../assets/home1.png'),
//                 title: "Conversion Rate Optimisation",
//                 description: "Ensures your store outperforms benchmarks.",
//                 delay: 100
//               },
//               {
//                 icon: require('../assets/home2.png'),
//                 title: "UI / UX Design",
//                 description: "Market-leading benchmarks for speed and stability.",
//                 delay: 200
//               },
//               {
//                 icon: require('../assets/home3.png'),
//                 title: "Web Development",
//                 description: "Phase‑wise updates & smooth delivery.",
//                 delay: 300
//               }
//             ].map((feature, index) => (
//               <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={feature.delay}>
//                 <div className="p-4 h-100 hover-shadow">
//                   <img 
//                     src={feature.icon} 
//                     alt="" 
//                     className="img-fluid mb-3" 
//                     width="120" 
//                     height="120"
//                   />
//                   <h3>{feature.title}</h3>
//                   <p>{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-5 bg-light">
//         <div className="container text-center py-5">
//           <h2 data-aos="fade-up">Read Our Recent Case Studies</h2>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn btn-outline-primary mt-4"
//             onClick={() => navigate('/case-studies')}
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Explore More Case Studies
//           </motion.button>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
  }, []);

  return (
    <>
      <Navbar />
      
      <section className="hero-section position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-content"
              >
                <h1 className="hero-title">
                  We build high‑converting Shopify stores that drive profit
                </h1>
                <p className="hero-subtitle">
                  We're a leading Shopify & Shopify Plus agency who design and develop strategic ecommerce websites.
                </p>
                <ul className="list-unstyled mb-5">
                  {[
                    "Unmatched Speed & Stability",
                    "Built for Conversions",
                    "Reduced App Stack & Developer Dependencies"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="mb-3 d-flex align-items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => navigate('/new-page')}
                  >
                    Audit My Website
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(43, 27, 77, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate('/talk-to-us')}
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
              >
                <div className="position-absolute top-0 start-0 w-100 h-100 boco-bg-primary boco-rounded-lg" style={{ transform: 'rotate(3deg)', opacity: 0.1 }}></div>
                <img
                  src={require('../assets/feature-image.png')}
                  alt="Feature"
                  className="position-relative img-fluid boco-rounded-lg boco-shadow-xl boco-hover-scale"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="boco-section boco-bg-light">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-4 fw-bold mb-5 boco-text-primary">
              Stunningly Crafted Shopify Solutions Driven by Insights
            </h2>
            <p className="lead boco-text-gray mb-8 mx-auto" style={{ maxWidth: '700px' }}>
              As Shopify Partners and a leading eCommerce Web Design Agency, we empower brands to thrive through strategic design and robust Shopify development.
            </p>
            <ImageSlider />
          </motion.div>
        </div>
      </section>

      <section className="boco-section">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: require('../assets/home1.png'),
                title: "Conversion Rate Optimisation",
                description: "Ensures your store outperforms benchmarks."
              },
              {
                icon: require('../assets/home2.png'),
                title: "UI / UX Design",
                description: "Market-leading benchmarks for speed and stability."
              },
              {
                icon: require('../assets/home3.png'),
                title: "Web Development",
                description: "Phase‑wise updates & smooth delivery."
              }
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="boco-service-card h-100"
                >
                  <div className="boco-service-icon">
                    <img src={feature.icon} alt="" className="img-fluid" width="60" />
                  </div>
                  <h3 className="mb-3 boco-text-primary">{feature.title}</h3>
                  <p className="boco-text-gray mb-0">{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="boco-section boco-bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-5 fw-bold mb-5 boco-text-white">Read Our Recent Case Studies</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate('/case-studies')}
            >
              Explore More Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;