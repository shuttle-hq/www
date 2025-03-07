import React from "react";
import Image from "next/image";
import { ComparisonRow } from "./ComparisonRow";
import { Row } from "./type";

interface ComparisonSectionProps {
  title: string;
  icon?: string;
  rows: Row[];
  className?: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  icon,
  title,
  rows,
  className = "",
}) => {
  return (
    <section className={`w-full ${className} max-w-[1280px]`}>
      <header className="flex gap-2 items-center pt-2 pb-5 px-4 lg:px-10 max-w-full text-xl text-zinc-300 border-b border-slate-600 border-opacity-30">
        {icon && (
          <Image width={18} height={18} src={icon} alt={`${title} icon`} />
        )}
        <h2 className="flex gap-2 items-center self-stretch my-auto min-w-60">
          <span className="flex-1 shrink gap-1 self-stretch my-auto w-full basis-0 min-w-60">
            {title}
          </span>
        </h2>
      </header>
      {rows.map((row, index) => (
        <ComparisonRow key={index} cells={row.cells} />
      ))}
    </section>
  );
};
