import React from "react";
import "./css/prevsponsors.css";

const PrevSponsors = () => {
  return (
    <div className="prev-sponsors-section">
      <div className="prev-sponsors-content">
        <h2>Sponsors</h2>
        <div className="sponsors-grid">
          {/* Add your previous sponsors here */}
          <div className="sponsor-card">
            <img src="/sponsor1.png" alt="Sponsor 1" />
          </div>
          <div className="sponsor-card">
            <img src="/sponsor2.png" alt="Sponsor 2" />
          </div>
          {/* Add more sponsor cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default PrevSponsors;
