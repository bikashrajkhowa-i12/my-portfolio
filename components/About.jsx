import React from "react";

import { FiUser } from "react-icons/fi";

function About() {
  return (
    <div id="about" className="pt-20 min-h-95 lg:h-auto prose">
      <div className="flex gap-4">
        <FiUser size={34} className="mt-0.5" />
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
          About
        </h1>
      </div>{" "}
      <p className="max-w-3xl mb-4 text-gray-400/90">
        I love building web applications that are seamless, reliable, and
        thoughtfully designed, combining creativity with problem-solving to
        bring ideas to life. Working across both frontend and backend excites
        me, especially the challenge of integrating the two into polished,
        full-stack solutions. I enjoy exploring new technologies and
        experimenting with different approaches, focusing on building software
        that’s both functional and scalable. :)
      </p>
    </div>
  );
}

export default About;
