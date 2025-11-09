"use client";

import React from "react";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: string;
}

export default function ImageSkeleton({ 
  className = "", 
  aspectRatio = "3/4" 
}: ImageSkeletonProps) {
  return (
    <div 
      className={`relative overflow-hidden bg-lightDark ${className}`}
      style={{ aspectRatio }}
    >
      {/* Animated gradient shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      
      {/* Glassmorphism overlay matching portfolio design */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-xl bg-white/5 border-t border-white/10">
          <div className="h-6 bg-white/10 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
