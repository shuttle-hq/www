"use client";

import Image from "next/image";
import * as React from "react";

interface LogoImageProps {
  src: string;
  className?: string;
  width: number;
  height: number;
}

const LogoImage: React.FC<LogoImageProps> = ({
  src,
  className = "",
  width,
  height,
}) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt="Company Logo"
      className={`object-contain shrink-0 self-stretch my-auto ${className}`}
    />
  );
};

export default LogoImage;
