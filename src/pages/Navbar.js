// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import API from '../api';

// const Navbar = () => {
//   const [brand, setBrand] = useState("");

//   useEffect(() => {
//     const fetchNavbar = async () => {
//       const res = await API.get('/navbar');
//       const item = res.data.data[0];
//       setBrand(item?.attributes?.NavbarBrandname || "Brand");
//     };
//     fetchNavbar();
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
//       <Link className="navbar-brand" to="/">{brand}</Link>
//       <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item"><Link to="/Shopify-Store-Build" className="nav-link">Shopify Store Build</Link></li>
//           <li className="nav-item"><Link to="/Landing-Page-Design" className="nav-link">Landing Page Design</Link></li>
//           <li className="nav-item"><Link to="/:case-study-page" className="nav-link">Case Studies</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import API from '../api';

// const Navbar = () => {
//   const [brand, setBrand] = useState("");
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const fetchNavbar = async () => {
//       const res = await API.get('/navbar');
//       const item = res.data.data[0];
//       setBrand(item?.attributes?.NavbarBrandname || "Brand");
//     };
//     fetchNavbar();
//   }, []);

//   const isActive = (path) => {
//     return location.pathname === path ? "active" : "";
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
//       <Link className="navbar-brand fw-bold" to="/">{brand}</Link>
//       <button 
//         className="navbar-toggler" 
//         onClick={toggleMenu}
//         aria-expanded={isMenuOpen}
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <Link 
//               to="/shopify-store-build" 
//               className={`nav-link ${isActive('/shopify-store-build')}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Shopify Store Build
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link 
//               to="/landing-page-design" 
//               className={`nav-link ${isActive('/landing-page-design')}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Landing Page Design
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link 
//               to="/case-studies" 
//               className={`nav-link ${isActive('/case-studies')}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Case Studies
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link 
//               to="/talk-to-us" 
//               className="nav-link btn btn-primary text-white ms-2"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../api';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [brand, setBrand] = useState("");
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await API.get('/navbar?populate=*');
        const item = res.data.data[0];
        setBrand(item?.attributes?.NavbarBrandname || "BOCO");
      } catch (err) {
        console.error("Navbar fetch error:", err);
        setBrand("BOCO");
      }
    };
    fetchNavbar();

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuVariants = {
    open: { 
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300 }
    },
    closed: { 
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {brand}
        </Link>
        
        <button
          className="navbar-toggler border-0 p-0"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
          >
            {!isMenuOpen ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span className="fs-1 boco-text-primary">×</span>
            )}
          </motion.div>
        </button>

        <motion.div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{
            position: isMenuOpen ? 'fixed' : 'relative',
            top: isMenuOpen ? 0 : 'auto',
            left: isMenuOpen ? 0 : 'auto',
            right: isMenuOpen ? 0 : 'auto',
            bottom: isMenuOpen ? 0 : 'auto',
            backgroundColor: isMenuOpen ? '#fff' : 'transparent',
            zIndex: isMenuOpen ? 1000 : 1,
            padding: isMenuOpen ? '2rem' : 0
          }}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {[
              { path: '/shopify-store-build', label: 'Shopify' },
              { path: '/landing-page-design', label: 'Web Design' },
              { path: '/case-studies', label: 'Work' },
              { path: '/about', label: 'About' }
            ].map((item, index) => (
              <motion.li
                key={index}
                className="nav-item mx-2"
                variants={itemVariants}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = 'auto';
                  }}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            
            <motion.li
              className="nav-item ms-lg-3"
              variants={itemVariants}
            >
              <Link
                to="/talk-to-us"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Get in touch
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;