import React, { useEffect } from "react";
import "./css/tracks.css";

const Tracks = () => {
  // Add Font Awesome for icons
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/b2d5cf2464.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const tracks = [
    {
      title: "AI in Healthcare",
      description:
        "Can AI be a doctor’s best assistant? Think big—early disease detection, virtual consultations that feel real or AI predicting life-threatening conditions before they happen. If you could build something that truly transforms healthcare, what would it be?",
      color: "#06b81bcc", // Reduced green intensity
      icon: "fas fa-heartbeat",
    },
    {
      title: "AI in Cyber Security",
      description:
        "What if security was smarter, faster and always one step ahead? Imagine AI-powered systems detecting threats in real time, stopping cyberattacks before they happen and adapting on the fly—no delays, no vulnerabilities. The future of cybersecurity isn’t reactive—it’s proactive. How would you build it?",
      color: "#059b15cc", // Reduced green intensity
      icon: "fas fa-shield-alt",
    },
    {
      title: "AI in Edge Computing",
      description:
        "What if AI could process data instantly, right where it’s created? No cloud delays—just real-time automation, AI-powered smart devices and ultra-fast decision-making at the source. How will you build the future of edge intelligence? ",
      color: "#028a15cc", // Slightly deeper green for a professional look
      icon: "fas fa-microchip",
    },
    {
      title: "AI in Defense and Disaster Response",
      description:
        "How can AI act fast in crisis situations? Whether it’s predicting disasters, coordinating rescue missions, or making split-second decisions, AI has the power to save lives when every second counts. What will you build to make a difference? ",
      color: "#06a819cc", // Reduced green intensity
      icon: "fas fa-fighter-jet",
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
                  // Increased padding
                }}
              >
                <div className="track-background"></div>
                <div className="circuit-pattern"></div>
                <div className="track-content">
                  <div className="track-icon">
                    <i
                      className={track.icon}
                      style={{
                        fontSize: "4.5rem", // Slightly reduced size
                        filter:
                          track.icon === "fas fa-fighter-jet"
                            ? "brightness(1.2)"
                            : "none",
                      }}
                    ></i>
                  </div>
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
