// import React, { useEffect, useState } from 'react';
// import API from '../api';

// const CaseStudyCard = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       const res = await API.get('/case-studies?populate=*');
//       const data = res.data.data;
//       const images = data.map((item) => item.attributes.image?.data?.attributes?.url);
//       setCards(images);
//     };

//     fetchCards();
//   }, []);

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         {cards.map((url, index) => (
//           <div className="col-md-6 col-lg-4 mb-4" key={index}>
//             <div className="card shadow-sm">
//               <img src={`http://localhost:1337${url}`} alt="Case Study" className="card-img-top" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CaseStudyCard;


// import React, { useEffect, useState } from 'react';
// import API from '../api';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const CaseStudyCard = ({ filter }) => {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init();
    
//     const fetchCards = async () => {
//       try {
//         const res = await API.get('/case-studies?populate=*');
//         const data = res.data.data;
        
//         const formattedCards = data.map((item) => ({
//           id: item.id,
//           title: item.attributes.title,
//           description: item.attributes.description,
//           category: item.attributes.category,
//           url: item.attributes.image?.data?.attributes?.url,
//           slug: item.attributes.slug
//         }));
        
//         setCards(formattedCards);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching case studies:", error);
//         setLoading(false);
//       }
//     };
    
//     fetchCards();
//   }, []);

//   const filteredCards = filter === 'all' 
//     ? cards 
//     : cards.filter(card => card.category === filter);

//   if (loading) {
//     return (
//       <div className="text-center py-5">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="row justify-content-center">
//       {filteredCards.map((card, index) => (
//         <div 
//           className="col-md-6 col-lg-4 mb-4" 
//           key={card.id}
//           data-aos="fade-up"
//           data-aos-delay={(index % 3) * 100}
//         >
//           <motion.div 
//             whileHover={{ y: -10 }}
//             className="card shadow-sm h-100 border-0"
//           >
//             <div className="card-img-top overflow-hidden">
//               <img 
//                 src={`http://localhost:1337${card.url}`} 
//                 alt="Case Study" 
//                 className="img-fluid w-100"
//                 style={{ height: '250px', objectFit: 'cover' }}
//               />
//             </div>
//             <div className="card-body">
//               <h5 className="card-title">{card.title}</h5>
//               <p className="card-text text-muted">{card.description}</p>
//             </div>
//             <div className="card-footer bg-white border-0">
//               <Link 
//                 to={`/case-studies/${card.slug}`} 
//                 className="btn btn-sm btn-outline-primary"
//               >
//                 View Case Study
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CaseStudyCard;

import React, { useEffect, useState } from 'react';
import API from '../api';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:1337';

const CaseStudyCard = ({ filter }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
    
    const fetchCards = async () => {
      try {
        const res = await API.get('/case-studies?populate=*');
        const data = res.data.data;
        
        const formattedCards = data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          description: item.attributes.description,
          category: item.attributes.category,
          url: item.attributes.image?.data?.attributes?.url,
          slug: item.attributes.slug,
          client: item.attributes.client,
          results: item.attributes.results
        }));
        
        setCards(formattedCards);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching case studies:", error);
        setLoading(false);
      }
    };
    
    fetchCards();
  }, []);

  const filteredCards = filter === 'all' 
    ? cards 
    : cards.filter(card => card.category === filter);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4 justify-content-center">
      {filteredCards.map((card, index) => (
        <div 
          className="col-md-6 col-lg-4" 
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={(index % 3) * 100}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="card h-100 border-0 bg-transparent overflow-hidden"
          >
            <div className="position-relative overflow-hidden rounded-4" style={{ height: '320px' }}>
              <motion.img 
                src={`${API_BASE_URL}${card.url}`} 
                alt="Case Study" 
                className="img-fluid w-100 h-100 object-cover"
                animate={{
                  scale: hoveredCard === card.id ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-4 bg-gradient-dark-top">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredCard === card.id ? 1 : 0,
                    y: hoveredCard === card.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="d-flex gap-2 mb-2">
                    {card.results?.map((result, i) => (
                      <span key={i} className="badge bg-primary rounded-pill">{result}</span>
                    ))}
                  </div>
                </motion.div>
                <h5 className="text-white mb-0">{card.title}</h5>
                <p className="text-light mb-0 small">{card.client}</p>
              </div>
            </div>
            
            <motion.div 
              className="mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted">{card.description}</p>
              <Link 
                to={`/case-studies/${card.slug}`} 
                className="btn btn-link text-decoration-none ps-0"
              >
                Read Case Study <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyCard;
