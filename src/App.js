
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CaseStudies from './pages/CaseStudies';
// import About from './pages/About';
// import FAQ from './pages/FAQ';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/case-studies" element={<CaseStudies />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import CaseStudies from './pages/CaseStudies'
// import ShopifyStoreBuild from './pages/ShopifyStoreBuild'
// import Newpage from './pages/NewPage'
// // import 'react-slideshow-image/dist/styles.css';


// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Case-Studies' element={<CaseStudies/>} />
//         <Route path='/Shopify-Store-Build' element={<ShopifyStoreBuild/>} />
//         <Route path='/Newpage' element={<Newpage/>} />
//         {/* <Route path='/Talktous' element={<Talktous/>} /> */}
//       </Routes>
//     </div>
//   )
// }

// export default App





import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import ShopifyStoreBuild from './pages/ShopifyStoreBuild';
//import LandingPageDesign from './pages/LandingPageDesign';
import TalktoUs from './pages/TalktoUs';
import Newpage from './pages/NewPage';
//import NotFound from './pages/NotFound';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/shopify-store-build" element={<ShopifyStoreBuild />} />
        {/* <Route path="/landing-page-design" element={<LandingPageDesign />} /> */}
        <Route path="/talk-to-us" element={<TalktoUs />} />
        <Route path="/new-page" element={<Newpage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    
  );
}

export default App;