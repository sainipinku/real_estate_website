import "../App.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import AnimatedHeading from "../component/AnimatedHeading";
import { useState } from "react";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "URBAN PLANNING", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/service22.jpg", slug: "urban-planning" },
    { title: "REAL ESTATE", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/services11.jpg", slug: "real-estate" },
    { title: "INFRASTRUCTURE ", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Infrastructure.jpg", slug: "infrastructure" },
    { title: "ARCHITECTURE", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/services44.jpg", slug: "architecture" },
    { title: "INTERIOR DESIGNING", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/service33.jpg", slug: "interior-designing" },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        {/* Hero section */}
        <div className="relative md:mt-[-300px]">
          <img
            src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/a-panoramic-view-of-the-city-with-skyscrapers-surrounded-by-greenery-in-a-miniature-model-highlights-the-balance-between-urbanization-and-ecology-photo.jpg"
            alt="Logo"
            className="object-cover object-top min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
            <AnimatedHeading>
              <h2 className="fontspring text-[24px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white">
                Explore our services
              </h2>
            </AnimatedHeading>
          </div>
        </div>



        <div className="w-full py-[40px] px-[15px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            loop={true}
            spaceBetween={15}
            centeredSlides={false}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
          >
            {services && services.map((service, index) => (
              <SwiperSlide
                key={index}
                style={{
                  flexBasis:
                    window.innerWidth >= 1024
                      ? hoveredIndex === index
                        ? "50%"      // slightly smaller to avoid overflow
                        : hoveredIndex !== null
                          ? "30%"  // balanced so total ≈ 100%
                          : "33.33%"
                      : "100%"
                }}
              >
                <Link
                  to={`/services/${service?.slug}`}
                  className="relative group cursor-pointer overflow-hidden w-full h-full "
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={service.image}
                    loading="lazy"
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="hover:text-yellow-400 text-white text-[20px] md:text-[22px] uppercase font-semibold tracking-wide text-center">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
