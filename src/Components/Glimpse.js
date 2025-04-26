import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Glimpse.css";

const Glimpse = ({ images, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: null,
    prevArrow: null,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="glimpse-container">
      {title && <h2 className="glimpse-title">{title}</h2>}
      <div className="image-slider-wrapper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="glow-image" 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Glimpse;