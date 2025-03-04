"use client";
import * as React from "react";

interface FeatureItemProps {
  iconUrl: string;
  text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ iconUrl, text }) => {
  return (
    <article className="flex flex-col justify-center items-center self-stretch py-1 my-auto rounded-xl">
      <div className="flex gap-2 items-center">
        <img
          src={iconUrl}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          aria-hidden="true"
        />
        <p className="text-base md:text-xl self-stretch my-auto">{text}</p>
      </div>
    </article>
  );
};
