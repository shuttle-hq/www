import React from "react";
import { Cell } from "./type";
import { CustomCursor, Tooltip } from "../../../elements";
import { mergeClasses } from "../../../../lib/helpers";

interface CellProps extends Cell {
  width?: string;
}

export const ComparisonCell: React.FC<CellProps> = ({
  icon: Icon,
  primary,
  secondary,
  isDisabled = false,
  isCustom = false,
  width = "w-1/4",
  secondaryTooltip,
  primaryTooltip,
}) => {
  const textColorClass = isDisabled ? "text-neutral-5000" : "text-zinc-300";
  const secondaryTextColorClass = isDisabled
    ? "text-neutral-5000"
    : "text-neutral-501";

  return (
    <div className={`my-auto ${width} ${textColorClass} md:px-2 `}>
      <div className="flex gap-2 lg:px-4 items-center self-stretch">
        <Icon className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto basis-0">
          {isCustom ? (
            <p className="flex-1 shrink gap-1 self-stretch my-auto basis-0">
              Custom
            </p>
          ) : (
            <>
              <Tooltip title={primaryTooltip} disabled={!primaryTooltip}>
                <CustomCursor disabled={!primaryTooltip}>
                  <p
                    className={mergeClasses(
                      "relative self-stretch my-auto",
                      textColorClass,
                      {
                        "underline decoration-dotted": !!primaryTooltip,
                      },
                    )}
                  >
                    {primary}
                  </p>
                </CustomCursor>
              </Tooltip>
              {secondary && (
                <Tooltip title={secondaryTooltip} disabled={!secondaryTooltip}>
                  <CustomCursor disabled={!secondaryTooltip}>
                    <p
                      className={mergeClasses(
                        "relative flex-1 shrink self-stretch my-auto basis-0",
                        secondaryTextColorClass,
                        {
                          "underline decoration-dotted": !!secondaryTooltip,
                        },
                      )}
                    >
                      {secondary}
                    </p>
                  </CustomCursor>
                </Tooltip>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
