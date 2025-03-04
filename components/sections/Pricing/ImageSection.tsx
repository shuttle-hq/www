import * as React from "react";
import LogoStrip from "./LogoStripe";

export const ImageSection: React.FC = () => {
  return (
    <div className="hidden md:flex items-center py-5 px-8 border border-[#4A677B4D] rounded-[36px] gap-10">
      <p className="hidden xl:block text-xl text-body whitespace-nowrap font-normal">
        Empowering Top Engineers Worldwide
      </p>
      <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
        <LogoStrip />
      </div>
    </div>
  );
};
