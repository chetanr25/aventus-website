import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Components/Landing";
import Sponsors from "./Components/Sponsors";
import Tracks from "./Components/Tracks";
import ProblemStatements from "./Components/ProblemStatements";
import About from "./Components/About";
// import Glimpse from "./Components/Glimpse";
import "./App.css";
import Photo from "./Components/photo.js";
import Map from "./Components/map.js";
import IndividualSponsor from "./Components/Individualsponsors.js";
import Faqs from "./Components/Faqs";
import ContactUs from "./Components/ContactUs";
import EventSchedule from "./Components/EventSchedule.js";
import PrizePool from "./Components/PrizePool";
import PrizePodium from "./Components/PrizePodiumdesc.js";

function MainContent() {
  // const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    // Hide cursor on load
    document.body.style.cursor = "default";

    // Handle direct navigation to problem statements via URL hash
    if (window.location.hash === "#ProblemStatements") {
      const element = document.getElementById("ProblemStatements");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => {
      document.body.style.cursor = "default"; // Reset cursor on unmount
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="conta" style={{ background: "transparent" }}>
        <Landing />
        {/* <About /> */}
        <div
          className="individual"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></div>
        <Tracks />
        <ProblemStatements />
        <div>
          <PrizePool />
        </div>
        <PrizePodium />
        <EventSchedule />
        <div style={{ padding: "20px" }}>
          <IndividualSponsor images />
        </div>
        <Sponsors />
        <div
          className="glimpse"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Winners of Aventus 2.0</h1>
        </div>
        {/* <div style={{ padding: "20px" }}>
        
          <Glimpse images={images} />
        </div> */}
        <Faqs />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Photo />
        </div>
        <div className="contact-map-container">
          <div className="contact-section">
            <ContactUs />
          </div>
          <div className="map">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
