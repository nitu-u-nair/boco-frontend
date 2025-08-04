// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";

// const Images = [
//   { url: "/images/sample26.png" },
//   { url: "/images/sample27.png" },
//   { url: "/images/sample28.png" },
// ];

// const Imageslidertwo = () => {
//   return (
//     <div className="relative w-[95vw]">
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

// export default Imageslidertwo;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";

// const Images = [
//   {
//     url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample26_7db93ff7f1.png'
//   },
//   {
//     url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578687/sample27_7c916b30d2.png'
//   },
//   {
//     url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample28_956613db54.png"
//   },
// ];

// const Imageslidertwo = () => {
//   return (
//     <div className="relative w-[95vw] ">
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

// export default Imageslidertwo;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const clientLogos = [
  { 
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample26_7db93ff7f1.png',
    alt: "Client logo 1",
    name: "Fashion Nova"
  },
  { 
    url: 'https://res.cloudinary.com/drtosngvu/image/upload/v1752578687/sample27_7c916b30d2.png',
    alt: "Client logo 2",
    name: "TechGadgets"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample28_956613db54.png",
    alt: "Client logo 3",
    name: "Home & Living"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578537/sample1_ee776cb6fa.png",
    alt: "Client logo 4",
    name: "Beauty Essentials"
  },
  { 
    url: "https://res.cloudinary.com/drtosngvu/image/upload/v1752578542/sample2_383a886e56.png",
    alt: "Client logo 5",
    name: "Sportswear Inc"
  },
];

const ClientLogoSlider = () => {
  return (
    <div className="relative w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-bold mb-10">Trusted By Leading Brands</h3>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-client",
            prevEl: ".swiper-button-prev-client",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-client",
          }}
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clientLogos.map((logo, i) => (
            <SwiperSlide key={i}>
              <motion.div 
                className="flex flex-col items-center p-4"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-32">
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="max-h-16 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">{logo.name}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-8 items-center">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-client mx-2 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-gray-800 hover:bg-primary hover:text-white"
          >
            <FaArrowLeft className="text-sm" />
          </motion.button>
          
          <div className="swiper-pagination-client mx-4 !relative !w-auto"></div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-client mx-2 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-gray-800 hover:bg-primary hover:text-white"
          >
            <FaArrowRight className="text-sm" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;