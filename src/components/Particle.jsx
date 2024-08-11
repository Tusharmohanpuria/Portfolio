import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleEffect = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleOptions = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          area: 1500,
        },
      },
      links: {
        enable: false,
        opacity: 0.02,
      },
      move: {
        direction: "left",
        speed: 0.1,
        random: true,
        straight: false,
      },
      size: {
        value: 1.5,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="particles" init={particlesInit} options={particleOptions} />;
};

export default ParticleEffect;
