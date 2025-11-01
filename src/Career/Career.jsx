import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import WhyChooseUs from '../Home/WhyChooseUs';
import home from "../Json/Choose.json"
import { Link } from "react-router-dom";
import AnimatedHeading from "../component/AnimatedHeading";
import Banner from "../component/Banner";
import { useEffect, useState } from "react";
import Listing from "../Admin/Apis/Listing";
import { Helmet } from "react-helmet-async";

function Career() {

    const Careerdata = [
        {
            "title": "Architect",
            "role": "Architect",
            "quote": "An architect doesn’t just build walls—they craft the future in lines and light.",
            "skills": [
                "Should be well qualified and well experienced",
                "Should handle office as well as onsite work",
                "Should design 3d elevations",
                "Should have building structural knowledge"
            ]
        },
        {
            "title": "Interior Designer",
            "role": "Interior ",
            "quote": "The best rooms have something to say about the people who live in them.",
            "skills": [
                "Should be well qualified and well experienced",
                "Should handle office as well as onsite work",
                "Should design 3d interior models",
                "Should do commercial and residential planning according to vastu"
            ]
        },
        {
            "title": "Surveying Engineer",
            "role": "Surveying ",
            "quote": "Survey engineers don’t just measure land—they lay the foundation for everything that follows.",
            "skills": [
                "Should be well qualified and well experienced",
                "Should operate D.G.P.S., total station, Auto level",
                "Should prepare survey drawing"
            ]
        },
        {
            "title": "Urban Planner",
            "role": "Urban  ",
            "quote": "Great urban planning turns space into community, and concrete into culture.",
            "skills": [
                "Should be well qualified and well experienced",
                "Can do Urban township planning with accurate JDA norms.",
                "Should have knowledge about latest JDA township policies"
            ]
        }
    ]

     const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobList = async () => {
    try {
      setLoading(true);
      const api = new Listing();
      const response = await api.JobGet();
      console.log("API response:", response);
      // Adjust according to your API structure
      setJobs(response?.data?.data || []); 
    } catch (error) {
      console.error("Error fetching job list:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobList();
  }, []);



    return (<>
     <Helmet>
        <title>Careers at Cadmax Pro | Join Our Creative Team</title>
        <meta
          name="description"
          content="Looking to build your career in architecture and design? Join Cadmax Pro’s team of creative professionals shaping the future of design excellence."
        />
        <meta
          name="keywords"
          content="Cadmax Pro careers, architecture jobs, interior design jobs, creative team, hiring designers, work at Cadmax Pro"
        />
      </Helmet>
        <div className="min-h-screen ">
            <Header />

            <Banner image={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/project/11.jpg"} title={"Careers at Cadmax"} overlay={true} />
            <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2">
                        <img src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/project/DSC00825.JPG"} alt="Interior" className=" w-full h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <AnimatedHeading>

                            <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112]">Build the Future With Us</h2>
                            <p className="mt-6 text-[16px] md:text-[18px] xl:text-[20px] font-[400] text-[#00011299]">
                                At Cadmax Projects Pvt. Ltd., we believe that our people are our greatest strength. From urban planners and survey engineers to architects and project managers, our diverse team shares a passion for innovation, excellence, and sustainable development. If you’re driven by purpose and eager to make a real impact on India’s urban landscape, we invite you to explore a career with us.
                            </p>
                        </AnimatedHeading>
                    </div>
                </div>
            </section>

            <WhyChooseUs home={home?.home} />

            <section className="py-[40px] md:py-[60px] lg:py-[70px] px-4 md:px-8 lg:px-20 bg-white">
                <div className="text-center mb-10">
                    <AnimatedHeading>
                        <h2 className="fontspring text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#000112] mb-4">Opportunities Await</h2>
                        <p className="text-[14px] md:text-[18px] lg:text-[20px] text-[#000112a6]">
                            We’re always looking for talented professionals in areas such as:
                        </p>
                    </AnimatedHeading>
                </div>
                {jobs && jobs.map((item, index) => (
                    <div className="border border-[#999999] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-[10px] md:gap-[20px] max-w-7xl mx-auto">
                        <div>
                            <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[26px] font-medium text-[#000112] mb-2">{item?.title}</h3>
                            <p className="max-w-full md:max-w-[70%] lg:max-w-[80%] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112a6]">
                                {item?.content}
                            </p>
                        </div>
                        <Link to={`/career/${item?.slug}`} className="min-w-[150px] xl:min-w-[200px] px-[10px] py-3 border border-[94A393] text-[#94A393] text-[14px] font-[600] tracking-wide text-[#94A393] hover:bg-[#94A393] hover:text-[#fff] transition-all uppercase tracking-wider">
                            View Details
                        </Link>
                    </div>
                ))}
            </section>
        </div>
        <Footer />
    </>);
}

export default Career;