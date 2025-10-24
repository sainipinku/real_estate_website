import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const SliderWithFade = () => {
  const navigate = useNavigate();

  const slides = [
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/RudraMahal.jpg",
      back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/RudraMahal.jpg",
      title: "Rudra Mahal – a luxury five star hotel,  Mundota,Rajasthan ",
      slug: "rudra-mahal"
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/MAJARDAMECH-6_page-0001.jpg",
      back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/MAJARDAMECH-6_page-0001.jpg",
      title: "Drayvavati river - a major South-flowing river in Rajasthan",
      slug: "dravyawati-river"
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Shivam.jpg",
      back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Shivam.jpg",
      title: "SHIVAM MAJESTIC – A STUNNING SKYSCRAPER,JAIPUR",
      slug: "shivam-magnus"
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg",
      back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg",
      slug: "cadmax-group-headoffice",
      title: "Cadmax Consultancy Pvt. Ltd. ; Jaipur",
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/ravi.jpg",
      back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/ravi.jpg",
      title: "CADMAX VELLEY – A POSH COLONY,JAIPUR",
      slug: "ravi-kiran-vihar"
    },
  ];

  return (
    <div className="w-full mx-auto relative">

      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}

        loop={true} // Enable looping

        breakpoints={{
          300: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Autoplay]}
        className="w-full"
      >

        {slides?.map((slide, index) => (
          <SwiperSlide key={index} >
            <div onClick={() => navigate(`/project/${slide?.slug}`)} className="relative w-full h-[400px] sm:h-[450px] md:h-[650px] lg:h-[750px] xl:h-[820px]">
              <img
                src={slide.back}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY IMAGE */}
              <img
                src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/slideroverlay.png"}
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />

              {/* CENTERED CARD WITH FRONT IMAGE + TITLE */}
              <div className="w-[96%] max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[785px] m-auto absolute top-[50px]  inset-0 flex items-center justify-center z-20">
                <div className="w-full bg-white shadow-lg p-[15px] w-[90%] max-w-3xl flex flex-col items-center">
                  <img
                    src={slide.front}
                    alt="Front"
                    className="w-full max-w-[600px] h-[180px] sm:h-[280px] md:h-[300px] lg:h-[380px] object-content mb-4"
                  />
                  <p className="tracking-wider text-center text-[16px] font-[600] text-[#000112a1] uppercase">
                    {slide.title}
                  </p>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}


      </Swiper>
    </div>
  );
};

export default SliderWithFade;
