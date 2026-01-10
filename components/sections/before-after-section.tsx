"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-wrapper";

const comparisons = [
  {
    id: 1,
    before: "/man-unkempt-beard-before-grooming.jpg",
    after: "/man-groomed-beard-shaped-after-barbershop.jpg",
  },
];

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const activeItem = comparisons[activeIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-20 sm:py-28 bg-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">
              Transformações
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4 mb-4">
              Antes & <span className="text-copper">Depois</span>
            </h2>

            <p className="text-silver-dark max-w-lg mx-auto">
              Resultado real, feito por quem entende.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {/* Comparison Slider */}
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl select-none">
              {/* AFTER */}
              <img
                src={activeItem.after}
                alt="Depois"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* BEFORE */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <img
                  src={activeItem.before}
                  alt="Antes"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Divider */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-copper z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-copper rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-obsidian"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 18l-6-6 6-6M15 6l6 6-6 6"
                    />
                  </svg>
                </div>
              </div>

              {/* Range */}
              <input
                type="range"
                min={0}
                max={100}
                value={sliderPosition}
                onChange={handleSliderChange}
                className="
                  absolute inset-0 w-full h-full
                  opacity-0 cursor-ew-resize
                  z-20
                  appearance-none
                  touch-none
                "
              />

              {/* Labels */}
              <span className="absolute top-4 left-4 bg-obsidian/80 text-silver text-xs uppercase tracking-wider px-3 py-1 rounded-md z-30">
                Antes
              </span>

              <span className="absolute top-4 right-4 bg-copper/90 text-obsidian text-xs uppercase tracking-wider px-3 py-1 rounded-md z-30">
                Depois
              </span>
            </div>
          </FadeIn>

          {/* Thumbnails */}
          {comparisons.length > 1 && (
            <div className="flex justify-center gap-3 mt-6">
              {comparisons.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setSliderPosition(50);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeIndex === index
                      ? "border-copper"
                      : "border-slate-light/30"
                  }`}
                >
                  <img
                    src={item.after}
                    alt={`Transformação ${index + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
