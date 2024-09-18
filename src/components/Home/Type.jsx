import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Frontend Engineer",
          "MERN Stack Specialist",
          "Backend Engineer",
          "Full-Stack Developer",
          "Cybersecurity Enthusiast",
          "React.js Expert",
          "Innovator in Web Technologies",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
};

export default TypingEffect;
