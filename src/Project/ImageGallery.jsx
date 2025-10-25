import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const ImageGallery = ({ jobs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? jobs.Image.length - 1 : prev - 1
    );

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === jobs.Image.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="flex w-full md:w-[67%] flex-col gap-5">
      {jobs?.Image?.map((feature, index) => (
        <img
          key={index}
          src={feature}
          alt={`Image ${index}`}
          onClick={() => openModal(index)}
          className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full  cursor-pointer "
        />
      ))}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:scale-110 transition-transform"
          >
            ✕
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-3 sm:left-5 md:left-8 text-white text-4xl font-bold hover:scale-110 transition-transform top-1/2 -translate-y-1/2"
          >
            ❮
          </button>

          {/* Image */}
          <div className="flex justify-center items-center h-full ">
            <img
              src={jobs.Image[currentIndex]}
              alt={`Image ${currentIndex}`}
              className="max-w-full max-h-[80vh] md:max-h-[90vh] lg:max-h-[95vh] object-contain"
            />
          </div>


          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-3 sm:right-5 md:right-8 text-white text-4xl font-bold hover:scale-110 transition-transform top-1/2 -translate-y-1/2"
          >
            ❯
          </button>
        </div>
      )}

    </div>
  );
};

export default ImageGallery;
