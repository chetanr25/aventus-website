import React, { useEffect, useRef } from "react";
import "./css/EventSchedule.css";

const EventSchedule = () => {
  const progressRef = useRef(null);
  const timelineSectionRef = useRef(null);

  const events = [
    {
      time: "April 7",
      title: "Registration Starts",
      description: "The chase is on, claim your spot.",
    },
    {
      time: "May 8",
      title: "Registration ends",
      description: "Your last shot to get in.",
    },
    {
      time: "May 17, 9:00 AM",
      title: "Registration and check-in",
      description: "Arrive and register your attendance.",
    },
    {
      time: "May 17, 10:00 AM",
      title: "Opening Event",
      description: "Kick off the event with inspiring opening remarks.",
    },
    {
      time: "May 17, 11:00 AM",
      title: "Hackathon Begins",
      description: "Start brainstorming and coding innovative projects.",
    },
    {
      time: "May 18, 4:00 PM",
      title: "Hackathon Ends",
      description: "Showcase your final projects and celebrate with awards.",
    },
  ];

  useEffect(() => {
    const line = progressRef.current;
    if (line) {
      line.style.height = "100%";
      line.style.opacity = "1";
      line.style.boxShadow = "0 0 12px #00FF2A, 0 0 24px #00FF2A";
    }
  }, []);

  return (
    <section
      ref={timelineSectionRef}
      className="relative py-12 md:py-20 min-h-screen"
    >
      <h2
        className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12 tracking-wider font-Omega Flight px-4 fade-in"
        style={{ color: "#00FF2A" }}
      >
        EVENT SCHEDULE
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Background Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1 bg-gray-800 z-0 timeline-line" />

        {/* Glow Progress Line */}
        <div
          ref={progressRef}
          className="absolute left-4 md:left-1/2 top-0 transform md:-translate-x-1/2 w-1 bg-[#00FF2A] z-10 transition-all duration-300"
          style={{
            height: "100%",
            boxShadow: "0 0 12px text-green-200, 0 0 24px text-green-200",
            opacity: 1,
          }}
        />

        <div className="space-y-12 md:space-y-24 relative z-20">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Mobile layout */}
              <div className="md:hidden pl-12 mb-6">
                <div className="absolute left-4 top-6 w-3 h-3 bg-black border-2 border-[#00FF2A] rounded-full z-20 glow-dot" />
                <div className="absolute left-4 top-6 w-8 h-1 bg-[#00FF2A] transform translate-y-1 timeline-connector" />
                <div className="bg-black/50 border border-[#00FF2A] p-4 rounded-md w-full event-card">
                  <h3 className="text-lg font-mono text-[#00FF2A] font-bold mb-2">
                    {event.time} - {event.title}
                  </h3>
                  <p className="text-green-200 text-sm">{event.description}</p>
                </div>
              </div>

              {/* Desktop layout */}
              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:block md:w-1/2 pr-8 flex justify-end">
                    <div className="ml-auto w-full max-w-md bg-black/50 border border-[#00FF2A] p-6 rounded-md event-card">
                      <h3 className="text-xl font-mono text-[#00FF2A] font-bold mb-2">
                        {event.time} - {event.title}
                      </h3>
                      <p className="text-green-200 font-light">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-3 h-3 bg-black border-2 border-[#00FF2A] rounded-full z-20 glow-dot" />
                  <div className="hidden md:block md:w-1/2" />
                </>
              ) : (
                <>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-3 h-3 bg-black border-2 border-[#00FF2A] rounded-full z-20 glow-dot" />
                  <div className="hidden md:block md:w-1/2 pl-8">
                    <div className="w-full max-w-md bg-black/50 border border-[#00FF2A] p-6 rounded-md event-card">
                      <h3 className="text-xl font-mono text-[#00FF2A] font-bold mb-2">
                        {event.time} - {event.title}
                      </h3>
                      <p className="text-green-200 font-light">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
