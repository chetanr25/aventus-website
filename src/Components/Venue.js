import React from 'react';
import './css/map.css';


const Venue = () => {
  return (
    <div className="venue-section">
      <div className="venue-content">
        <h2>Venue</h2>
        <div className="venue-details">
          <div className="venue-address">
            <h3>Location</h3>
            <p>Your College Name</p>
            <p>Street Address</p>
            <p>City, State - PIN Code</p>
          </div>
          <div className="venue-map">
            {/* Add your map embed code here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue; 