import AnimatedHeading from "../component/AnimatedHeading";

export default function WhyChooseUs({ home }) {
  return (
    <section className="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4">
      <div className="max-w-[1320px] mx-auto text-center">
        <AnimatedHeading>
          <h2 className="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[25px]">
            Why Choose Us?
          </h2>
        </AnimatedHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {home && home?.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-[20px] md:p-[20px] lg:p-[40px] shadow-md text-left transition-all duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-[#9aa396] mb-4 text-3xl transition-transform duration-500 ease-in-out group-hover:-translate-y-1">
                <img src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/chooseicon.png"} alt="Icon" className="w-[40px] h-[40px]" />
              </div>

              {/* Title */}
              <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[26px] text-[#000112] mb-2 transition duration-500 ease-in-out">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#000112ba] text-[16px] md:text-[16px] lg:text-[20px] leading-relaxed transition duration-500 ease-in-out">
                {item.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
