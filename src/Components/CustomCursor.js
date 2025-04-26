import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      style={{
        width: "8px",
        height: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
