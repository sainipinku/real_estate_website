import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const ClientSlider = () => {

    const slides = [
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/ASHIYANA.png", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/ASHIYANA.png", title: 'Ashiana Housing Ltd' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/KEDIABUILDERS.jpg", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/KEDIABUILDERS.jpg", title: 'Kedia Builders & Colonizers' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/MAHIMA.png", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/MAHIMA.png", title: 'Manglam Group' },
    { front: 'https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/MAHINDRAW.png', back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/MAHINDRAW.png", title: 'Mahindra World City, Jaipur' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/MANGLAMGROUP.png", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/MANGLAMGROUP.png", title: 'Mahima Group' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/riyasat.jpg", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/riyasat.jpg", title: 'Riyasat GROUP, Jaipur' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/tvtv.jpg", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/tvtv.jpg", title: 'TATA Projects Enterprise' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/ultratech.jpg", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/ultratech.jpg", title: 'UltraTech Cement Ltd' },
    { front: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/KGK-Realty-logo-210x300.png", back: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/logo/KGK-Realty-logo-210x300.png", title: 'KGK Realty' },

];

    return (
        <div className="relative w-full mx-auto">
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[650px] lg:h-[750px] xl:h-[820px]">
                            {/* Background */}
                            <img
                                src={slide.back}
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Optional overlay */}
                            <img
                                src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/slideroverlay.png"}
                                alt="Overlay"
                                className="absolute inset-0 w-full h-full object-cover z-10"
                            />

                            {/* Content Card */}
                            <div className="relative z-20 flex justify-center items-center h-full px-4">
                                <div className="bg-white shadow-lg p-6 w-full max-w-2xl text-center rounded">
                                    <img
                                        src={slide.front}
                                        alt="Front"
                                        className="w-full max-w-[300px] h-[200px] object-contain mx-auto mb-4"
                                    />
                                    <p className="text-gray-700 font-semibold uppercase tracking-wide text-[16px]">
                                        {slide.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                {/* <div
                    ref={prevRef}
                    className="hidden md:flex prev-btn absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-[64px] h-[64px] items-center justify-center text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer"
                >
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2" />
                        <path
                            d="M35 38L29 32L35 26"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div
                    ref={nextRef}
                    className="hidden md:flex next-btn absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-[64px] h-[64px] items-center justify-center text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer"
                >
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2" />
                        <path
                            d="M29 38L35 32L29 26"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div> */}
            </Swiper>
        </div>
    );
};

export default ClientSlider;
