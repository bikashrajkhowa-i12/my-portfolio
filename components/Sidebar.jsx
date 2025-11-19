"use client";

import React, { useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

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
      className="absolute top-19 right-8 hidden lg:flex flex-col items-start justify-between p-4 gap-24"
    >
      <div className="space-y-1">
        <h1 className="text-5xl font-bold text-gray-100">Bikash Rajkhowa</h1>
        <h2 className="text-2xl font-medium text-gray-300 mt-2">
          Software Engineer
        </h2>

        <Link
          className="flex gap-2 group cursor-pointer mt-4"
          href="/cv/BIKASH_RAJKHOWA_SOFTWARE_ENGINEER_CV.pdf"
          target="_blank"
        >
          <IoDocumentText size={18} className="mt-0.5 text-gray-300" />
          <h1 className="text-md font-medium tracking-tight mb-6 text-gray-200 group-hover:text-teal-300">
            View Résumé
          </h1>
          <MdArrowOutward
            size={15}
            className="mt-1.5 transition duration-100 ease-in group-hover:text-teal-300
                            group-hover:-translate-y-1 group-hover:translate-x-1.5"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {links.map((link, idx) => {
          const isActive = selectedLink === link.href;

          return (
            <div key={idx} className="flex items-center gap-5 cursor-pointer">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isActive ? 85 : 40 }}
                transition={{ duration: 0.08 }}
                className={`h-0.5 bg-gray-200 ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              />

              <a
                aria-label="Scroll to the selected value"
                href={link.href}
                onClick={() => setSelectedLink(link.href)}
                className={`w-full text-xs font-semibold transition-all duration-200 hover:text-cyan-300 tracking-widest ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="pt-25">
        <GetInTouch />
      </div>
    </motion.div>
  );
}

export default Sidebar;
