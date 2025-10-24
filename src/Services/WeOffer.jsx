import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import AnimatedHeading from "../component/AnimatedHeading";

export default function WeOffer({ services }) {
  return (
    <section className="bg-[#F8F6F2] py-[40px] md:py-[50px] lg:py-[77px]">
      <div className=" mx-auto px-4 text-center">
        <AnimatedHeading>
          <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] mb-[40px] text-[#000112]">What We Offer</h2>
        </AnimatedHeading>
        {/* Swiper with drag + progress line */}
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true} // Enable looping
          breakpoints={{
            300: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="w-full "
        >
          {services && services?.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-[300px] md:h-[500px]  lg:h-[450px] w-full overflow-hidden shadow-lg group cursor-grab">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-[10%] flex items-end justify-start px-[15px] pb-[15px]">
                  <h3 className="fontspring text-black text-[20px] md:text-[24px] lg:text-[28px] text-left tracking-wider leading-[22px] md:leading-[28px] lg:leading-[30px]">{service.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
