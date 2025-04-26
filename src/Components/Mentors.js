import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/mentor style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Mentors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mentors-section">
      <div className="section-header">
        <h2>Our <span className="highlight">Mentors</span></h2>
        <p>Learn from industry experts across different tracks</p>
      </div>
      
      <div className="mentors-slider">
        <Slider {...settings}>
          {data.map((mentor) => (
            <div key={mentor.name} className="mentor-card">
              <div className={`mentor-header ${mentor.bg}`}>
                <div className="mentor-image">
                  <img src={mentor.img} alt={mentor.name} />
                </div>
              </div>
              
              <div className="mentor-info">
                <h3>{mentor.name}</h3>
                <div className="mentor-tags">
                  <span className="mentor-role">{mentor.description}</span>
                  <span className="mentor-team">{mentor.team}</span>
                </div>
                <div className="mentor-track">
                  <span className="track-label">Track</span>
                  <span className="track-value">{mentor.track}</span>
                </div>
                <div className="mentor-links">
                  <a 
                    href={mentor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin-btn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  
                  {mentor.portfolio && (
                    <a 
                      href={mentor.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-btn"
                    >
                      <span>View Portfolio</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Prakhar",
    img: "mentor1.png",
    description: "Mentor",
    track: "AI & ML",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/prakhar-tibrewal?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsBzLdH7NRYyzEfmcFPHz2Q%3D%3D",
    bg: "pb_bimg",
    portfolio: "https://kitarp29.github.io/onlineCV/beckham/"
  },
  {
    name: "Gaurav Sarkar",
    img: "mentor2.png",
    description: "Mentor",
    track: "AI & ML",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/gauravsarkar7888?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg",
    portfolio: "https://medium.com/@gosshhh9"
  },
  {
    name: "Mithun S",
    img: "mentor3.png",
    description: "Mentor",
    team: "OSCode",
    track: "Web 3.0",
    linkedin: "https://www.linkedin.com/in/i-am-mithun/",
    bg: "os_bimg"
  },
  {
    name: "Aayush Kumar",
    img: "mentor4.png",
    description: "Mentor",
    team: "PointBlank",
    track: "Web 3.0",
    linkedin: "https://www.linkedin.com/in/aayush-kumar-in?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg"
  },
  {
    name: "Anukul Anand",
    img: "mentor5.png",
    description: "Mentor",
    track: "Game & AR/VR",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/anukul-anand?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg"
  },
  {
    name: "Ankit Kumar Singh",
    img: "mentor6.png",
    description: "Mentor",
    track: "Game & AR/VR",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-b23789191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg",
    portfolio: "https://ankitportfolio.social/"
  },
  {
    name: "Abhay Singh",
    img: "mentor7.png",
    description: "Mentor",
    team: "OSCode",
    track: "Cyber intelligence",
    linkedin: "https://www.linkedin.com/in/abhay-singh-a64b89192/",
    bg: "os_bimg"
  },
  {
    name: "Sreeniketh Madgula",
    img: "mentor8.png",
    description: "Mentor",
    team: "PointBlank",
    track: "Cyber intelligence",
    linkedin: "https://www.linkedin.com/in/sreenikethmadgula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg",
    portfolio: "https://sreeniketh.tech/"
  },
];

export default Mentors;