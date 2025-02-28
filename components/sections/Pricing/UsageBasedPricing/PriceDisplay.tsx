"use client";

import * as React from "react";

interface PriceDisplayProps {
  price: string;
  unit: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, unit }) => {
  return (
    <div className="flex gap-2 items-start">
      <p className="text-2xl text-right text-white">{price}</p>
      <p className="text-sm text-center text-neutral-400">{unit}</p>
    </div>
  );
};
