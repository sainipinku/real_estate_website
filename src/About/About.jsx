import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import TeamSlider from "./TeamSlider";
import Readybring from "../Home/ReadyBring";
import Achivement from "./Achivement"
import AnimatedHeading from "../component/AnimatedHeading";
import Banner from "../component/Banner";
import { Helmet } from "react-helmet-async";

function About() {
    const features = [
        {
            title: "Our mission",
            description:
                "Our mission is to deliver innovative, sustainable and precise solutions in urban planning and infrastructure development. We strive to create space that improves quality of life ,empowers communities and contribute to India’s progress by integrating advanced technology with unmatched expertise and commitment to excellence.",
        },
        {
            title: "Our vision",
            description:
                "Our vision is to sustainably provide the citizens of our nation, the best infrastructure services that would elevate their living standards and would also increase our countries reputation at international level.",
        },

    ];

    const values = [
        { title: "Integrity in our commitments and relationship." },
        { title: "Innovation in technology and methodology." },
        { title: "Impact through sustainable community and focus solutions." },
    ];

    return (<>
      <Helmet>
        <title>About Us | Cadmax Pro</title>
        <meta
          name="description"
          content="Learn about Cadmax Pro — a leading architectural and interior design company known for creativity, innovation, and excellence in every project."
        />
        <meta
          name="keywords"
          content="Cadmax Pro about, architecture firm, interior design company, creative design, architectural excellence, design consultancy"
        />
      </Helmet>

        <div className="min-h-screen ">
            <Header />
            <Banner image={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/Updated.png"} title={"Why Us"} css={"md:mt-[-100px] "} overlay={false} />
            <div className="pt-[40px] md:pt-[50px] lg-[80px] pb-[90px] px-[15px]">
                <AnimatedHeading>

                    <h2 className="fontspring mb-[20px] text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#000112] text-center">Company Profile</h2>
                </AnimatedHeading>
                <div className="max-w-[1320px] m-auto">
                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">
                        Cadmax Projects is the leading urban planning and infrastructure company dedicated to transform the future of India.


                    </p>

                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">
                        Founded in 2005, with vision to integrate cutting edge, technology, and unmatched expertise. Cad Max has evolved from its origin as Pinkcity survey services into one of the most trusted companies in infrastructural consultancy and services by government developers and institutions across the country.

                    </p>

                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">
                        Our work span comprises urban masterplanning, real estate, infrastructure, architecture and interior design.
                    </p>

                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">
                        With over 20 year of experience, we have successfully delivered thousand of projects across Rajasthan, Haryana, Gujarat, Telangana, Madhya Pradesh, and beyond our focus unwavering to build sustainable smart and inclusive space that empowers communities and drive progress.
                    </p>
                </div>

                <div className="max-w-[2000px] m-auto mt-[30px] mb-[20px] md:mb-[10px]">
                    <img
                        src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/a1bout2.jpg"}
                        alt="Logo"
                        className="max-w-[1200px] w-full object-contain mx-auto"
                    />
                </div>

            </div>
            <section className="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4">
                <div className="max-w-[1320px] mx-auto text-center">
                    <AnimatedHeading>
                        <h2 className="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[25px]">
                            Why Choose Us?
                        </h2>
                    </AnimatedHeading>

                    <div className="grid gap-6 md:grid-cols-2">
                        {features && features.map((item, index) => (
                            <div key={index} className="bg-white p-[20px] md:p-[20px] lg:p-[40px] shadow-md text-left hover:shadow-lg transition transition-all duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-xl">
                                {/* Replace with your own SVG or icon */}
                                <div className="text-[#9aa396] mb-4 text-3xl transition-transform duration-500 ease-in-out group-hover:-translate-y-1">
                                    <img src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/chooseicon.png"} alt="Logo" className="" />
                                </div>
                                <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[26px] text-[#000112] mb-2 transition duration-500 ease-in-out">
                                    {item.title}
                                </h3>
                                <p className="text-[#000112ba] text-[16px] md:text-[16px] lg:text-[20px] leading-relaxed transition duration-500 ease-in-out">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Achivement />

            <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-[60px]">
                    <div className="w-full md:w-1/2">
                        <img src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/about1.jpg"} alt="Interior" className=" w-full h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 md:text-left">
                        <AnimatedHeading>

                            <h2 className="fontspring mb-[15px] text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112]">
                                About Us</h2>
                            <p className=" mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] ">
                                At Cadmax projects, we believe that great designs and engineering have the power to change lives

                            </p>

                            <p className=" mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] ">From first blueprint to the final design, our work reflects a commitment to accuracy, innovation, and sustainability.</p>

                            <p className=" mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] ">What sets us apart?</p>
                            <ul className="flex gap-[15px] flex-col text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299]">
                                <li className="flex gap-[5px]"> ✅A multi disciplinary approach, combining urban planning, real estate ,infrastructure, architecture, and interior design services under one roof.
                                </li>
                                <li className="flex gap-[5px]">✅ Investment in the latest geospatial technology, including DGPS, total stations and drown surveying.
                                </li>
                                <li className="flex gap-[5px]">✅ Deep knowledge of local regulations, approvals, and development standards.</li>
                                <li className="flex gap-[5px]">✅ An experience team driven by integrity and a shared purpose.
                                </li>

                            </ul>
                        </AnimatedHeading>
                    </div>
                </div>
            </section>

            <div className="clintSays bg-[#F8F6F2] py-[40px] md:py-[80px] lg:py-[100px] text-center px-4">
                <AnimatedHeading>

                    <h2 className="fontspring text-[25px] md:text-[40px] lg:text-[50px] text-[#000112]">
                        Our Team Members
                    </h2>
                    <p className="mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">At the heart of cadmax is dedicated team of professionals whose experience and passion fuel our success.</p>
                </AnimatedHeading>

                <TeamSlider />
            </div>
            <section class="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4">
                <div class="max-w-[1320px] mx-auto ">
                    <AnimatedHeading>

                        <h2 class="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[5px] text-center">What We Stand For</h2>
                        <p className="mb-[40px] text-white text-[16px] md:text-[18px] lg:text-[20px] text-center">These values guides every decision we make and every project we undertake
                        </p>
                    </AnimatedHeading>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {values && values?.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 md:p-8 hover:shadow-lg transition transition-all duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-xl"
                            >
                                <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-relaxed text-[#000112] ease-in-out group-hover:-translate-y-1">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Readybring />
        </div>
        <Footer />
    </>);
}

export default About;