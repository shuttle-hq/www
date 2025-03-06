"use client";

import { CSSProperties } from "react";
import { mergeClasses } from "../lib/helpers";

interface BackgroundShapeProps {
  className?: string;
  right?: boolean;
  left?: boolean;
  background?: string;
  style?: CSSProperties;
}

export const BackgroundShape = ({
  right,
  left,
  background,
  className,
  style,
}: BackgroundShapeProps) => {
  return (
    <div
      className={mergeClasses(
        "w-[758px] h-[398px] absolute -z-10 top-1/2 rounded-3xl",
        {
          "left-0": left,
          "right-0": right,
        },
        className,
      )}
      style={{
        filter: "blur(200px)",
        transform: left
          ? "translateX(-20%) translateY(-50%) rotate(20deg)"
          : "translateX(20%) translateY(-50%) rotate(-20deg)",
        background:
          background ??
          "linear-gradient(62.43deg, rgba(252, 84, 12, 0.425) 54.71%, rgba(56, 212, 233, 0.325) 79.8%)",
        ...style,
      }}
    />
  );
};
