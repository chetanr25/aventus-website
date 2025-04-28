import React from "react";
import { useState, useEffect } from "react";
import "./css/about.css";
// import { swarmBackground } from 'threejs-toys'

export default function About() {
  const [time, setTime] = useState({});
  useEffect(() => {
    let date = new Date("May 18, 2025 09:00:00").getTime();
    setInterval(function () {
      let now = new Date().getTime();
      let dist = date - now;
      let time = {
        days: Math.floor(dist / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((dist % (1000 * 60)) / 1000),
      };
      setTime(time);
    }, 1000);
  }, []);

  return (
    <div className="text-white s-two" data-section-name={"s-two"} id={"About"}>
      <div className="acontent">
        <div className="aleft glass">
          <div className="clgabout">
            <h1>About Aventus 3.0</h1>
            <p>
              {" "}
              A 24-hour hackathon hosted by the Department of AI & ML, Dayananda Sagar 
               College of Engineering where bold ideas meet cutting-edge technology.
            </p>
            <p>
            On May 17th and 18th, step into a high-energy offline challenge where innovation 
            isn’t just encouraged, it’s expected! 
            </p>
            <p>
            Choose your battlefield: AI in Healthcare, AI in Cybersecurity, AI in Edge 
            Computing and AI in Defense & Disaster Response—four tracks, endless possibilities.
            </p>
            <p>
              Join us at Aventus as we foster innovation, nurture talent, and
              redefine the future of technology together. Register now and be a
              part of this incredible journey!
            </p>
            <p>Code, create and compete as you collaborate with brilliant minds and pitch game
            changing solutions to industry experts.</p>
            <p>This isn’t just a hackathon. It’s a launchpad for the future. Register now and be part of 
            the AI revolution! </p>
            <p>
              <strong>
              Build a better future with Aventus,Where AI Thrives and Technology Flourishes.
              </strong>
            </p>
          </div>
        </div>

        <div className="aright">
          <img src="aventus.gif" alt="" className="" />
        </div>
      </div>
      {/* Set the time as the following instead of 0 for days time.days, for hours time.hours, for minutes time.minutes, and for seconds time.seconds. */}
      <div className="timecount">
        <div className="t">Time left for awesomeness</div>
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
    </div>
  );
}
