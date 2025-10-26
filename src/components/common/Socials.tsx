import React from "react";
import { SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

function Socials() {
  return (
    <div className="z-[90] lg:border lg:border-lightDark rounded-[6.25rem] inline-flex justify-between p-[0.62rem] gap-4">
      <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer">
        <img
          src="/images/instagram_icon.png"
          alt="instagram"
          className="cursor-pointer w-[2rem] h-[2rem]"
        />
      </a>
      <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer">
        <img
          src="/images/x_icon.png"
          alt="tiktok"
          className="cursor-pointer w-[2rem] h-[2rem]"
        />
      </a>
    </div>
  );
}

export default Socials;
