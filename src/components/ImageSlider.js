// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper/modules";
// // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // import "swiper/css";
// // import "swiper/css/navigation";

// // const Images = [
// //   { url: "/images/sample1.png" },
// //   { url: "/images/sample2.png" },
// //   { url: "/images/sample3.png" },
// //   { url: "/images/sample4.png" },
// //   { url: "/images/sample5.png" },
// //   { url: "/images/sample6.png" },
// //   { url: "/images/sample7.png" },
// //   { url: "/images/sample8.png" },
// // ];

// // const Imageslider = () => {
// //   return (
// //     <div className="relative w-[95vw] mx-auto">
// //       <Swiper
// //         modules={[Navigation]}
// //         navigation={{
// //           nextEl: ".swiper-button-next-custom",
// //           prevEl: ".swiper-button-prev-custom",
// //         }}
// //         spaceBetween={0}
// //         slidesPerView={6}
// //         breakpoints={{
// //           320: { slidesPerView: 2 },
// //           640: { slidesPerView: 3 },
// //           768: { slidesPerView: 4 },
// //           1024: { slidesPerView: 5 },
// //           1280: { slidesPerView: 6 },
// //         }}
// //       >
// //         {Images.map((img, i) => (
// //           <SwiperSlide key={i}>
// //             <img
// //               src={img.url}
// //               alt={`Slide ${i}`}
// //               className="w-[250px] h-[300px] object-contain"
// //             />
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>

// //       {/* Custom Arrows */}
// //       <button className="swiper-button-prev-custom absolute bottom-[-30px] left-6 p-3 rounded-full z-10 bg-light-pink">
// //         <FaArrowLeft />
// //       </button>
// //       <button className="swiper-button-next-custom absolute bottom-[-30px] right-6 p-3 rounded-full z-10 bg-light-pink">
// //         <FaArrowRight />
// //       </button>
// //     </div>
// //   );
// // };

// // export default Imageslider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";

// const Images = [
//   {
//     url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png'
//   },
//   {
//     url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png'
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578539/sample3_07e3cde9bd.png"
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578605/sample4_add9a5a0ff.png"
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578600/sample5_21c25e1525.png"
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578613/sample6_41e7fef700.png"
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578611/sample7_cd83469045.png"
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578604/sample8_eb71d3ce0c.png"
//   },
// ];

// const Imageslider = () => {
//   return (
//     <div className="relative w-[95vw] mx-auto">
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         spaceBetween={0}
//         slidesPerView={6}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 5 },
//           1280: { slidesPerView: 6 },
//         }}
//       >
//         {Images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={img.url}
//               alt={`Slide ${i}`}
//               className="w-[250px] h-[300px] object-contain"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Arrows */}
//       <button className="swiper-button-prev-custom absolute bottom-[-30px] left-6 p-3 rounded-full z-10 bg-light-pink">
//         <FaArrowLeft />
//       </button>
//       <button className="swiper-button-next-custom absolute bottom-[-30px] right-6 p-3 rounded-full z-10 bg-light-pink">
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// export default Imageslider;



// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Images = [
//   { url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png' },
//   { url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png' },
//   { url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578539/sample3_07e3cde9bd.png" },
//   { url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578605/sample4_add9a5a0ff.png" },
//   { url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578600/sample5_21c25e1525.png" },
//   { url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578613/sample6_41e7fef700.png" },
//   { url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578611/sample7_cd83469045.png" },
//   { url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578604/sample8_eb71d3ce0c.png" },
// ];

// const Imageslider = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className="relative w-[95vw] mx-auto" data-aos="fade-up">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         spaceBetween={20}
//         slidesPerView={6}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 5 },
//           1280: { slidesPerView: 6 },
//         }}
//       >
//         {Images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="p-3"
//             >
//               <img
//                 src={img.url}
//                 alt={`Slide ${i}`}
//                 className="w-full h-[300px] object-contain hover:shadow-lg rounded-lg"
//               />
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
      
//       {/* Custom Arrows */}
//       <motion.button 
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="swiper-button-prev-custom absolute top-1/2 -left-4 p-3 rounded-full z-10 bg-white shadow-lg hover:bg-primary hover:text-white"
//       >
//         <FaArrowLeft />
//       </motion.button>
//       <motion.button 
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="swiper-button-next-custom absolute top-1/2 -right-4 p-3 rounded-full z-10 bg-white shadow-lg hover:bg-primary hover:text-white"
//       >
//         <FaArrowRight />
//       </motion.button>
//     </div>
//   );
// };

// export default Imageslider;


import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const Images = [
  { 
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png',
    alt: "E-commerce store design",
    title: "Fashion Store Redesign",
    category: "Shopify Plus"
  },
  { 
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png',
    alt: "Mobile app interface",
    title: "Mobile Shopping Experience",
    category: "UI/UX Design"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578539/sample3_07e3cde9bd.png",
    alt: "Product page design",
    title: "Product Visualization",
    category: "Conversion Optimization"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578605/sample4_add9a5a0ff.png",
    alt: "Checkout process",
    title: "Streamlined Checkout",
    category: "Shopify Plus"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578600/sample5_21c25e1525.png",
    alt: "Brand identity",
    title: "Luxury Branding",
    category: "Visual Identity"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578613/sample6_41e7fef700.png",
    alt: "Homepage design",
    title: "Homepage Experience",
    category: "Web Design"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578611/sample7_cd83469045.png",
    alt: "Marketing campaign",
    title: "Seasonal Campaign",
    category: "Digital Marketing"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578604/sample8_eb71d3ce0c.png",
    alt: "Mobile optimization",
    title: "Mobile First Design",
    category: "Responsive Design"
  },
];

const ImageSlider = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden py-10">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next-main",
          prevEl: ".swiper-button-prev-main",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        effect={'fade'}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Images.map((img, i) => (
          <SwiperSlide key={i}>
            <motion.div 
              className="relative group overflow-hidden rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-[400px] object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-primary">{img.category}</span>
                  <h3 className="text-xl font-bold mt-1">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation */}
      <div className="flex justify-center mt-8 space-x-4">
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#0d6efd" }}
          whileTap={{ scale: 0.9 }}
          className="swiper-button-prev-main flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-800 hover:text-white"
        >
          <FaArrowLeft />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#0d6efd" }}
          whileTap={{ scale: 0.9 }}
          className="swiper-button-next-main flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-800 hover:text-white"
        >
          <FaArrowRight />
        </motion.button>
      </div>
    </div>
  );
};

export default ImageSlider;