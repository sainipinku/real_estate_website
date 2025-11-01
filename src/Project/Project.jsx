import "../App.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import { useEffect, useState } from "react";
import Listing from "../Admin/Apis/Listing";
import LoadingSpinner from "../component/Loading";
import { Helmet } from "react-helmet-async";

function Project() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    console.log("listing", listing)

    // Fetch data
    const fetchMarketLists = async (searchQuery = "", page = 1, limit = 15) => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ProjectGet(searchQuery, page, limit);

            setListing(response?.data?.data || []);
            setTotalPages(response?.data?.totalPages || 1);
            setCurrentPage(response?.data?.currentPage || 1);
            setTotalItems(response?.data?.totalUsers || 0);
            setLoading(false);

        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketLists(search, currentPage);
    }, [currentPage]);

    return (
        <>
         <Helmet>
        <title>Our Projects | Cadmax Pro</title>
        <meta
          name="description"
          content="Explore Cadmax Pro’s portfolio showcasing remarkable architectural and interior design projects, blending creativity, precision, and luxury."
        />
        <meta
          name="keywords"
          content="Cadmax Pro projects, architectural portfolio, interior design projects, luxury design, construction works, modern buildings"
        />
      </Helmet>
            <div className="min-h-screen">
                <Header />
                <Banner
                    image={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/projectbanner.jpg"}
                    title={"Our Projects"}
                    overlay={true}
                />

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="flex flex-wrap sm:flex-nowrap gap-[20px] py-[30px] md:py-[60px] px-[15px] w-full max-w-[1300px] m-auto">
                        {/* LEFT COLUMN */}
                        <div className="flex flex-col gap-[20px] w-full md:w-[48%]">
                            {listing
                                .filter((_, i) => i % 2 === 0) // Even items → Left column
                                .map((item, index) => (
                                    <div key={index} className="relative">
                                        <Link to={`/project/${item.slug}`} className="overlaybx">
                                            <div className="blackOverlay"></div>
                                            <img
                                                src={item.list_image}
                                                alt={item.title}
                                                className={`object-cover w-full ${index % 2 === 0
                                                    ? "min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px]" // even → large
                                                    : "min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]" // odd → small
                                                    }`}
                                            />
                                            {item?.status === "upcoming" && (
                                                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-lg shadow-lg">
                                                    Upcoming Project
                                                </div>
                                            )}
                                        </Link>
                                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="flex flex-col gap-[20px] w-full md:w-[48%]">
                            {listing
                                .filter((_, i) => i % 2 !== 0) // Odd items → Right column
                                .map((item, index) => (
                                    <div key={index} className="relative">
                                        <Link to={`/project/${item.slug}`} className="overlaybx">
                                            <div className="blackOverlay"></div>
                                            <img
                                                src={item.list_image}
                                                alt={item.title}
                                                className={`object-cover w-full ${index % 2 != 0
                                                    ? "min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px]" // alternate size
                                                    : "min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]"
                                                    }`}
                                            />
                                            {item?.status === "upcoming" && (
                                                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-lg shadow-lg">
                                                    Upcoming Project
                                                </div>
                                            )}
                                        </Link>
                                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                <Footer />
            </div>
        </>
    );
}

export default Project;
