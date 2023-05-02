import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const previousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={previousSlide}>Previous</button>
      <img src={'images/'+images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;