"use client";

import React from "react";
import { Separator } from "../ui/separator";
import MainButton from "../common/MainButton";
import { PORTFOLIO_EMAIL, PORTFOLIO_BIO, PORTFOLIO_LOCATION, SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

function AboutCard() {
  const scrollToFooter = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="border border-lightDark rounded-[0.625rem]">
      <div className="flex gap-2 items-center pt-[2.5rem] px-[2.5rem]">
        <img src="/images/few_legs_star.png" alt="half star" />
        <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
          Introduction
        </p>
      </div>
      <p className="text-customGrayAlt2 text-[0.875rem] mt-[0.75rem] px-[2.5rem]">
        {PORTFOLIO_BIO}
      </p>

      <Separator className="bg-lightDark my-[2.5rem]" />

      <div className="px-[2.5rem]">
        <div className="flex gap-2 items-center">
          <img src="/images/few_legs_star.png" alt="half star" />
          <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
            Contact Information
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-4 justify-between my-[2.5rem]">
          <div>
            <p className="text-[1.125rem] font-[500] text-customGray90">
              Email
            </p>
            <p className="text-[1.125rem] font-[500] text-customGrayAlt2">
              {PORTFOLIO_EMAIL}
            </p>
          </div>

          <div>
            <p className="text-[1.125rem] font-[500] text-customGray90">
              Location
            </p>
            <p className="text-[1.125rem] font-[500] text-customGrayAlt2">
              {PORTFOLIO_LOCATION}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-4 p-[2.5rem]">
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

        <div className="flex flex-col lg:flex-row gap-[1.25rem]">
          <MainButton 
            text="Let's Work" 
            classes="w-full md:w-[inherit]" 
            action={scrollToFooter}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
