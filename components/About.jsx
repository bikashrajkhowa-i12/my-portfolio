import React from "react";

import Skills from "./Skills";

function About() {
  return (
    <div id="about" className="pt-20 min-h-95 lg:h-auto max-w-3xl">
      <h1 className="text-2xl lg:text-2xl font-semi-bold tracking-tight mb-6 text-gray-300">
        About
      </h1>
      <p className="mb-4 text-gray-400/90">
        I love building web applications that are seamless, reliable, and
        thoughtfully designed, combining creativity with problem-solving to
        bring ideas to life. Working across both frontend and backend excites
        me, especially the challenge of integrating the two into polished,
        full-stack solutions. I enjoy exploring new technologies and
        experimenting with different approaches, focusing on building software
        that’s both functional and scalable.
      </p>
      <p className="mb-4 text-gray-400/90">
        Currently, I’m exploring new opportunities where I can contribute my
        skills, take on meaningful challenges, and continue growing as a
        developer.
      </p>
      <p className="mb-4 text-gray-400/90">
        Through my past experiences and projects, I’ve worked on challenges that
        shaped how I approach{" "}
        <strong className="text-gray-300 font-semibold">problem-solving</strong>
        , <strong className="text-gray-300 font-semibold">collaboration</strong>
        , and <strong className="text-gray-300 font-semibold">teamwork</strong>.
        Each of them gave me something new to learn—whether it was mastering a
        tool , adapting to different requirements , or finding better ways to
        write clean maintainable code .
      </p>
      <p className="mb-4 text-gray-400/90">
        Away from the screen, you’ll usually find me playing guitar to unwind,
        gaming for some fun, or out on my bike enjoying the outdoors.
      </p>
      <Skills />
    </div>
  );
}

export default About;
