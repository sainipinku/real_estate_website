import "../App.css"
import Header from '../component/Header';
import OurServices from './OurService';
import WhyChooseUs from './WhyChooseUs';
import WorkSlider from "./WorkSlider";
import CitySlider from "./CitySlider";
import TestimonialSlider from "./TestimonialSlider";
import Readybring from "./ReadyBring";
import Footer from "../component/Footer";
import home from "../Json/Choose.json"
import ClientSlider from "./ClientSlider";
import AnimatedHeading from "../component/AnimatedHeading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Main() {
  const navigate = useNavigate();

  const slides = [
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
    },
    {
      front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg",
    },
  ]
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Helmet>
        <title>Rajasthan’s Best Urban Planning | Real Estate Firm | Cadmax</title>
        <meta
          name="description"
          content="Cadmax pro delivers top-tier urban planning, real estate development, infrastructure planning, and interior design and planner services across Jaipur, Rajasthan"
        />
        <meta
          name="keywords"
          content=" Best urban planners, Land survey in Jaipur, Interior design services in Jaipur, ⁠Architecture Services Services in Jaipur, Infrastructure service in Jaipur, Real Estate Services in Jaipur"
        />
      </Helmet>
      <div className="min-h-screen ">
        <Header />
        <div
          className="relative h-[425px] md:h-[560px] lg:h-[860px] md:mt-[-150px]"
        >
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
            className="w-full h-full"
          >

            {slides?.map((slide, index) => (
              <SwiperSlide key={index} >
                <div className="relative w-full h-full">
                  <img
                    src={slide.front}
                    alt="Slide"
                    className="object-cover w-full h-full"
                  />
                  {/* <div className="absolute inset-0 bg-black/40"></div> */}
                  <div className='absolute  left-[0] right-[0] bottom-[50px] w-full max-w-[1320px] m-auto px-[15px]'>
                    <h1 className='mb-[15px] fontspring text-[30px] md:text-[60px] lg:text-[80px] text-white leading-[35px] md:leading-[65px] lg:leading-[85px] pe-[10px] md:pe-[100px] lg:pe-[160px] '>Your Dreams, Our Design</h1>
                    <p className='text-[15px] md:text-[18px] lg:text-[20px] text-[#ffffffd1] pe-[0px] md:pe-[150px] lg:pe-[300px]'>
                      At cadmax projects, we transform barren lands to dream destinations and routine spaces to elegant environments through our unique combination of creative planning and  designing.
                    </p>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='fontspring bg-[#94A393] px-[15px] py-[20px] text-center text-[20px] text-white'>Let’s design spaces that reflects your ambitions</div>
        <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-full md:w-1/2 mb-[40px] lg:mb-[40px]">
              <img
                src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/hom2.jpg"}
                alt="Interior"
                className="w-full h-auto object-cover"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="0"
                data-aos-once="true"
              />
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="0"
                data-aos-once="true"
                className="absolute left-[-30px] bottom-[-30px] md:left-[-90px] md:bottom-[-50px]"
              >
                <img
                  src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/homebg.jpg"}
                  alt="Interior"
                  className="w-full max-w-[200px] md:max-w-[300px] h-auto object-cover"
                />
              </div>
            </div>


            <div className="w-full md:w-1/2 text-center md:text-left">
              <AnimatedHeading>
                <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112] capitalize ">
                  Designing majestic spaces
                  <br />  since 2005</h2>
                <p className="mt-6 text-[16px] md:text-[18px] xl:text-[20px] font-[400] text-[#00011299]">
                  Cadmax Projects is India’s leading urban planning firm of 2025, based in Rajasthan that provides urban planning, infrastructure, real estate architecture, and interior design services that elevate the living standards of being. <br /><br />
                  With 20 years of experience, our team combines accuracy with creativity to redefine untapped environments to living milestones
                </p>
              </AnimatedHeading>
              <button onClick={() => { navigate("/about") }} className="min-w-[160px] xl:min-w-[220px] mt-8 px-[10px] py-[13px] tracking-widest border border-[94A393] text-[#94A393] text-[14px] font-[600] tracking-wide text-[#94A393] hover:bg-[#94A393] hover:text-[#fff] transition-all uppercase tracking-wider">
                More About Us
              </button>
            </div>
          </div>
        </section>
        <OurServices />
        <WhyChooseUs home={home?.home} />
        <div className="relative">
          <h2 className='absolute  top-[20px] md:top-[30px] lg:top-[50px] xl:top-[80px] left-[0] right-[0] z-[2] fontspring text-[30px] md:text-[40px] xl:text-[50px] text-white text-center'>Our Work</h2>
          <WorkSlider />
        </div>
        <CitySlider />
        <div className="relative">
          <h2 className='absolute top-[20px] md:top-[30px] lg:top-[50px] xl:top-[80px] left-[0] right-[0] z-[2] fontspring text-[25px] md:text-[35px] xl:text-[50px] text-white text-center'>Our Client and Partners</h2>
          <ClientSlider />
        </div>
        <TestimonialSlider />
        <Readybring />
        <Footer />
      </div >
    </>
  );
}

export default Main;
