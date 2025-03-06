import React from "react";
import { ComparisonCell } from "./ComparisonCell";
import { Cell } from "./type";

interface ComparisonRowProps {
  cells: Cell[];
  noBorder?: boolean;
}

export const ComparisonRow: React.FC<ComparisonRowProps> = ({
  cells,
  noBorder = false,
}) => {
  const borderClass = noBorder
    ? ""
    : "border-b border-slate-600 border-opacity-30";

  return (
    <div
      className={`flex items-center py-5 w-full ${borderClass} max-md:max-w-full flex-wrap`}
    >
      {cells.map((cell, index) => (
        <ComparisonCell key={index} width="w-full lg:w-1/4" {...cell} />
      ))}
    </div>
  );
};
