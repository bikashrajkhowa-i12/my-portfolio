import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";
import { FaChevronCircleRight } from "react-icons/fa";

function Hero({ slideScreen, setSlideScreen }) {
  const bgColor = "";

  return (
    <section
      className={`fixed inset-0 ${bgColor} flex flex-col justify-center text-gray-400
        p-4 items-center z-101 transition-translate duration-400 ease-in-out ${
          slideScreen
            ? "-translate-x-full xl:-translate-x-[61vw] bg-none"
            : "tanslate-x-0"
        }`}
    >
      {!slideScreen && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl text-left space-y-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <div className="text-4xl md:text-6xl font-bold">
            <h1>Hi,</h1>
          </div>

          <div className="text-4xl md:text-6xl font-semibold">
            I’m{" "}
            <span className="bg-gradient-to-tl from-cyan-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Bikash Rajkhowa
            </span>
            <h2 className="mt-2 text-xl md:text-2xl font-medium text-teal-400">
              Software Engineer
            </h2>
          </div>

          <p className="mt-6 text-base md:text-lg font-light text-gray-300/70">
            Passionate about building scalable, reliable, and user-centric
            applications with modern web technologies.
          </p>

          <div className="mt-20 flex justify-center">
            <a
              href="#about"
              aria-label="Scroll to Discover section"
              className="group"
            >
              <Button
                aria-label="Discover portfolio button"
                onClick={() => setSlideScreen(!slideScreen)}
                variant="outline"
                className="bg-transparent rounded-full text-sm font-medium p-4 md:p-5 cursor-pointer
                hover:bg-teal-400 transition-all duration-300 ease-out tracking-tight"
              >
                View My Work{" "}
                <FaChevronCircleRight className="transition-transform group-hover:scale-150 transition-all duration-400" />
              </Button>
            </a>
          </div>
        </motion.div>
      )}
      {slideScreen && <Sidebar />}
      {!slideScreen && (
        <IconChevronCompactLeft
          size="70"
          onClick={() => setSlideScreen(!slideScreen)}
          className={`hidden md:inline absolute right-0 hover:scale-125 hover:opacity-50 transition-all duration-300 ease-out ${
            !slideScreen ? "opacity-20" : "opacity-0"
          }`}
        />
      )}
      {slideScreen && (
        <IconChevronCompactRight
          size="70"
          onClick={() => setSlideScreen(!slideScreen)}
          className={`hidden md:inline absolute right-0 hover:scale-125 hover:opacity-50 transition-all duration-300 ease-out ${
            slideScreen ? "opacity-20" : "opacity-0"
          }`}
        />
      )}
    </section>
  );
}

export default Hero;
