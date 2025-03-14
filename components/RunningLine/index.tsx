"use client";

import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import styles from "./RunningLine.module.css";

interface RunningLineProps extends HTMLAttributes<HTMLDivElement> {
  items: ReactNode[];
  contentClassName?: string;
  lineClassName?: string;
  gapBetweenLines: number;
  height: number;
}

export const RunningLine = ({
  items,
  className,
  contentClassName,
  lineClassName,
  gapBetweenLines,
  height,
  ...props
}: RunningLineProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  // If the items change, please update the lineWidth accordingly.
  const [lineWidth] = useState(1500);

  return (
    <div className={`${styles.linesContainer} ${className}`} {...props}>
      <div
        style={{ height }}
        className={`${styles.linesContent} ${contentClassName ?? ""}`}
      >
        <div
          style={{
            width: lineWidth ? `${lineWidth * 2 + 2 * gapBetweenLines}px` : "",
          }}
          className={`${styles.lineWrapper} ${lineWidth ? styles.firstHalf : ""} ${contentClassName ?? ""}`}
        >
          <div
            ref={lineRef}
            className={`${styles.line} ${lineClassName ?? ""}`}
          >
            {items}
          </div>
          <div className={`${styles.line} ${lineClassName ?? ""}`}>{items}</div>
        </div>
        <div
          style={{
            width: lineWidth ? `${lineWidth * 2 + 2 * gapBetweenLines}px` : "",
          }}
          className={`${styles.lineWrapper} ${lineWidth ? styles.secondHalf : ""} ${contentClassName ?? ""}`}
        >
          <div className={`${styles.line} ${lineClassName ?? ""}`}>{items}</div>
          <div className={`${styles.line} ${lineClassName ?? ""}`}>{items}</div>
        </div>
      </div>
    </div>
  );
};
