import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import "./css/slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample images - replace with your actual image URLs
  const images = [
    {
      src: "./aventus1.jpg",
      alt: "Aventus Team",
      title: " ",
    },
    {
      src: "./aventus2.jpg",
      alt: "Teams  at Work",
      title: " ",
    },
    {
      src: "./aventus3.jpg",
      alt: "Authorities",
      title: " ",
    },
    {
      src: "./aventus4.jpg",
      alt: "Judges",
      title: " ",
    },
    {
      src: "./aventus5.jpg",
      alt: "Final day",
      title: " ",
    },
    {
      src: "./aventus6.jpg",
      alt: "Evaluation",
      title: " ",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, nextSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Main carousel display */}
        <div className="carousel-display">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                />
                <div className="image-overlay">
                  <h3 className="image-title">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            className="carousel-nav carousel-nav-prev"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="carousel-nav carousel-nav-next"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Play/Pause button */}
          <button
            className="play-pause-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>

        {/* Dot indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
