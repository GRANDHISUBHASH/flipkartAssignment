import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

const Carousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [setCurrentIndex, images.length]);

    const goToPrevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, [setCurrentIndex, images.length]);

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, interval);
        return () => clearInterval(intervalId);
    }, [currentIndex, interval, goToNextSlide]);

    return (
        <div className="carousel">
            <button className="prev-btn" onClick={goToPrevSlide}>&lt;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
            <button className="next-btn" onClick={goToNextSlide}>&gt;</button>
        </div>
    );
};

export default Carousel;
