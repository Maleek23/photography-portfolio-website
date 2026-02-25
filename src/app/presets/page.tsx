"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Image from "next/image";
import { presets } from "@/lib/presetsData";
import { useState } from "react";
import { ArrowUpRight, Check, Download, Sparkles } from "lucide-react";

export default function PresetsPage() {
  const [activePreset, setActivePreset] = useState(0);
  const current = presets[activePreset];

  return (
    <main className="bg-background light:bg-white">
      <GrainOverlay />
      <NavBar />

      <div className="px-4 md:px-[6rem] pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16">
        {/* Hero */}
        <div className="max-w-4xl mb-12 md:mb-20">
          <p className="text-primary text-[0.688rem] font-[600] uppercase tracking-[0.3em] mb-4">
            Digital Products
          </p>
          <h1 className="text-white light:text-gray-900 text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-[700] leading-[1.05] tracking-tight mb-5">
            Lightroom{" "}
            <span className="italic text-primary">Presets</span>
          </h1>
          <p className="text-white/45 light:text-gray-500 text-[1rem] md:text-[1.125rem] leading-relaxed max-w-2xl">
            The same color grades I use on client work — built for photographers who want that
            cinematic, editorial look without hours of editing.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex gap-3 mb-10 md:mb-14 overflow-x-auto pb-2">
          {presets.map((preset, i) => (
            <button
              key={preset.slug}
              onClick={() => setActivePreset(i)}
              className={`flex-shrink-0 px-5 md:px-8 py-3 rounded-xl font-[600] uppercase text-[0.75rem] tracking-wider transition-all duration-300 ${
                activePreset === i
                  ? "glass border-2 text-white light:text-gray-900"
                  : "glass text-white/40 light:text-gray-500 border border-white/10 light:border-gray-200 hover:text-white light:hover:text-gray-900 hover:border-white/20"
              }`}
              style={
                activePreset === i
                  ? { borderColor: preset.accent, boxShadow: `0 0 25px ${preset.accent}20` }
                  : {}
              }
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Active Preset Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Left: Before/After Preview */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
              <Image
                src={current.beforeImage}
                alt={`${current.name} preset preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent glow */}
              <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{ backgroundColor: current.accent }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.625rem] font-[700] uppercase tracking-wider text-black"
                  style={{ backgroundColor: current.accent }}
                >
                  <Sparkles className="w-3 h-3" />
                  Preview
                </span>
              </div>
            </div>

            {/* Sample images row */}
            <div className="grid grid-cols-3 gap-3">
              {current.sampleImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={img}
                    alt={`${current.name} sample ${i + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Name & Tagline */}
              <div className="mb-8">
                <h2
                  className="text-[2rem] md:text-[2.5rem] font-[700] leading-tight mb-3"
                  style={{ color: current.accent }}
                >
                  {current.name}
                </h2>
                <p className="text-white/70 light:text-gray-600 text-[1.125rem] italic leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/50 light:text-gray-500 text-[0.938rem] leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {current.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${current.accent}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: current.accent }} />
                    </div>
                    <span className="text-white/70 light:text-gray-700 text-[0.875rem]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Compatibility */}
              <div className="flex flex-wrap gap-2 mb-8">
                {current.compatibleWith.map((app) => (
                  <span
                    key={app}
                    className="glass text-white/50 light:text-gray-500 text-[0.688rem] font-[500] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 light:border-gray-200"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/10 light:border-gray-200">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-white/40 light:text-gray-400 text-[0.75rem] uppercase tracking-wider">
                    Price
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/40 text-[1.25rem]">$</span>
                    <span
                      className="text-[3rem] font-[700] leading-none"
                      style={{ color: current.accent }}
                    >
                      {current.price}
                    </span>
                  </div>
                </div>
                <span className="text-white/30 light:text-gray-400 text-[0.75rem]">
                  One-time purchase
                </span>
              </div>

              <a
                href={`mailto:leekshotit@gmail.com?subject=Preset Purchase: ${current.name}&body=Hi, I'd like to purchase the ${current.name} preset pack ($${current.price}). Please send me the payment details.`}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-[700] uppercase text-[0.813rem] tracking-widest transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-black"
                style={{
                  backgroundColor: current.accent,
                  boxShadow: `0 0 30px ${current.accent}30`,
                }}
              >
                <Download className="w-4 h-4" />
                Get This Preset
              </a>

              <p className="text-center text-white/25 light:text-gray-400 text-[0.688rem] mt-3">
                Instant delivery via email after payment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA — All Presets */}
        <div className="text-center glass rounded-2xl p-8 md:p-12 border border-white/10 light:border-gray-200">
          <h3 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2rem] font-[700] mb-3">
            Want the full collection?
          </h3>
          <p className="text-white/45 light:text-gray-500 text-[0.938rem] mb-6 max-w-lg mx-auto">
            Get all {presets.reduce((acc, p) => acc + (p.features[0]?.match(/\d+/)?.[0] ? parseInt(p.features[0].match(/\d+/)![0]) : 0), 0)} presets across {presets.length} packs for a bundled price.
          </p>
          <a
            href={`mailto:leekshotit@gmail.com?subject=Full Preset Bundle Inquiry&body=Hi, I'm interested in purchasing the full preset bundle. Please send me the details.`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary font-[700] uppercase text-[0.813rem] tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ boxShadow: "0 0 30px rgba(37,99,235,0.3)" }}
          >
            Inquire About Bundle
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
