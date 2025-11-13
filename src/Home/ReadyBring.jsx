import React from 'react';
import { Link } from 'react-router-dom';

export default function Readybring() {
  return (
    <section className="relative h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center">
      {/* Overlay */}
      <img src={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/insur.png"} alt="Interior" className=" w-full h-full object-cover" />
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Content */}
      <div className="h-full flex items-center justify-center flex-col absolute left-[0] right-[0] top-[0] bottto-[0] z-10 text-center px-4 md:px-8">
        <h1 className="fontspring text-[20px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-black mb-[10px]">
          Ready to Bring Your Dream Space to Life?
        </h1>
        <p className="text-[#000000] text-[18px] md:text-[20px] mb-6">
          Lets create an space that’s beautiful, functional and uniquely yours
        </p>
        <Link to="/contact" className="min-w-[220px] bg-[#94A393] text-white hover:bg-white hover:text-black text-[14px] font-[600] py-[14px] px-[10px]  transition text-center tracking-widest">
          CONTACT US
        </Link>
      </div>
    </section>
  );
};
