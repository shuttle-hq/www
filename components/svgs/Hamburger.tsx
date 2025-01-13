import { FC, SVGAttributes } from "react";

const Hamburger: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 30V27.5H35V30H5ZM5 21.25V18.75H35V21.25H5ZM5 12.5V10H35V12.5H5Z" />
    </svg>
  );
};

export default Hamburger;
