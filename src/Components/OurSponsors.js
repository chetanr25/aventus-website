import React from "react";
import "./css/oursponsors.css";

const sponsors = [
  { logo: "/Ethindia.png", alt: "EthIndia" },
  { logo: "/techmiya.png", alt: "Techmiya" },
  { logo: "/Derbi.webp", alt: "DERBI" },
  { logo: "/sagar.png", alt: "SagarHospitals" },
  { logo: "/geekroom.png", alt: "Geekroom" },
  { logo: "/xyz.webp", alt: "XYZ" },
  { logo: "/DEVlight.png", alt: "Devfolio" },
  { logo: "/DEvpolygon.png", alt: "Polygon" },
  { logo: "/chicavenue.png", alt: "Chicavenue" },
];

function OurSponsors() {
  return React.createElement(
    "section",
    { className: "our-sponsors-section", id: "OurSponsors" },
    React.createElement(
      "h2",
      { className: "our-sponsors-title" },
      "Our Sponsors"
    ),
    React.createElement(
      "div",
      { className: "our-sponsors-grid" },
      sponsors.map(function (s, i) {
        return React.createElement(
          "div",
          { className: "our-sponsor-card", key: i },
          React.createElement("img", {
            src: s.logo,
            alt: s.alt,
            className: "our-sponsor-logo",
          })
        );
      })
    )
  );
}

export default OurSponsors;
