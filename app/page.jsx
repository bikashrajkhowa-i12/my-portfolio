"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  const [slideScreen, setSlideScreen] = useState(false);

  const mainBgColor = `bg-slate-900`;

  return (
    <>
      <Hero slideScreen={slideScreen} setSlideScreen={setSlideScreen} />
      <main
        className={`flex flex-col justify-center items-center ${mainBgColor} text-gray-300/80 px-4 md:px-8 lg:px-16`}
      >
        <section id="discover" className="min-h-screen flex flex-col xl:pl-80">
          <div className="fixed z-100 top-0 left-0 w-full backdrop-blur p-4 xl:hidden">
            <div
              className="text-start text-xl font-bold flex gap-2"
              onClick={() => setSlideScreen(!slideScreen)}
            >
              <ChevronRight className="mt-0.5 " /> Bikash | Portfolio
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
