import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/autoplay";
import AnimatedHeading from "../component/AnimatedHeading";
import "../App.css"; // 👈 Add CSS for blur effect

const Achivement = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cities = [
    { img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image18.png" },
    { img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image19.png" },
    { img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image17.png" },
    { img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image18.png" },
    { img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image19.png" },
    { img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image17.png" },
  ];

  // 🔹 Slick Slider Settings (for Desktop)
  const slickSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="py-8 md:py-12 px-4 bg-white">
      <AnimatedHeading>
        <h2 className="fontspring text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] text-center mb-[25px] text-black">
          Honours and Achievements
        </h2>
      </AnimatedHeading>

      <div className="relative max-w-[1200px] mx-auto">
        {/* 🔹 Render based on screen size */}
        {!isMobile ? (
          // Desktop → Slick Slider
          <Slider {...slickSettings}>
            {cities.map((item, index) => (
              <div key={index}>
                <div className="slide-item flex justify-center items-center">
                  <img
                    src={item.img}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-[430px] md:h-[490px] xl:h-[520px] object-cover rounded-xl transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          // Mobile → Swiper
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {cities.map((city, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center">
                  <img
                    src={city.img}
                    alt={`Achievement ${idx + 1}`}
                    className="w-full h-[430px] md:h-[480px] xl:h-[520px] object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Achivement;
