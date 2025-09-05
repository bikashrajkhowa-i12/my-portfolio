"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function CustomCarousel({ screenshots }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-md">
      {/* Slider track */}
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-3.5/6 lg:w-5/6 h-2/2 object-contain rounded-md border-2 border-cyan-200/20 shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <ChevronLeft
        onClick={prevSlide}
        size={50}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-black bg-gray-400/60 hover:md:bg-gray-300/90 rounded-full transition duration-300 ease-out"
      />

      <ChevronRight
        onClick={nextSlide}
        size={50}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-black bg-gray-400/60 hover:md:bg-gray-300/90 rounded-full transition duration-300 ease-out"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
