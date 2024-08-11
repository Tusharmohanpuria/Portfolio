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
          ""
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default TypingEffect;
