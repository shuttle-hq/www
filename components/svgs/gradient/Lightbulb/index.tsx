import clsx from "clsx";
import { FC, SVGAttributes } from "react";
import styles from "./index.module.css";

const Lightbulb: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx(styles.lightbulb, "lg:h-full lg:w-full", props.className)}
    >
      <defs>
        <linearGradient id="dark-gradient">
          <stop offset="0%" stopColor="#C2C2C2" />
          <stop offset="100%" stopColor="#C2C2C2" />
        </linearGradient>
      </defs>
      <path
        d="M1.5 11H4.5V13H1.5V11ZM19.6 3.5L17.5 5.6L18.9 7L21 4.9L19.6 3.5ZM11.5 1H13.5V4H11.5V1ZM5.4 3.5L4 4.9L6.1 7L7.5 5.6L5.4 3.5ZM10.5 22C10.5 22.6 10.9 23 11.5 23H13.5C14.1 23 14.5 22.6 14.5 22V21H10.5V22ZM12.5 6C9.2 6 6.5 8.7 6.5 12C6.5 14.2 7.7 16.2 9.5 17.2V19C9.5 19.6 9.9 20 10.5 20H14.5C15.1 20 15.5 19.6 15.5 19V17.2C17.3 16.2 18.5 14.2 18.5 12C18.5 8.7 15.8 6 12.5 6ZM13.5 15.9V17H11.5V15.9C9.8 15.5 8.5 13.9 8.5 12C8.5 9.8 10.3 8 12.5 8C14.7 8 16.5 9.8 16.5 12C16.5 13.9 15.2 15.4 13.5 15.9ZM20.5 11H23.5V13H20.5V11Z"
        className="fill-[url(#dark-gradient)]"
      />
    </svg>
  );
};

export default Lightbulb;
