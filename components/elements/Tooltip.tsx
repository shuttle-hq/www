"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { mergeClasses } from "../../lib/helpers";

interface TooltipProps {
  title?: string;
  children: ReactElement;
  delay?: number;
  disabled?: boolean;
}

const Tooltip = ({ children, title, delay, disabled }: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const opening = useRef(false);

  useEffect(() => setTooltipOpen(false), []);

  const onMouseEnter = () => {
    opening.current = true;
    setTimeout(() => {
      if (opening.current) {
        setTooltipOpen(true);
      }
    }, delay ?? 200);
  };

  const onMouseLeave = () => {
    opening.current = false;
    setTooltipOpen(false);
  };

  return disabled ? (
    children
  ) : (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={mergeClasses(
          "bg-[#191a1c] px-2 py-1 rounded-lg border border-white/30 absolute bottom-[150%] left-1/2 -translate-x-1/2 transition-all duration-300",
          { "z-10 opacity-1": tooltipOpen, "-z-10 opacity-0": !tooltipOpen },
        )}
      >
        <span className="text-white text-sm whitespace-nowrap">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
