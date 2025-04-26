import { useEffect, useRef, useState } from "react";
import "./css/PrizePodium.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faEarthAmericas, faMedal } from "@fortawesome/free-solid-svg-icons";


export default function PrizePodium() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const specialsRef = useRef(null);

  const podium = [
    {
      title: "Grand Prize",
      aventus_amount: "₹1,00,000",
      position: "center",
      color: "#FFD700",
      delay: "delay-2",
      icon: <FontAwesomeIcon icon={faMedal} size="2x" color="#FFD700" />
    },
    {
      title: "First\nRunner-Up",
      aventus_amount: "₹50,000",
      position: "left",
      color: "#C0C0C0",
      delay: "delay-1",
      icon: <FontAwesomeIcon icon={faMedal} size="2x" color="#C0C0C0" />
    },
    {
      title: "Second Runner-Up",
      aventus_amount: "₹30,000",
      position: "right",
      color: "#CD7F32",
      delay: "delay-3",
      icon: <FontAwesomeIcon icon={faMedal} size="2x" color="#CD7F32" />
    }
  ];

  const specialPrizes = [
    {
      title: "SDG Innovators",
      aventus_amount: "₹10,000",
      description:
        "Awarded to the team that took on real-world challenges and said, 'We’ve got this' — while aligning beautifully with the UN’s Sustainable Development Goals.",
      icon: <FontAwesomeIcon icon={faEarthAmericas} size="2x" color="#00ff2a" />,
      position: "left"
    },
    {
      title: "Women\nin Tech",
      aventus_amount: "₹10,000",
      description:
        "For the brilliant women who led from the front, broke barriers, wrote powerful code, and proved tech has no gender — just genius.",
      icon: <img src="/happy.png" alt="Women in Tech" />,
      position: "center"
    },
    {
      title: "Most Innovative Solution",
      aventus_amount: "₹10,000",
      description:
        "For the wild idea that made us say, 'Wait... can they actually do that?' You pushed the limits, and then casually rewrote them.",
      icon: <FontAwesomeIcon icon={faLightbulb} size="2x" color="#00ff2a" />,
      position: "right"
    },
    {
      title: "Best Business Innovation ",
      aventus_amount: "₹50,000",
      description:
        "For the team that turned code into a company. Bold, market-ready, and backed by DERBI’s seed funding to kickstart your venture.",
        icon: <img src="/Derbi.png" alt="Derbi" style={{ width: '88px', height: '85px', objectFit: 'contain' }} />,

      position: "right"
    }

    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (specialsRef.current) {
      observer.observe(specialsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="prize-wrapper">
      <h2 className="section-title">Prize Podium</h2>

      <div className="podium-row">
        {podium.map((prize, index) => (
          <div
            key={prize.title}
            className={`special-card ${prize.position} ${
              hasAnimated ? `animate delay-${index + 1}` : ""
            }`}
          >
            <div className="emoji-wrapper">
              <div className="emoji shine-icon">{prize.icon}</div>
            </div>
            <h4 className="title">
              {prize.title.split("\n").map((line, idx) => (
                <span key={idx}>{line}<br /></span>
              ))}
            </h4>
            <p className="aventus-amount">{prize.aventus_amount}</p>
          </div>
        ))}
      </div>

      <div className="specials" ref={specialsRef}>
      <h2 className="section-title-1">Special Category Awards</h2>
        {specialPrizes.map((prize, index) => (
          <div
            key={prize.title}
            className={`special-card ${prize.position} ${
              hasAnimated ? `animate delay-${index + 1}` : ""
            }`}
          >
            <div className="emoji-wrapper">
              <div className="emoji shine-icon">{prize.icon}</div>
            </div>
            <h4 className="title">
              {prize.title.split("\n").map((line, idx) => (
                <span key={idx}>{line}<br /></span>
              ))}
            </h4>
            <p className="aventus-amount">{prize.aventus_amount}</p>
            <p className="description">{prize.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
