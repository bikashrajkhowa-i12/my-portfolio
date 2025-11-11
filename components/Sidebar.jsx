"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import GetInTouch from "./GetInTouch";

function Sidebar() {
  const [selectedLink, setSelectedLink] = useState("#about");

  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="absolute top-16 right-16 hidden lg:flex flex-col items-start justify-between p-4 gap-20"
    >
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100">
          Bikash Rajkhowa
        </h1>
        <h2 className="text-xl font-medium tracking-tight text-gray-200">
          Software Engineer
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {links.map((link, idx) => {
          const isActive = selectedLink === link.href;

          return (
            <div key={idx} className="flex items-center gap-2 cursor-pointer">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isActive ? 60 : 10 }}
                transition={{ duration: 0.08 }}
                className={`h-0.5 bg-gray-200 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
              />

              <a
                aria-label="Scroll to the selected value"
                href={link.href}
                onClick={() => setSelectedLink(link.href)}
                className={`text-xs font-bold transition-all duration-200 hover:text-cyan-300 tracking-widest ${
                  isActive ? "text-white" : "text-white/50"
                }`}
              >
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="pt-50">
        <GetInTouch />
      </div>
    </motion.div>
  );
}

export default Sidebar;
