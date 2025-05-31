import React, { useEffect } from "react";
import "./css/landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDiscord,
  // faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";
import { swarmBackground } from "threejs-toys";

function Landing() {
  // const [time, setTime] = useState({});

  useEffect(() => {
    // Initialize the background effect
    const landingMain = document.getElementById("landing-main");
    const effect = document.createElement("div");
    effect.id = "effect";
    landingMain.prepend(effect);

    effect.style.width = "100%";
    effect.style.height = "100%";
    effect.style.position = "absolute";
    effect.style.top = "0";
    effect.style.left = "0";
    effect.style.zIndex = "0";

    const bg = swarmBackground({
      el: effect,
      eventsEl: effect,
      gpgpuSize: 40,
      color: [0x00a69e, 0x00a69e],
      geometry: "default",
    });

    bg.setColors([0x00a69e, 0x00ff51]);
    bg.three.camera.position.set(0, 0, 250);

    // Add resize handler to update background on window resize
    const handleResize = () => {
      if (bg && bg.three && bg.three.renderer) {
        bg.three.renderer.setSize(effect.offsetWidth, effect.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Devfolio script
    // const script = document.createElement("script");
    // script.src = "https://apply.devfolio.co/v2/sdk.js";
    // script.async = true;
    // script.defer = true;
    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    //   window.removeEventListener("resize", handleResize);
    //   effect.remove();
    // };
  }, []);

  // useEffect(() => {
  //   let date = new Date("May 8, 2025 23:59:00").getTime();
  //   setInterval(function () {
  //     let now = new Date().getTime();
  //     let dist = date - now;
  //     let time = {
  //       days: Math.floor(dist / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //       minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
  //       seconds: Math.floor((dist % (1000 * 60)) / 1000),
  //     };
  //     setTime(time);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="landing-main"
      style={{ background: "transparent" }}
      data-section-name="s-one"
    >
      {/* Added a navbar-spacer div */}
      {/* <div className="navbar-spacer"></div> */}

      <div className="lcontent" style={{ background: "transparent" }}>
        <div className="lleft" data-aos="fade-right" data-aos-delay="200">
          <div className="event-title">
            <h1>
              AVENTUS<span className="accent">3.0</span>
            </h1>
            {/* <a
              alignContent="center"
              alignItems="center"
              href="https://aventus-3.devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="cta-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  margin: "0 auto", // Add this to center the button itself
                  width: "fit-content", // Add this to ensure proper width
                }}
              >
                <img
                  src="devolio.svg"
                  alt="Devfolio logo"
                  style={{
                    width: "18px",
                    height: "18px",
                    objectFit: "contain",
                    marginBottom: "1px", // Small adjustment to optically align with text
                  }}
                />
                Apply Now on Devfolio
              </button>
            </a> */}
            <div className="tagline">
              <p data-aos="fade-up" data-aos-delay="400">
                Where AI Thrives and Technology Flourishes.
              </p>
              <p className="hashtag" data-aos="fade-up" data-aos-delay="600">
                #wtf
              </p>
            </div>
          </div>

          <div
            className="event-details"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="date-badge">
              <span className="date-icon">📅</span>
              <span>Completed</span>
            </div>
            <div className="event-type">24-hour national level hackathon</div>
          </div>
        </div>

        <div className="lright" data-aos="fade-left" data-aos-delay="200">
          <div className="logo-container">
            <img
              src="logo.png"
              alt="Aventus 3.0 Logo"
              className="animated-logo"
            />
          </div>

          <div
            className="social-container"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/hackaventus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="social-btn instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/showcase/aventus-dsce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="social-btn linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
              <a
                href="https://discord.com/invite/Mbb9bkdsCj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="social-btn discord">
                  <FontAwesomeIcon icon={faDiscord} />
                </button>
              </a>
              {/* <a
                href="https://t.me/+SebssWzmQMVmZGI1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="social-btn telegram">
                  <FontAwesomeIcon icon={faTelegram} />
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="deadline-container"
        style={{
          textAlign: "center",
          padding: "20px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div
          style={{
            backgroundColor: "rgba(0, 166, 158, 0.1)",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "15px",
            border: "1px solid #10e110",
            alignContent: "center",
          }}
        >
          <p style={{ color: "#fff", fontSize: "1.1em" }}>
            🔔 Registration deadline extended till May 8th, 2025
          </p>
          {/* <div className="timecount">
            <div
              className="t"
              style={{
                fontSize: "1.5em",
                color: "#00FF2A",
              }}
            >
              Time Remaining
            </div>
            <div className="time">
              <div className="days cele glass">
                <p className="celep">{time.days || 0}</p>
                <span className="celep">Days</span>
              </div>
              <div className="hours cele glass">
                <p className="celep">{time.hours || 0}</p>
                <span className="celep">Hours</span>
              </div>
              <div className="minutes cele glass">
                <p className="celep">{time.minutes || 0}</p>
                <span className="celep">Minutes</span>
              </div>
              <div className="seconds cele glass">
                <p className="celep">{time.seconds || 0}</p>
                <span className="celep">Seconds</span>
              </div>
            </div>
          </div> 
        </div> */}
      </div>

      {/* Welcome message without AOS animations */}
      <div className="presented-by">
        <div className="presented-content">
          <span> Brought to you by </span>
          <h2>Dayananda Sagar College of Engineering</h2>
          <h3>Department of Artificial Intelligence & Machine Learning</h3>
          <h3 style={{ color: "white" }}>
            In Collaboration with Techmiya Solution
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Landing;
