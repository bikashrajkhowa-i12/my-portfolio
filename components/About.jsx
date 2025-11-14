import React from "react";

import { motion } from "framer-motion";

import Skills from "./Skills";

function About({ slideScreen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={slideScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      id="about"
      className="pt-22 min-h-95 lg:h-auto max-w-2xl"
    >
      <h1 className="text-md font-bold mb-6 text-gray-300">ABOUT</h1>
      <p className="mb-4 font-light text-gray-300/90">
        I'm a software engineer specializing in building fast, reliable, and
        scalable web applications. My work spans frontend development, backend
        services, database design, and cloud-based architectures. I focus on
        writing clean code, creating intuitive user experiences, and delivering
        solutions that balance performance with maintainability.
      </p>
      <p className="mb-4 font-light">
        Currently, I’m exploring new opportunities where I can contribute my
        skills, take on meaningful challenges, and continue growing as a
        developer.
      </p>
      <p className="mb-4 font-light">
        Through my past experiences and projects, I’ve worked on challenges that
        shaped how I approach{" "}
        <strong className="text-gray-300 font-semibold">problem-solving</strong>
        , <strong className="text-gray-300 font-semibold">collaboration</strong>
        , and{" "}
        <strong className="text-gray-300/90 font-semibold">teamwork</strong>.
        Each of them gave me something new to learn—whether it was mastering a
        tool , adapting to different requirements , or finding better ways to
        write clean maintainable code .
      </p>
      <p className="mb-4 text-gray-400/90">
        Away from the screen, you’ll usually find me playing guitar to unwind,
        gaming for some fun, or out on my bike enjoying the outdoors.
      </p>
      <Skills />
    </motion.div>
  );
}

export default About;
