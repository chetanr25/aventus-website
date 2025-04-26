import React from "react";
import "./css/prizepool.css";
import { motion } from "framer-motion";

const PrizePool = () => {
  return (
    <div className="prize-pool-section">
      <motion.div
        className="prize-pool-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="prize-pool-card">
          <div className="glow-effect"></div>
          <h2 className="title">Total Bounty</h2>
          <motion.div
            className="prize-amount"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="currency">₹</span>
            <span className="amount">3.0</span>
            <span className="lakhs">Lakhs</span>
          </motion.div>

          <div className="prize-description">
            <p className="main-desc">
              Unleash your potential and compete for one of the biggest prize
              pools in collegiate hackathons!
            </p>

            <div className="prize-features">
              <div className="feature-item">
                <span className="feature-icon">🏆</span>
                <span className="feature-text">Attractive Cash Prizes</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💼</span>
                <span className="feature-text">Internship Opportunities</span>
                {/* <span className="feature-text"> (maybe)</span>  */}
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span className="feature-text">Mentorship Session</span>
              </div>
              <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span className="feature-text">Incubation Support</span>
              </div>
            </div>

            <div className="additional-perks">
              <h3>Additional Benefits</h3>
              <ul>
                <li>Direct access to industry experts</li>
                <li>Exclusive swag and goodies</li>
                <li>Certificates and recognition</li>
                <li>Networking opportunities</li>
              </ul>
            </div>

           
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrizePool;
