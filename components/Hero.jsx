import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";

function Hero({ slideScreen, setSlideScreen }) {
  const bgColor = "bg-gradient-to-r from-gray-900 to-slate-900";

  return (
    <section
      className={`fixed inset-0 ${bgColor} flex flex-col justify-center text-gray-400
        p-4 items-center z-101 transition-translate duration-400 ease-in-out ${
          slideScreen
            ? "-translate-x-full xl:-translate-x-[70vw]"
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

          <div className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-tight">
              I’m Bikash Rajkhowa
            </span>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">
              Software Engineer
            </h2>
          </div>

          <p className="mt-6 text-base md:text-lg font-medium text-gray-300 tracking-tight">
            I build full-stack web applications that bring ideas to life in a
            simple and reliable way.
          </p>

          <div className="mt-16 flex justify-center">
            <a href="#about" aria-label="Scroll to Discover section">
              <Button
                aria-label="Discover portfolio button"
                onClick={() => setSlideScreen(!slideScreen)}
                variant="outline"
                className="bg-transparent rounded-lg text-md p-4 md:p-5 font-semibold "
              >
                Discover
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
          className={`hidden md:inline absolute right-0 hover:scale-125 transition-all duration-300 ease-out ${
            !slideScreen ? "opacity-30" : "opacity-0"
          }`}
        />
      )}
      {slideScreen && (
        <IconChevronCompactRight
          size="70"
          onClick={() => setSlideScreen(!slideScreen)}
          className={`hidden md:inline absolute right-0 hover:scale-125 transition-all duration-300 ease-out ${
            slideScreen ? "opacity-30" : "opacity-0"
          }`}
        />
      )}
    </section>
  );
}

export default Hero;
