import React from "react";

interface ComparisonCellProps {
  icon: React.ComponentType<any>;
  primary?: string;
  secondary?: string;
  isDisabled?: boolean;
  isCustom?: boolean;
  width?: string;
}

export const ComparisonCell: React.FC<ComparisonCellProps> = ({
  icon: Icon,
  primary,
  secondary,
  isDisabled = false,
  isCustom = false,
  width = "w-1/4",
}) => {
  const textColorClass = isDisabled ? "text-grey300/40" : "text-zinc-300";
  const secondaryTextColorClass = isDisabled
    ? "text-grey300/40"
    : "text-neutral-500";

  return (
    <div className={`px-2 my-auto ${width} ${textColorClass}`}>
      <div className="flex gap-2 px-8 items-center self-stretch">
        <Icon className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto basis-0">
          {isCustom ? (
            <p className="flex-1 shrink gap-1 self-stretch my-auto basis-0">
              Custom
            </p>
          ) : (
            <>
              <p className={`self-stretch my-auto ${textColorClass}`}>
                {primary}
              </p>
              {secondary && (
                <p
                  className={`flex-1 shrink self-stretch my-auto basis-0 ${secondaryTextColorClass}`}
                >
                  {secondary}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
