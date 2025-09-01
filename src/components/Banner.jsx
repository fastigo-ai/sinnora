// const Banner = () => {
//   return (
//     <section
//       className="w-full h-screen bg-black text-white relative flex items-center justify-center"
//       style={{
//         backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/934a2b88873337.5de56582a78a5.png')`,
//         backgroundSize: "fit",
//         backgroundPosition: "center",
//       }}
//     >
//     </section>
//   );
// };

// export default Banner;


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const images = [
      "https://www.houseofkosha.in/cdn/shop/files/15_66b1112e-d35c-4b6e-8d10-ec5add46ddb0.png?v=1743847160&width=1880",
      "https://www.houseofkosha.in/cdn/shop/files/final_2.jpg?v=1755703493&width=1880",
    
  ];

  return (
    <section className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-screen"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen flex items-center justify-center text-white text-4xl font-bold"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
