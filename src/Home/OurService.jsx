import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
// Our Service Images
import AnimatedHeading from "../component/AnimatedHeading";
import { useNavigate } from "react-router-dom";


export default function OurServices() {
  const navigate = useNavigate();

  const services = [
  { title: "URBAN PLANNING", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/SANGAMCITY.jpg", slug: "urban-planning" },
  { title: "REAL STATE", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/realestate.jpg", slug: "real-state" },
  { title: "INFRASTRUCTURE ", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Infrastructure.jpg", slug: "infrastructure" },
  { title: "ARCHITECTURE", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Acrchitecture.jpg", slug: "architecture" },
  { title: "Interior Designing", image: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Interior.png", slug: "interior-designing" },
];

  return (
    <section className="bg-[#F8F6F2] py-[40px] md:py-[50px] lg:py-[77px]">
      <div className=" mx-auto px-4 text-center">
        <AnimatedHeading>

          <p className="text-[14px] font-[600] tracking-widest text-[#000112a6] uppercase mb-4">Our Service</p>
          <h2 className="fontspring text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] leading-[25px] lg:leading-[30px] xl:leading-[45px] text-[#000112] mb-10 max-w-[1140px] mx-auto">
            From planning posh colonies to constructing stunning skyscrapers. We provide all infrastructural services such as
          </h2>
        </AnimatedHeading>

        {/* Swiper with drag + progress line */}
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            400: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Scrollbar, Autoplay]}
          className="!pb-8" // extra padding for scrollbar spacing
        >
          {services && services?.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div onClick={() => navigate(`/services/${service?.slug}`)}
                className="relative h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full overflow-hidden shadow-lg group cursor-grab">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* bg-[#0000007d] */}
                <div className="absolute inset-0 bg-[#000000b3]	 hover:bg-transparent bg-opacity-[10%] flex items-center justify-center">
                  <h3 className="text-white  text-lg font-semibold tracking-wider uppercase hover:text-black">{service.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
