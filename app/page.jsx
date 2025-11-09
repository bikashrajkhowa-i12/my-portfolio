"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { ChevronRight, MessagesSquare } from "lucide-react";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function Home() {
  const [slideScreen, setSlideScreen] = useState(false);

  const styles = `flex flex-col justify-center items-center text-gray-300/80 px-4 md:px-8 lg:px-16`;

  return (
    <>
      <Hero slideScreen={slideScreen} setSlideScreen={setSlideScreen} />
      <Modal />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={slideScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <main className={styles}>
          <section
            id="discover"
            className="min-h-screen flex flex-col xl:pl-80"
          >
            <div className="fixed z-100 top-0 left-0 w-full backdrop-blur-lg px-2 py-3 xl:hidden">
              <div className="flex justify-between items-center text-lg font-bold flex gap-3 pr-4">
                <div
                  className="flex gap-0.5"
                  onClick={() => setSlideScreen(!slideScreen)}
                >
                  <ChevronRight className="mt-0.5 " /> Bikash | Portfolio
                </div>

                <a aria-label="Scroll to footer" href="#footer">
                  <MessagesSquare size={23} />
                </a>
              </div>
            </div>
            <About />
            <Experience />
            <Projects />
          </section>
        </main>
      </motion.div>
      <footer id="footer" className={styles}>
        <Footer />
      </footer>
    </>
  );
}
