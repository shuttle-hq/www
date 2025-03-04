import React from "react";
import { ComparisonRow } from "./ComparisonRow";

interface ComparisonSectionProps {
  title: string;
  rows: {
    cells: {
      icon: React.ComponentType<any>;
      primary?: string;
      secondary?: string;
      isDisabled?: boolean;
      isCustom?: boolean;
    }[];
  }[];
  className?: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title,
  rows,
  className = "",
}) => {
  return (
    <section className={`w-full ${className} max-w-[1280px]`}>
      <header className="flex gap-10 items-center pt-2 pb-5 px-4 lg:px-8 max-w-full text-xl text-zinc-300">
        <h2 className="flex gap-2 items-center self-stretch my-auto min-w-60">
          <span className="flex-1 shrink gap-1 self-stretch my-auto w-full basis-0 min-w-60">
            {title}
          </span>
        </h2>
      </header>
      {rows.map((row, index) => (
        <ComparisonRow
          key={index}
          cells={row.cells}
          noBorder={index === rows.length - 1}
        />
      ))}
    </section>
  );
};
