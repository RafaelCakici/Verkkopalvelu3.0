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
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const imgStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    padding: '0',
    margin: '0',
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '300px'
  };

  const carouselStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  };

  return (
    <div className="carousel" style={carouselStyle}>
      <img
        className="ratio ratio-21x9"
        style={imgStyle}
        src={'images/' + images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
    </div>
  );
};

export default Carousel;