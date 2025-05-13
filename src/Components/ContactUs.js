import React from "react";
import "./css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDiscord,
  // faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <div className="contact-content">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:one@hackaventus.com" className="contact-link">
            one@hackaventus.com
          </a>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Dayananda Sagar College of Engineering, Bangalore</p>
        </div>
      </div>
      <div className="social-links">
        <a
          href="https://www.instagram.com/hackaventus/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/showcase/aventus-dsce/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://discord.com/invite/Mbb9bkdsCj"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        {/* <a
            href="https://t.me/+SebssWzmQMVmZGI1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a> */}
      </div>
    </div>
  );
};

export default ContactUs;
