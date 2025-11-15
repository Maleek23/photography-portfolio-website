"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container */}
      <div
        className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 select-none cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            quality={95}
            priority
          />
          {/* After Label */}
          <div className="absolute top-4 right-4 glass backdrop-blur-xl px-4 py-2 rounded-lg">
            <span className="text-white text-[0.75rem] font-[600] uppercase tracking-wider">
              {afterLabel}
            </span>
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div
          className="absolute inset-0 overflow-hidden transition-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover"
            quality={95}
            priority
          />
          {/* Before Label */}
          <div className="absolute top-4 left-4 glass backdrop-blur-xl px-4 py-2 rounded-lg">
            <span className="text-white text-[0.75rem] font-[600] uppercase tracking-wider">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.6)] flex items-center justify-center pointer-events-auto cursor-ew-resize">
            {/* Left Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary absolute left-2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            {/* Right Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary absolute right-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <p className="text-customGrayAlt text-[0.813rem] text-center mt-4">
        Drag the slider to compare before and after editing
      </p>
    </div>
  );
}
