import AnimatedHeading from "./AnimatedHeading";

function Banner({ image, title ,css ,overlay}) {
    return (
        <div className={`relative ${css ? css : "md:mt-[-150px]"}`}>
            {/* Background Image */}
            <img
                src={image}
                alt="Logo"
                className="w-full h-[300px] sm:h-[400px] md:h-[600px] xl:h-[800px] object-cover object-center"
            />

            {/* Overlay */}
            {/* {overlay && (

            <div className="absolute inset-0 bg-black/50"></div>
            )} */}

            {/* Content */}
            <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-4 sm:bottom-6 md:bottom-[50px] lg:bottom-[90px] z-[10] px-4">
                <AnimatedHeading>
                    <h2 className="fontspring text-[24px] sm:text-[28px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-tight">
                        {title}
                    </h2>
                </AnimatedHeading>
            </div>
        </div>
    );
}

export default Banner;