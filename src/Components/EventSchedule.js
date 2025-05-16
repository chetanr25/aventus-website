import React, { useEffect, useRef, useState } from "react";
import "./css/EventSchedule.css";

const EventSchedule = () => {
  const progressRef = useRef(null);
  const timelineSectionRef = useRef(null);
  const dotRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  const events = [
    { day: "Day 1 - Saturday, 17th May", time: "8:00 AM", title: "Check-in and Registration Starts" },
    { time: "9:00 AM", title: "Inauguration Ceremony" },
    { time: "10:00 AM", title: "Assignment of Respective Rooms" },
    { time: "10:30 AM", title: "Coding Starts!" },
    { time: "12:30 PM", title: "First Round of Mentoring" },
    { time: "1:30 PM", title: "Lunch" },
    { time: "3:30 PM", title: "Tech Session" },
    { time: "4:30 PM", title: "Snacks" },
    { time: "6:30 PM", title: "Second Round of Mentoring" },
    { time: "8:30 PM", title: "Dinner" },

    { day: "Day 2 - Sunday, 18th May", time: "12:00 AM", title: "Midnight Snacks" },
    { time: "4:00 AM", title: "Third Round of Mentoring" },
    { time: "8:00 AM", title: "Judging Round Commences" },
    { time: "9:30 AM", title: "Breakfast" },
    { time: "10:30 AM", title: "Coding Stops! Devfolio Submission" },
    { time: "11:30 AM", title: "Grand Jury Round" },
    { time: "1:30 PM", title: "Announcement of Prizes & Lunch" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = timelineSectionRef.current;
      const line = progressRef.current;
      if (!section || !line) return;

      // Get the dimensions of the timeline container
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Get current scroll position
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Check if section is visible
      const isSectionVisible = 
        scrollY + viewportHeight > sectionTop && 
        scrollY < sectionTop + sectionHeight;
      
      setIsVisible(isSectionVisible);
      
      // Calculate timeline visibility thresholds
      const startPoint = sectionTop - viewportHeight * 0.7; // Start earlier for smoother effect
      const endPoint = sectionTop + sectionHeight - viewportHeight * 0.3; // End later
      
      // Calculate progress percentage (clamped between 0-1)
      const totalDistance = endPoint - startPoint;
      const currentDistance = scrollY - startPoint;
      const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
      
      // Apply the progress to the line height
      line.style.height = `${progress * 100}%`;
      
      // Update dots based on their position relative to scroll
      dotRefs.current.forEach((dot, idx) => {
        if (!dot) return;
        
        // Calculate dot position relative to viewport
        const dotPosition = dot.getBoundingClientRect().top;
        const viewportCenter = viewportHeight / 2;
        
        // This dot has been passed if it's above the center of the viewport
        if (dotPosition < viewportCenter) {
          dot.classList.add("active");
          // Add a milder glow to active dots
          dot.style.boxShadow = "0 0 8px #00ff2a, 0 0 12px #00ff2a";
        } else {
          dot.classList.remove("active");
          dot.style.boxShadow = "";
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial calculation with a slight delay to ensure DOM is ready
    setTimeout(handleScroll, 200);
    
    // Recalculate on window resize for responsive behavior
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
        {/* Static timeline line background */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1.5 bg-gray-800 z-0 timeline-line" />

        {/* Always visible baseline glow line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1.5 bg-[#00ff2a]/40 z-5 timeline-line"
          style={{
            boxShadow: "0 0 5px #00ff2a, 0 0 10px #00ff2a",
            opacity: 0.5,
          }}
        />

        {/* Scroll-linked progress line with milder glow */}
        <div
          ref={progressRef}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1.5 bg-[#00ff2a] z-10 transition-all duration-300"
          style={{
            height: "0%",
            boxShadow: "0 0 8px #00ff2a, 0 0 12px #00ff2a",
          }}
        />

        <div className="space-y-12 md:space-y-24 relative z-20">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Mobile View */}
                <div className="md:hidden pl-12 mb-6 relative">
                  <div
                    ref={(el) => (dotRefs.current[index] = el)}
                    className="absolute left-4 top-6 w-4 h-4 bg-black border-2 border-[#00ff2a] rounded-full z-20 glow-dot timeline-dot transition-all duration-300"
                  />
                  <div className="absolute left-4 top-6 w-8 h-1 bg-[#00ff2a] transform translate-y-1 timeline-connector" />
                  <div className="bg-black/50 backdrop-blur-sm border border-[#00ff2a] p-4 rounded-md w-full event-card">
                    {event.day ? (
                      <h3 className="text-lg font-mono text-[#00ff2a] font-bold mb-2">
                        {event.day}
                      </h3>
                    ) : (
                      <>
                        <h3 className="text-lg font-mono text-[#00ff2a] font-bold mb-2">
                          {event.time}
                        </h3>
                        <p className="text-green-200 text-sm">{event.title}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Desktop View */}
                {isLeft ? (
                  <>
                    <div className="hidden md:block md:w-1/2 pr-8 flex justify-end">
                      <div className="ml-auto w-full max-w-md bg-black/50 backdrop-blur-sm border border-[#00ff2a] p-6 rounded-md event-card">
                        {event.day ? (
                          <h3 className="text-xl font-mono text-[#00ff2a] font-bold mb-2">
                            {event.day}
                          </h3>
                        ) : (
                          <>
                            <h3 className="text-xl font-mono text-[#00ff2a] font-bold mb-2">
                              {event.time}
                            </h3>
                            <p className="text-green-200 font-light">{event.title}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div
                      ref={(el) => (dotRefs.current[index] = el)}
                      className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#00ff2a] rounded-full z-20 glow-dot timeline-dot transition-all duration-300"
                    />
                    <div className="hidden md:block md:w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-1/2" />
                    <div
                      ref={(el) => (dotRefs.current[index] = el)}
                      className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#00ff2a] rounded-full z-20 glow-dot timeline-dot transition-all duration-300"
                    />
                    <div className="hidden md:block md:w-1/2 pl-8">
                      <div className="w-full max-w-md bg-black/50 backdrop-blur-sm border border-[#00ff2a] p-6 rounded-md event-card">
                        {event.day ? (
                          <h3 className="text-xl font-mono text-[#00ff2a] font-bold mb-2">
                            {event.day}
                          </h3>
                        ) : (
                          <>
                            <h3 className="text-xl font-mono text-[#00ff2a] font-bold mb-2">
                              {event.time}
                            </h3>
                            <p className="text-green-200 font-light">{event.title}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;