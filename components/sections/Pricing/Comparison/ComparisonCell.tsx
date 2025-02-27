import React from "react";

interface ComparisonCellProps {
  icon: string;
  primary?: string;
  secondary?: string;
  isDisabled?: boolean;
  isCustom?: boolean;
  width?: string;
}

export const ComparisonCell: React.FC<ComparisonCellProps> = ({
  icon,
  primary,
  secondary,
  isDisabled = false,
  isCustom = false,
  width = "w-[264px]",
}) => {
  const textColorClass = isDisabled ? "text-neutral-500" : "text-zinc-300";

  return (
    <div
      className={`flex gap-2 items-center self-stretch my-auto min-w-60 ${width}`}
    >
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto basis-0">
        {isCustom ? (
          <p
            className={`flex-1 shrink gap-1 self-stretch my-auto basis-0 ${textColorClass}`}
          >
            Custom
          </p>
        ) : (
          <>
            <p className="self-stretch my-auto text-zinc-300">{primary}</p>
            {secondary && (
              <p className="flex-1 shrink self-stretch my-auto basis-0 text-neutral-500">
                {secondary}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
