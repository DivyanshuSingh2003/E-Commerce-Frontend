// src/Component/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full -z-10"
      options={{
        particles: {
          number: { value: 50 },
          color: { value: "#00ffcc" },
          move: { enable: true, speed: 2 },
          links: { enable: true, color: "#00ffcc" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
