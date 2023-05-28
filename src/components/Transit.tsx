import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Your slide content
  const delay = 3000; // Delay between slide transitions in milliseconds

  useEffect(() => {
    // Function to handle the automatic slide transition
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    // Set the timeout interval for slide transition
    const interval = setInterval(nextSlide, delay);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <h1>Slider</h1>
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;


