// Achivement.jsx
import React from "react";
import Slider from "react-slick";
import AnimatedHeading from "../component/AnimatedHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achivement = () => {
    const cities = [
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image18.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image19.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image17.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image18.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image19.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image17.png",
        },
    ];

  const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  infinite: true,
  centerMode: true,
  centerPadding: "0px",
  cssEase: "ease-in-out",
  pauseOnHover: false,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024, // tablets / small desktops
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768, // tablets
      settings: {
        slidesToShow: 2,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 460, // phones
      settings: {
        slidesToShow: 1, // 👈 now mobile shows 1 image
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

            <div className="relative max-w-[1200px] mx-auto slider-container">
                <Slider {...settings}>
                    {cities.map((item, index) => (
                        <div key={index}>
                            <div className="slide-item flex justify-center items-center">
                                <img
                                    src={item.img}
                                    alt={`Achievement ${index + 1}`}
                                    className="w-full h-[420px] md:h-[480px] xl:h-[500px] object-cover rounded-xl transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Achivement;
