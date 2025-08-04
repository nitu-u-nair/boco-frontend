// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from '../components/Footer';
// import CaseStudyCard from '../components/CaseStudyCard';
// import API from '../api';

// const CaseStudies = () => {
//   const [casePageData, setCasePageData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await API.get('/case-study-card?populate=*');
//         setCasePageData(res.data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   if (!casePageData) return <p className="text-center my-5 text-muted">Loading...</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="container text-center py-5">
//         <p className="text-muted text-uppercase">Case Studies</p>
//         <h1 className="fw-bold">{casePageData.CaseStudyPageHead}</h1>
//         <p>{casePageData.CaseStudyPageSub?.[0]?.children?.[0]?.text}</p>
//       </div>

//       <div className="container">
//         <CaseStudyCard />
//       </div>

//       <div className="container text-center py-5">
//         <h2>{casePageData.CaseStudyPageFooterHead?.[0]?.children?.[0]?.text}</h2>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CaseStudies;


// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from '../components/Footer';
// import CaseStudyCard from '../components/CaseStudyCard';
// import API from '../api';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const CaseStudies = () => {
//   const [casePageData, setCasePageData] = useState(null);
//   const [filter, setFilter] = useState('all');
//   const [filteredCards, setFilteredCards] = useState([]);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });

//     const fetchData = async () => {
//       try {
//         const res = await API.get('/case-study-card?populate=*');
//         setCasePageData(res.data.data);
        
//         // Fetch case studies
//         const caseRes = await API.get('/case-studies?populate=*');
//         setFilteredCards(caseRes.data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleFilter = (type) => {
//     setFilter(type);
//     // In a real app, you would filter based on the API data
//     // This is just a placeholder for the filtering logic
//   };

//   if (!casePageData) {
//     return (
//       <div className="text-center my-5 py-5">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
      
//       <section className="py-5 bg-light">
//         <div className="container text-center py-5" data-aos="fade-up">
//           <p className="text-muted text-uppercase small">Case Studies</p>
//           <h1 className="fw-bold display-4 mb-4">{casePageData.CaseStudyPageHead}</h1>
//           <p className="lead">{casePageData.CaseStudyPageSub?.[0]?.children?.[0]?.text}</p>
//         </div>
//       </section>

//       <section className="py-5">
//         <div className="container">
//           <div className="d-flex justify-content-center mb-5" data-aos="fade-up">
//             <div className="btn-group" role="group">
//               <button 
//                 type="button" 
//                 className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => handleFilter('all')}
//               >
//                 All
//               </button>
//               <button 
//                 type="button" 
//                 className={`btn ${filter === 'shopify' ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => handleFilter('shopify')}
//               >
//                 Shopify
//               </button>
//               <button 
//                 type="button" 
//                 className={`btn ${filter === 'landing' ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => handleFilter('landing')}
//               >
//                 Landing Pages
//               </button>
//               <button 
//                 type="button" 
//                 className={`btn ${filter === 'ecommerce' ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => handleFilter('ecommerce')}
//               >
//                 E-commerce
//               </button>
//             </div>
//           </div>
          
//           <CaseStudyCard filter={filter} />
//         </div>
//       </section>

//       <section className="py-5 bg-light">
//         <div className="container text-center py-5" data-aos="fade-up">
//           <h2 className="display-5 mb-4">{casePageData.CaseStudyPageFooterHead?.[0]?.children?.[0]?.text}</h2>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn btn-primary mt-3"
//           >
//             Get Started With Us
//           </motion.button>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default CaseStudies;



import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';
import API from '../api';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CaseStudies = () => {
  const [casePageData, setCasePageData] = useState(null);
  const [filter, setFilter] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });

    const fetchData = async () => {
      try {
        const res = await API.get('/case-study-card?populate=*');
        setCasePageData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (type) => {
    setFilter(type);
    setActiveFilter(type);
  };

  if (!casePageData) {
    return (
      <div className="min-vh-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <section className="hero-section position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-center text-center py-8">
            <motion.div
              className="col-lg-8 hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-uppercase boco-text-primary fw-bold small mb-3 d-inline-block">
                Case Studies
              </span>
              <h1 className="hero-title">
                {casePageData.CaseStudyPageHead}
              </h1>
              <p className="hero-subtitle">
                {casePageData.CaseStudyPageSub?.[0]?.children?.[0]?.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="boco-section">
        <div className="container">
          <div className="row justify-content-center mb-8">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {['all', 'shopify', 'landing', 'ecommerce'].map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn ${activeFilter === type ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleFilter(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          <CaseStudyCard filter={filter} />
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
            <h2 className="display-5 fw-bold mb-5 boco-text-primary">
              {casePageData.CaseStudyPageFooterHead?.[0]?.children?.[0]?.text}
            </h2>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(43, 27, 77, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg"
            >
              Get Started With Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudies;