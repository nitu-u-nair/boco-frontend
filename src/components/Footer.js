// import React, { useEffect, useState } from 'react';
// import API from '../api';

// const Footer = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchFooter = async () => {
//       const res = await API.get('/footer?populate=*');
//       const item = res.data?.data?.[0];
//       setData({
//         heading: item?.attributes?.footerHeading,
//         subText1: item?.attributes?.FootersubText1,
//         subText2: item?.attributes?.FootersubText2,
//       });
//     };

//     fetchFooter();
//   }, []);

//   if (!data) return null;

//   return (
//     <footer className="bg-light text-dark py-4 mt-5">
//       <div className="container">
//         <h4>{data.heading}</h4>
//         <p>{data.subText1}</p>
//         <ul className="list-unstyled">
//           {data.subText2?.map((txt, idx) => (
//             <li key={idx}>{txt}</li>
//           ))}
//         </ul>
//         <p className="text-muted mt-4">&copy; BOCO 2024</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React, { useEffect, useState } from 'react';
// import API from '../api';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   FaFacebook, 
//   FaTwitter, 
//   FaInstagram, 
//   FaLinkedin, 
//   FaYoutube 
// } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Footer = () => {
//   const [data, setData] = useState(null);
//   const [year, setYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });

//     const fetchFooter = async () => {
//       const res = await API.get('/footer?populate=*');
//       const item = res.data?.data?.[0];
//       setData({
//         heading: item?.attributes?.footerHeading,
//         subText1: item?.attributes?.FootersubText1,
//         subText2: item?.attributes?.FootersubText2,
//       });
//     };
//     fetchFooter();
//   }, []);

//   if (!data) return null;

//   return (
//     <footer className="bg-dark text-white py-5" data-aos="fade-up">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 mb-4">
//             <h4 className="mb-4">{data.heading}</h4>
//             <p className="text-muted">{data.subText1}</p>
//             <div className="d-flex gap-3 mt-4">
//               <motion.a 
//                 href="#" 
//                 whileHover={{ y: -5 }}
//                 className="text-white"
//               >
//                 <FaFacebook size={20} />
//               </motion.a>
//               <motion.a 
//                 href="#" 
//                 whileHover={{ y: -5 }}
//                 className="text-white"
//               >
//                 <FaTwitter size={20} />
//               </motion.a>
//               <motion.a 
//                 href="#" 
//                 whileHover={{ y: -5 }}
//                 className="text-white"
//               >
//                 <FaInstagram size={20} />
//               </motion.a>
//               <motion.a 
//                 href="#" 
//                 whileHover={{ y: -5 }}
//                 className="text-white"
//               >
//                 <FaLinkedin size={20} />
//               </motion.a>
//               <motion.a 
//                 href="#" 
//                 whileHover={{ y: -5 }}
//                 className="text-white"
//               >
//                 <FaYoutube size={20} />
//               </motion.a>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <h5 className="mb-4">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2">
//                 <Link to="/" className="text-muted">Home</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/shopify-store-build" className="text-muted">Shopify Services</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/landing-page-design" className="text-muted">Landing Pages</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/case-studies" className="text-muted">Case Studies</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/talk-to-us" className="text-muted">Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-4 mb-4">
//             <h5 className="mb-4">Resources</h5>
//             <ul className="list-unstyled">
//               {data.subText2?.map((txt, idx) => (
//                 <li key={idx} className="mb-2 text-muted">{txt}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <hr className="my-4 bg-secondary" />
//         <div className="row">
//           <div className="col-md-6">
//             <p className="text-muted small">
//               &copy; {year} BOCO. All rights reserved.
//             </p>
//           </div>
//           <div className="col-md-6 text-md-end">
//             <p className="text-muted small">
//               <Link to="/privacy-policy" className="text-muted me-3">Privacy Policy</Link>
//               <Link to="/terms" className="text-muted">Terms of Service</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const [data, setData] = useState(null);
  const [year] = useState(new Date().getFullYear());
  const [emailHover, setEmailHover] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    const fetchFooter = async () => {
      try {
        const res = await API.get('/footer?populate=*');
        const item = res.data?.data?.[0];
        setData({
          heading: item?.attributes?.footerHeading || "Let's build something great",
          subText1: item?.attributes?.FootersubText1 || "Ready to discuss your project?",
          subText2: item?.attributes?.FootersubText2 || ["Services", "Work", "About", "Blog"],
          email: item?.attributes?.email || "hello@example.com",
          address: item?.attributes?.address || "123 Design Street, Creative City"
        });
      } catch (err) {
        console.error("Footer fetch error:", err);
        setData({
          heading: "Let's build something great",
          subText1: "Ready to discuss your project?",
          subText2: ["Services", "Work", "About", "Blog"],
          email: "hello@example.com",
          address: "123 Design Street, Creative City"
        });
      }
    };
    fetchFooter();
  }, []);

  if (!data) return null;

  return (
    <footer className="boco-footer">
      <div className="container">
        <div className="row g-5 mb-8">
          <div className="col-lg-5">
            <motion.h2
              className="boco-footer-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.heading}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="lead mb-5" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{data.subText1}</p>
              
              <motion.a
                href={`mailto:${data.email}`}
                className="d-inline-flex align-items-center boco-text-white text-decoration-none fs-5 boco-footer-link"
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
              >
                {data.email}
                <motion.span
                  animate={{ x: emailHover ? 5 : 0 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <FiArrowUpRight className="ms-2" />
                </motion.span>
              </motion.a>
              
              <p className="mt-3" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{data.address}</p>
            </motion.div>
          </div>
          
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-4">
                <h5 className="text-uppercase mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 'var(--boco-font-size-sm)', fontWeight: 'var(--boco-font-semibold)' }}>Explore</h5>
                <ul className="list-unstyled">
                  {data.subText2?.map((txt, idx) => (
                    <motion.li
                      key={idx}
                      className="mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Link to={`/${txt.toLowerCase()}`} className="boco-footer-link">
                        {txt}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="col-md-4">
                <h5 className="text-uppercase mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 'var(--boco-font-size-sm)', fontWeight: 'var(--boco-font-semibold)' }}>Services</h5>
                <ul className="list-unstyled">
                  {['Shopify Design', 'Web Development', 'Branding', 'SEO'].map((service, idx) => (
                    <motion.li
                      key={idx}
                      className="mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Link to={`/services#${service.toLowerCase().replace(' ', '-')}`}
                        className="boco-footer-link">
                        {service}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="col-md-4">
                <h5 className="text-uppercase mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 'var(--boco-font-size-sm)', fontWeight: 'var(--boco-font-semibold)' }}>Connect</h5>
                <div className="d-flex gap-3">
                  {[
                    { icon: <FaFacebook />, url: '#' },
                    { icon: <FaTwitter />, url: '#' },
                    { icon: <FaInstagram />, url: '#' },
                    { icon: <FaLinkedin />, url: '#' },
                    { icon: <FaYoutube />, url: '#' }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      className="boco-text-white fs-5"
                      whileHover={{ y: -3, color: 'var(--boco-accent)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-top pt-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1) !important' }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="small mb-md-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                &copy; {year} BOCO. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                <Link to="/privacy-policy" className="small text-decoration-none boco-footer-link">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="small text-decoration-none boco-footer-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
