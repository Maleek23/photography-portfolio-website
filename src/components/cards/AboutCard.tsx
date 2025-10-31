"use client";

import React from "react";
import { Separator } from "../ui/separator";
import MainButton from "../common/MainButton";
import { PORTFOLIO_EMAIL, PORTFOLIO_LOCATION, SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";
import Link from "next/link";

function AboutCard() {
  const scrollToFooter = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="border border-lightDark rounded-[0.625rem]">
      {/* My Story */}
      <div className="flex gap-2 items-center pt-[2.5rem] px-[2.5rem]">
        <img src="/images/few_legs_star.png" alt="half star" />
        <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
          My Story
        </p>
      </div>
      <p className="text-customGrayAlt2 text-[0.875rem] md:text-[1rem] mt-[0.75rem] px-[2.5rem] leading-relaxed">
        I&apos;m Abdulmalik Ajisegiri, but you can call me Malik. Based in HTX/DTX, I&apos;m a self-taught photographer, videographer, and artist who discovered my passion for capturing moments through a camera lens. What started as curiosity evolved into an obsession with visual storytelling.
      </p>
      <p className="text-customGrayAlt2 text-[0.875rem] md:text-[1rem] mt-[1rem] px-[2.5rem] leading-relaxed">
        My work is driven by a mission: celebrating melanin-richness and creating space for authentic representation. Every frame I capture is intentional—whether it&apos;s the way light hits skin, the confidence in someone&apos;s eyes, or the energy of a live performance.
      </p>

      <Separator className="bg-lightDark my-[2.5rem]" />

      {/* My Approach */}
      <div className="px-[2.5rem]">
        <div className="flex gap-2 items-center">
          <img src="/images/few_legs_star.png" alt="half star" />
          <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
            My Approach
          </p>
        </div>
        <p className="text-customGrayAlt2 text-[0.875rem] md:text-[1rem] mt-[0.75rem] leading-relaxed">
          I believe photography is more than just taking pictures—it&apos;s about freezing emotion, telling stories, and creating art that resonates. My style blends creativity with authenticity, capturing both the planned moments and the spontaneous magic in between.
        </p>
        <p className="text-customGrayAlt2 text-[0.875rem] md:text-[1rem] mt-[1rem] leading-relaxed">
          Whether I&apos;m shooting graduation portraits, creative concepts, or high-energy concert moments, I bring the same dedication: making you feel comfortable, capturing your essence, and delivering images you&apos;ll treasure forever.
        </p>
      </div>

      <Separator className="bg-lightDark my-[2.5rem]" />

      {/* What I Specialize In */}
      <div className="px-[2.5rem]">
        <div className="flex gap-2 items-center">
          <img src="/images/few_legs_star.png" alt="half star" />
          <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
            What I Do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[1.5rem]">
          <div className="bg-superGray/20 border border-superGray rounded-lg p-4">
            <p className="text-primary font-[600] text-[1rem] mb-2">Portrait Sessions</p>
            <p className="text-customGrayAlt2 text-[0.813rem] leading-relaxed">
              Capturing personality, confidence, and authentic self-expression through creative portrait photography.
            </p>
          </div>
          <div className="bg-superGray/20 border border-superGray rounded-lg p-4">
            <p className="text-primary font-[600] text-[1rem] mb-2">Graduation Shoots</p>
            <p className="text-customGrayAlt2 text-[0.813rem] leading-relaxed">
              Celebrating academic achievements with timeless images that honor your milestone moment.
            </p>
          </div>
          <div className="bg-superGray/20 border border-superGray rounded-lg p-4">
            <p className="text-primary font-[600] text-[1rem] mb-2">Creative Projects</p>
            <p className="text-customGrayAlt2 text-[0.813rem] leading-relaxed">
              Pushing artistic boundaries with conceptual photography that challenges conventional perspectives.
            </p>
          </div>
          <div className="bg-superGray/20 border border-superGray rounded-lg p-4">
            <p className="text-primary font-[600] text-[1rem] mb-2">Events & Concerts</p>
            <p className="text-customGrayAlt2 text-[0.813rem] leading-relaxed">
              High-energy event coverage capturing the raw emotion and unforgettable moments of live performances.
            </p>
          </div>
        </div>
      </div>

      <Separator className="bg-lightDark my-[2.5rem]" />

      {/* Contact */}
      <div className="px-[2.5rem]">
        <div className="flex gap-2 items-center">
          <img src="/images/few_legs_star.png" alt="half star" />
          <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
            Let&apos;s Connect
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between my-[1.5rem]">
          <div>
            <p className="text-[1rem] font-[500] text-customGray90">
              Email
            </p>
            <p className="text-[1rem] font-[500] text-customGrayAlt2">
              {PORTFOLIO_EMAIL}
            </p>
          </div>

          <div>
            <p className="text-[1rem] font-[500] text-customGray90">
              Location
            </p>
            <p className="text-[1rem] font-[500] text-customGrayAlt2">
              {PORTFOLIO_LOCATION}, USA
            </p>
          </div>
        </div>

        <p className="text-customGrayAlt2 text-[0.875rem] leading-relaxed mb-[1.5rem]">
          Ready to create something amazing together? Whether you need portraits, event coverage, or want to collaborate on a creative project, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 p-[2.5rem] pt-0">
        <div className="border border-lightDark rounded-[6.25rem] inline-flex justify-between p-[0.62rem] gap-4 w-[210px]">
          <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/instagram_icon.png"
              alt="instagram"
              className="cursor-pointer"
            />
          </a>
          <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/x_icon.png"
              alt="tiktok"
              className="cursor-pointer"
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-[1rem]">
          <Link href="/services">
            <MainButton 
              text="Book a Session" 
              classes="w-full md:w-[inherit]"
            />
          </Link>
          <Link href="/contact">
            <MainButton 
              text="Get In Touch" 
              classes="w-full md:w-[inherit] bg-superGray hover:bg-superGray/80"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
