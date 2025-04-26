import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/sponsors.css"; // Import external CSS
import { swarmBackground } from "threejs-toys";
import techmiyaLogo from "../images/techmiya_logo.jpeg";

const IndividualSponsors = () => {
  useEffect(() => {
    const existingEffect = document.getElementById("effect");
    if (existingEffect) existingEffect.remove();

    const effect = document.createElement("div");
    effect.id = "effect";
    document.body.prepend(effect);

    effect.style.position = "fixed";
    effect.style.top = "0";
    effect.style.left = "0";
    effect.style.width = "100vw";
    effect.style.height = "100vh";
    effect.style.zIndex = "-1";

    const bg = swarmBackground({
      el: effect,
      eventsEl: effect,
      gpgpuSize: 28,
      color: [0x00a69e, 0x00a69e],
      geometry: "default",
    });

    bg.setColors([0x00a69e, 0x00ff51]);
    bg.three.camera.position.set(1, 0, 80);

    const handleResize = () => {
      if (bg?.three?.renderer) {
        bg.three.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      effect.remove();
    };
  }, []);

  const data = [
    {
      name: "Techmiya Solutions",
      img: techmiyaLogo,
      description:
        "Techmiya Solutions is a cutting-edge Research and Development company specializing in the latest advancements in Machine Learning, Artificial Intelligence, Full Stack Development, and Android Development. Our focus is on driving innovation through research and implementation of emerging technologies, ensuring impactful solutions across industries.",
      website: "https://techmiyasolutions.com",
      linkedin: "https://www.linkedin.com/company/techmiyaprojects/posts/?feedView=all",
      instagram: "https://www.instagram.com/techmiyaprojects",
    },
  ];

  return (
    <div id="sponsors-main" className="sponsors-container">
      <div className="sponsors-wrapper">
        <h2 className="sponsors-title">Our Collaborator</h2>

        <div className="sponsors-inner">
          {data.map((d, index) => (
            <div key={index} className="sponsor-card">
              {/* Sponsor Logo */}
              <div className="sponsor-logo">
                <img src={d.img} alt={d.name} className="sponsor-img" />
              </div>

              {/* Sponsor Name & Description */}
              <p className="sponsor-name">{d.name}</p>
              <p className="sponsor-description">{d.description}</p>

              {/* Sponsor Links */}
              <div className="sponsor-links">
                <a href={d.website} target="_blank" rel="noopener noreferrer" className="sponsor-btn">
                  Website
                </a>
                <a href={d.linkedin} target="_blank" rel="noopener noreferrer" className="sponsor-btn">
                  LinkedIn
                </a>
                <a href={d.instagram} target="_blank" rel="noopener noreferrer" className="sponsor-btn">
                  Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualSponsors;
