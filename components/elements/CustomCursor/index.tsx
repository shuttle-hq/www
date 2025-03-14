import { PropsWithChildren } from "react";
import { mergeClasses } from "../../../lib/helpers";
import styles from "./CustomCursor.module.css";

interface CustomCursorProps extends PropsWithChildren {
  disabled?: boolean;
}

const CustomCursor = ({ children, disabled }: CustomCursorProps) => {
  return !disabled ? (
    <div className={mergeClasses("w-fit h-fit", styles.cursor)}>{children}</div>
  ) : (
    <>{children}</>
  );
};

export default CustomCursor;
