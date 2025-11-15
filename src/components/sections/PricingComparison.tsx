"use client";

import React from "react";
import { pricingData } from "@/lib/pricingData";

interface PricingComparisonProps {
  serviceType: "grad" | "solo" | "events";
}

export default function PricingComparison({ serviceType }: PricingComparisonProps) {
  const service = pricingData[serviceType];
  const packages = service.packages;

  return (
    <div className="mt-12 mb-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-white text-[1.5rem] md:text-[2rem] font-[700] uppercase mb-3">
          Compare Packages
        </h3>
        <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem] max-w-2xl mx-auto">
          See all features side-by-side to find the perfect package for your needs
        </p>
      </div>

      {/* Desktop Table View (hidden on mobile) */}
      <div className="hidden md:block glass glass-mobile-optimized rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-6 text-white text-[1rem] font-[600] uppercase">
                Features
              </th>
              {packages.map((pkg) => (
                <th
                  key={pkg.name}
                  className="p-6 text-center"
                  style={{ color: pkg.accent }}
                >
                  <div className="text-[1.25rem] font-[700] uppercase mb-1">
                    {pkg.name}
                  </div>
                  <div className="text-white text-[1.75rem] font-[700]">
                    ${pkg.price}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Duration Row */}
            <tr className="border-b border-white/5">
              <td className="p-6 text-customGrayAlt text-[0.875rem] font-[500]">
                Session Duration
              </td>
              {packages.map((pkg) => (
                <td
                  key={`${pkg.name}-duration`}
                  className="p-6 text-center text-white text-[0.875rem]"
                >
                  {pkg.duration}
                </td>
              ))}
            </tr>

            {/* Dynamic Feature Rows */}
            {/* Collect all unique features */}
            {Array.from(
              new Set(packages.flatMap((pkg) => pkg.features))
            ).map((feature, idx) => (
              <tr key={idx} className="border-b border-white/5 last:border-0">
                <td className="p-6 text-customGrayAlt text-[0.875rem] font-[500]">
                  {feature}
                </td>
                {packages.map((pkg) => (
                  <td
                    key={`${pkg.name}-${idx}`}
                    className="p-6 text-center"
                  >
                    {pkg.features.includes(feature) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-auto"
                        style={{ color: pkg.accent }}
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <span className="text-white/20 text-[1.25rem]">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            {/* Book Now Row */}
            <tr>
              <td className="p-6"></td>
              {packages.map((pkg) => (
                <td key={`${pkg.name}-cta`} className="p-6">
                  <a
                    href={pkg.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full glass glass-hover glass-lift text-white font-[600] py-3 px-4 rounded-xl uppercase text-[0.75rem] text-center hover:scale-105 transition-all duration-300"
                    style={{
                      backgroundColor: `${pkg.accent}33`,
                      borderColor: `${pkg.accent}66`,
                    }}
                  >
                    Book Now
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Accordion View (visible on mobile) */}
      <div className="md:hidden space-y-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="glass glass-mobile-optimized rounded-2xl overflow-hidden"
          >
            {/* Package Header */}
            <div className="p-6 border-b border-white/10">
              <div
                className="text-[1.5rem] font-[700] uppercase mb-2"
                style={{ color: pkg.accent }}
              >
                {pkg.name}
              </div>
              <div className="text-white text-[2rem] font-[700] mb-3">
                ${pkg.price}
              </div>
              <div className="text-customGrayAlt text-[0.875rem]">
                Duration: <span className="text-white font-[500]">{pkg.duration}</span>
              </div>
            </div>

            {/* Features List */}
            <div className="p-6 space-y-3">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: pkg.accent }}
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white text-[0.875rem]">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <a
                href={pkg.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full glass glass-hover glass-lift text-white font-[600] py-4 px-6 rounded-xl uppercase text-[0.875rem] text-center shadow-lg"
                style={{
                  backgroundColor: `${pkg.accent}33`,
                  borderColor: `${pkg.accent}66`,
                }}
              >
                Book {pkg.name} Package
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
