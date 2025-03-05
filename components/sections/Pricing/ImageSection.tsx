import * as React from "react";
import LogoStrip from "./LogoStripe";

export const ImageSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center py-5 px-8 w-full max-md:max-w-full">
      <LogoStrip />
    </div>
  );
};
