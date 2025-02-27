import * as React from "react";
import LogoStrip from "./LogoStripe";

export const ImageSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-16 my-auto ">
      <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
        <LogoStrip />
      </div>
    </div>
  );
};
