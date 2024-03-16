'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const CarouselSlider = () => {
  const images = [
    '/images/slider/1.jpeg',
    '/images/slider/2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // const firstImg = document.getElementById('firstImg');
  // firstImg.onload = () => {
  //   setLoading(false);
  // }

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setLoading(true); // Show loading overlay when changing image
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setLoading(true); // Show loading overlay when changing image
  };

  return (
    <div className="relative shadow select-none" id="home">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* {currentIndex === 0 ? ( */}
        <Link href="https://veterangaragedoor.com/veteran-garage-door-repair-of-katy-tx/" target="_blank" passHref>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[300px] sm:h-[500px] md:h-[600px] xl:min-h-[80vh] xl:max-h-[80vh]"
            onLoad={() => setLoading(false)} // Hide loading overlay when image loaded
            // id='firstImg'
          />
        </Link>
      {/* ) : (
        <img
          src={images[currentIndex]}d:\Fiverr\isternd\2-b4505t\app\components\Overview.js
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[300px] sm:h-[500px] md:h-[600px] xl:min-h-[80vh] xl:max-h-[80vh]"
          onLoad={() => setLoading(false)} // Hide loading overlay when image loaded
        />
      )} */}

      <div className="flex items-center justify-center">
        <FaChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-[50px] cursor-pointer text-white text-4xl z-10"
          onClick={handlePrev}
        />
        <FaChevronRight
          className="absolute right-0 top-1/2 transform -translate-y-[50px] cursor-pointer text-white text-4xl z-10"
          onClick={handleNext}
        />
      </div>

      <div className="absolute bottom-4 w-full mx-auto flex justify-center mb-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3  bg-gray-100 rounded-full mx-2 cursor-pointer ${index === currentIndex ? ' w-8' : ' w-3'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
