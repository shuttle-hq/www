"use client";

import * as React from "react";

interface InputDesignProps {
  className?: string;
}

const InputDesign: React.FC<InputDesignProps> = ({ className = "" }) => {
  return (
    <section className={`flex max-w-0 min-h-0 ${className}`} role="region" />
  );
};

export default InputDesign;
