"use client";

import { useState } from "react";

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

  const mainBgColor = `bg-slate-900`;

  return (
    <>
      <Hero slideScreen={slideScreen} setSlideScreen={setSlideScreen} />
      <Modal />
      <main
        className={`flex flex-col justify-center items-center ${mainBgColor} text-gray-300/80 px-4 md:px-8 lg:px-16`}
      >
        <section id="discover" className="min-h-screen flex flex-col xl:pl-80">
          <div className="fixed z-100 top-0 left-0 w-full backdrop-blur-lg p-2 xl:hidden">
            <div className="flex justify-between items-center text-lg font-bold flex gap-3 pr-4">
              <div
                className="flex gap-0.5"
                onClick={() => setSlideScreen(!slideScreen)}
              >
                <ChevronRight className="mt-0.5 " /> Bikash | Portfolio
              </div>

              <a href="#footer">
                <MessagesSquare size={23} />
              </a>
            </div>
          </div>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </section>
      </main>
    </>
  );
}
