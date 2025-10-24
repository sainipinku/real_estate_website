import "../App.css"
import Header from '../component/Header';
import WeOffer from './WeOffer';
import Readybring from '../Home/ReadyBring';
import Footer from "../component/Footer";
import AnimatedHeading from "../component/AnimatedHeading";
import serviceDetails from "../Json/Services.json";
import { useParams } from "react-router-dom";

function Estate() {
    const { slug } = useParams();  // URL से slug
    const service = serviceDetails[slug]; // JSON से data fetch
    return (<>
        <div className="min-h-screen ">
            <Header />
            <div className="relative mt-[-100px]">
                {/* Background Image */}
                <img
                    src={service?.image}
                    alt="Logo"
                    className="w-full h-[500px] md:h-[600px]  md:max-h-[600px] object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[10] px-[15px]">
                    <AnimatedHeading>
                        <div className="flex flex-col items-left">
                            <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white">
                                {service?.title}
                            </h2>

                            {/* Logo */}
                            <img
                                src={service?.logo}
                                alt="logo"
                                className="w-[120px] h-[50px] md:w-[140px] md:h-[60px] lg:w-[160px] lg:h-[70px] object-contain"
                            />
                        </div>
                    </AnimatedHeading>
                </div>
            </div>
            <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
                <div className=" mb-[15px] text-center">
                    <AnimatedHeading>
                        <p className="text-[14px] font-[600] tracking-widest text-[#000112a6] uppercase mb-4">{service?.para}</p>
                        <h2 className="fontspring text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] whitespace-pre-line leading-[25px] lg:leading-[30px] xl:leading-[45px] text-[#000112] mb-10 max-w-[1140px] mx-auto">
                            {service?.description}
                        </h2>
                    </AnimatedHeading>
                </div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={service?.image2}
                            alt={service?.title}
                            className="max-h-[400px] md:max-h-[450px] lg:max-h-[500px] w-auto object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <AnimatedHeading>
                            {/* <h2 className="fontspring text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 
                     leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112]">
                                Our Expertise
                            </h2> */}
                            <p className="mt-6 text-[18px] md:text-[20px] xl:text-[22px] font-[400] text-[#00011299] whitespace-pre-line">
                                {service?.description2}
                            </p>
                        </AnimatedHeading>
                    </div>
                </div>

            </section>
            <WeOffer services={service?.features} />
            <Readybring />
            <Footer />
        </div>
    </>);
}

export default Estate;