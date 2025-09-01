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
    <section className="w-full h-[50vh] mt-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              {/* Example text */}
              {/* <h1 className="text-white text-3xl font-bold drop-shadow-lg">
                Banner {index + 1}
              </h1> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
