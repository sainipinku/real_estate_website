import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import { useState } from "react";
import toast from "react-hot-toast";
import Listing from "../Admin/Apis/Listing";
import AnimatedHeading from "../component/AnimatedHeading";
import Banner from "../component/Banner";
import { Helmet } from "react-helmet-async";

function Contact() {

    const [Regs, setRegs] = useState({
        name: "",
        email: "",
        message: "",
        services: "",
        phone_number: "",
    });
    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);

    const handleForms = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!Regs.name || !Regs.email || !Regs.phone_number || !Regs.services || !Regs.message) {
            toast.error("Please fill out all fields.");
            setLoading(false);
            return;
        }
          const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Regs.phone_number)) {
        toast.error("Phone number must be exactly 10 digits.");
        setLoading(false);
        return;
    }

    // 3️⃣ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Regs.email)) {
        toast.error("Please enter a valid email address.");
        setLoading(false);
        return;
    }
        const main = new Listing();
        try {
            const updatedRegs = {
                ...Regs,
            };
            const response = await main.contact(updatedRegs);
            console.log("response", response)
            if (response?.data?.status) {
                toast.success(response.data.message);
                setRegs({
                    name: "",
                    email: "",
                    message: "",
                    subject: "",
                    phone_number: "",
                    services:""
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error); // Log the error for debugging
            toast.error("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (<>
      <Helmet>
        <title>Contact Us | Cadmax Pro</title>
        <meta
          name="description"
          content="Get in touch with Cadmax Pro for architectural and interior design consultations. We’re here to discuss your dream project."
        />
        <meta
          name="keywords"
          content="contact Cadmax Pro, architecture consultation, design enquiry, interior design contact, Cadmax office"
        />
      </Helmet>
        <div className="min-h-screen">
            <Header />

            <div className={`relative md:mt-[-150px]`}>
                        {/* Background Image */}
                <img
                    src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/contact-us-image.jpg"}
                    alt="Logo"
                    className="w-full h-[300px] sm:h-[400px] md:h-[600px] xl:h-[800px] object-cover "
                />
                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-black/50"></div> */}
            
                        {/* Content */}
                        <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-4 sm:bottom-6 md:bottom-[50px] lg:bottom-[90px] z-[10] px-4">
                            <AnimatedHeading>
                                <h2 className="fontspring text-[24px] sm:text-[28px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-tight">
                                    {"Contact us"}
                                </h2>
                            </AnimatedHeading>
                        </div>
                    </div>
            <div className="bg-[#fff] px-[15px] py-[30px] md:py-[50px] lgpy-[70px] ">
                {/* Top Contact Info */}
                <div className="max-w-[1320px] mx-auto flex flex-wrap md:flex-nowrap gap-6 text-center">
                    <div className="flex w-full md:w-[32%] gap-[10px] justify-start items-center">
                        <div className="text-orange-600 text-2xl mb-2">
                            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1" width="53" height="53" rx="26.5" stroke="#FF792D" />
                                <path d="M35.3636 25.6818C35.3636 32.0455 27.1818 37.5 27.1818 37.5C27.1818 37.5 19 32.0455 19 25.6818C19 23.5119 19.862 21.4308 21.3964 19.8964C22.9308 18.362 25.0119 17.5 27.1818 17.5C29.3518 17.5 31.4328 18.362 32.9672 19.8964C34.5016 21.4308 35.3636 23.5119 35.3636 25.6818Z" stroke="#FF792D" stroke-width="1.81818" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.1816 28.5C28.8385 28.5 30.1816 27.1569 30.1816 25.5C30.1816 23.8431 28.8385 22.5 27.1816 22.5C25.5248 22.5 24.1816 23.8431 24.1816 25.5C24.1816 27.1569 25.5248 28.5 27.1816 28.5Z" stroke="#FF792D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h3 className="fontspring text-[20px] md:text-[23px] lg:text-[26px] text-[#000112]">Address</h3>
                            <p className="text-[16px] md:text-[16px] lg:text-[20px] font-[600] text-[#000112] mt-1 text-left">
                                Office No. 101,102,301, Prism Tower , Lal Kothi Scheme, Tonk Road, Gandhi Nagar, Opp. PHQ, Jaipur

                            </p>
                        </div>
                    </div>

                    <div className="flex  w-full md:w-[32%] gap-[10px] justify-start items-center">
                        <div className="text-orange-600 text-2xl mb-2">
                            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1" width="53" height="53" rx="26.5" stroke="#FF792D" />
                                <path d="M19 19.5H35C36.1 19.5 37 20.4 37 21.5V33.5C37 34.6 36.1 35.5 35 35.5H19C17.9 35.5 17 34.6 17 33.5V21.5C17 20.4 17.9 19.5 19 19.5Z" stroke="#FF792D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M37 21.5L27 28.5L17 21.5" stroke="#FF792D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>



                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h3 className="fontspring text-[20px] md:text-[23px] lg:text-[26px] text-[#000112]">Email</h3>
                            <p className="whitespace-normal emailText break-words  text-[16px] md:text-[18px] lg:text-[20px] font-[600] text-[#000112] mt-1 text-left">
                                Info@cadmaxpro.com
                            </p>
                        </div>
                    </div>


                    <div className="flex  w-full md:w-[32%] gap-[10px] justify-start items-center">
                        <div className="text-orange-600 text-2xl mb-2">
                            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1" width="53" height="53" rx="26.5" stroke="#FF792D" />
                                <path d="M36.038 31.9403V34.6501C36.039 34.9016 35.9875 35.1506 35.8867 35.3811C35.7859 35.6116 35.6381 35.8185 35.4528 35.9885C35.2674 36.1586 35.0486 36.2881 34.8103 36.3687C34.572 36.4492 34.3195 36.4792 34.0689 36.4565C31.2895 36.1545 28.6197 35.2048 26.274 33.6836C24.0916 32.2968 22.2413 30.4465 20.8545 28.2641C19.328 25.9078 18.378 23.2249 18.0816 20.433C18.059 20.1832 18.0887 19.9315 18.1687 19.6938C18.2488 19.4562 18.3774 19.2378 18.5465 19.0525C18.7156 18.8673 18.9214 18.7193 19.1508 18.618C19.3802 18.5166 19.6282 18.4642 19.879 18.464H22.5887C23.0271 18.4596 23.452 18.6149 23.7844 18.9007C24.1168 19.1865 24.3339 19.5835 24.3952 20.0175C24.5096 20.8847 24.7217 21.7362 25.0275 22.5556C25.149 22.8789 25.1753 23.2303 25.1033 23.5681C25.0312 23.9058 24.8639 24.2159 24.621 24.4615L23.4739 25.6086C24.7597 27.8699 26.632 29.7422 28.8934 31.0281L30.0405 29.8809C30.2861 29.6381 30.5961 29.4707 30.9339 29.3987C31.2717 29.3266 31.623 29.3529 31.9463 29.4745C32.7658 29.7803 33.6173 29.9924 34.4844 30.1067C34.9232 30.1686 35.3239 30.3896 35.6103 30.7277C35.8968 31.0658 36.049 31.4974 36.038 31.9403Z" stroke="#FF792D" stroke-width="1.80648" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h3 className="fontspring text-[20px] md:text-[23px] lg:text-[26px] text-[#000112]">Phone</h3>
                            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] text-[#000112] mt-1 text-left">
                                9829045031
                            </p>
                        </div>
                    </div>



                </div>
            </div>

            {/* Form + Text */}
            <div className="relative bg-[#F8F6F2] py-[30px] md:py-[50px] lg:py-[70px]">
                <div className="absolute left-[0] bottom-[0]">
                    <img src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/contactshap.png"} alt="Interior" className=" w-full h-auto object-cover" />
                </div>

                <div className="max-w-[1320px] bg-[#F8F6F2] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left Text */}
                    <AnimatedHeading>
                        <div>
                            <h2 className="fontspring text-[20px] md:text-[30px] lg:text-[50px] leading-[24px] md:leading-[35px] lg:leading-[55px] text-[#000112] mb-4">Let us help build your dream</h2>
                            <p className="text-[#000112a6] text-[14px] md:text-[18px] lg:text-[20px]">
                                Weather looking for developing your land or designing your residential or commercial spaces, Our dedicated an experienced team is ready to the best for you, Contact us today to discuss your project and discover how we can create the perfect space tailored to your needs.

                            </p>
                        </div>
                    </AnimatedHeading>


                    {/* Right Form */}
                    <form className="z-[2] flex flex-wrap gap-[20px] md:gap-[30px] lg:gap-[50px] text-sm">
                        <div className="flex flex-col w-full md:w-[48%] lg:md:w-[42%] xl:md:w-[45%] gap-[10px]">
                            <label className="mb-1 text-[12px] uppercase text-[#4D4D4D]">FULL NAME*</label>
                            <input type="text" placeholder="your name"
                                name="name"
                                value={Regs.name}
                                onChange={handleInputs}
                                required
                                className="border-b border-gray-400 bg-transparent outline-none py-1 text-[16px] font-[500] text-[#999999]" />
                        </div>
                        <div className="flex flex-col  w-full md:w-[48%] lg:md:w-[42%] xl:md:w-[45%] gap-[10px]">
                            <label className="mb-1 text-[12px] uppercase text-[#4D4D4D]">EMAIL*</label>
                            <input type="email"
                                name="email"
                                value={Regs.email}
                                onChange={handleInputs}
                                required
                                placeholder="your email" className="border-b border-gray-400 bg-transparent outline-none py-1 text-[16px] font-[500] text-[#999999]" />
                        </div>
                        <div className="flex flex-col  w-full md:w-[48%] lg:md:w-[42%] xl:md:w-[45%] gap-[10px]">
                            <label className="mb-1 text-[12px] uppercase text-[#4D4D4D]">PHONE (Optional)</label>
                            <input type="tel"
                                name="phone_number"
                                value={Regs?.phone_number}
                                onChange={handleInputs}
                                placeholder="your phone" className="border-b border-gray-400 bg-transparent outline-none py-1 text-[16px] font-[500] text-[#999999]" />
                        </div>
                        <div className="flex flex-col  w-full md:w-[48%] lg:md:w-[42%] xl:md:w-[45%] gap-[10px]">
                            <label className="mb-1 text-[12px] uppercase text-[#4D4D4D]">SERVICE*</label>
                            <select
                                onChange={handleInputs}
                                value={Regs?.services}
                                name="services"
                                className="border-b border-gray-400 bg-transparent outline-none py-1 text-[16px] font-[500] text-[#999999]">
                                <option>--select service--</option>
                                <option value={"home"}>Home Renovation</option>
                                <option value="Office">Office Setup</option>
                                <option value="Commercial">Commercial Design</option>
                            </select>
                        </div>
                        <div className="flex flex-col  w-full gap-[10px]">
                            <label className="mb-1 text-[12px] uppercase text-[#4D4D4D]">MESSAGE*</label>
                            <textarea rows="4"
                                onChange={handleInputs}
                                value={Regs?.message}
                                name="message"
                                placeholder="Message" className="border-b border-gray-400 bg-transparent outline-none py-1 text-[16px] font-[500] text-[#999999]"></textarea>
                        </div>
                        <div className="w-full pt-4">
                            <button type="submit" onClick={handleForms} className="min-w-[200px] bg-[#94A393] text-white px-[10px] py-[15px]  hover:bg-[#000] hover:text-white text-[14px] font-[500]" disabled={loading}>
                                {loading ? "Processing.." : "GET A QUOTE"}
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <div>
                <div className="w-full h-[300px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.169941188254!2d75.79705307537076!3d26.83308127670687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b25d2a3a41%3A0x2dc19e9a7e949dd5!2sPrism%20Tower%2C%20Lal%20Kothi%20Scheme%2C%20Tonk%20Rd%2C%20Gandhi%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302015!5e0!3m2!1sen!2sin!4v1693395287562!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

        </div>
        <Footer />
    </>);
}

export default Contact;