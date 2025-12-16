import React from "react";
import { ComparisonCell } from "./ComparisonCell";
import { Cell } from "./type";

interface ComparisonRowProps {
  cells: Cell[];
}

export const ComparisonRow: React.FC<ComparisonRowProps> = ({ cells }) => {
  return (
    <div
      className={`flex items-center py-5 w-full border-b border-slate-6000 border-opacity-30 max-md:max-w-full flex-wrap`}
    >
      {cells.map((cell, index) => (
        <ComparisonCell key={index} width="w-full lg:w-1/3" {...cell} />
      ))}
    </div>
  );
};
