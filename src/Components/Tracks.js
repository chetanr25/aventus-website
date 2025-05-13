import React from "react";
import "./css/tracks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faShieldHalved,
  faMicrochip,
  faJetFighter,
} from "@fortawesome/free-solid-svg-icons";

const Tracks = () => {
  const tracks = [
    {
      title: "AI in Healthcare",
      description:
        "Can AI be a doctor's best assistant? Think big—early disease detection, virtual consultations that feel real or AI predicting life-threatening conditions before they happen. If you could build something that truly transforms healthcare, what would it be?",
      color: "#06b81bcc",
      icon: (
        <FontAwesomeIcon icon={faHeartbeat} style={{ fontSize: "4.5rem" }} />
      ),
    },
    {
      title: "AI in Cyber Security",
      description:
        "In a world where digital threats evolve by the second, how can AI be our digital guardian? From predicting cyber attacks to creating self-healing systems, show us how AI can make our digital world safer.",
      color: "#06a819cc",
      icon: (
        <FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: "4.5rem" }} />
      ),
    },
    {
      title: "AI in Edge Computing",
      description:
        "How can AI work its magic right on your device? Think smart homes that actually learn, AR experiences that feel real, or devices that adapt to you. Show us how AI at the edge can transform daily tech.",
      color: "#069819cc",
      icon: (
        <FontAwesomeIcon icon={faMicrochip} style={{ fontSize: "4.5rem" }} />
      ),
    },
    {
      title: "AI in Defense & Disaster Response",
      description:
        "How can AI act fast in crisis situations? Whether it's predicting disasters, coordinating rescue missions, or making split-second decisions, AI has the power to save lives when every second counts. What will you build to make a difference?",
      color: "#06a819cc",
      icon: (
        <FontAwesomeIcon icon={faJetFighter} style={{ fontSize: "4.5rem" }} />
      ),
    },
  ];

  return (
    <section id="Tracks">
      <div className="track-section-bg"></div>
      <div className="tracks">
        <div className="container text-center mb-5">
          <h2 className="section-title">
            <span className="">Hackathon Tracks</span>
          </h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Choose your innovation path from our diverse set of challenge areas
          </p>
        </div>
        <div className="track-container">
          <div className="track track-grid">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="track-item"
                style={{
                  cursor: "pointer",
                  borderLeft: `3px solid ${track.color}`,
                  borderTop: `1px solid ${track.color}20`,
                  borderRight: `1px solid ${track.color}20`,
                  borderBottom: `1px solid ${track.color}20`,
                  padding: "32px",
                }}
              >
                <div className="track-background"></div>
                <div className="circuit-pattern"></div>
                <div className="track-content">
                  <div className="track-icon">{track.icon}</div>
                  <div className="track-item-header">
                    <h1>{track.title}</h1>
                  </div>
                  <div
                    className="track-description"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1.05rem",
                      lineHeight: "1.6",
                      fontWeight: "400",
                      letterSpacing: "0.015em",
                      marginTop: "12px",
                    }}
                  >
                    {track.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
