import React from "react";
import { ComparisonCell } from "./ComparisonCell";

interface ComparisonRowProps {
  cells: {
    icon: string;
    primary?: string;
    secondary?: string;
    isDisabled?: boolean;
    isCustom?: boolean;
  }[];
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
      className={`flex gap-10 items-center py-5 w-full ${borderClass} max-md:max-w-full`}
    >
      {cells.map((cell, index) => (
        <ComparisonCell
          key={index}
          icon={cell.icon}
          primary={cell.primary}
          secondary={cell.secondary}
          isDisabled={cell.isDisabled}
          isCustom={cell.isCustom}
        />
      ))}
    </div>
  );
};
