import { FC, SVGAttributes } from "react";

const Copy: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.1665 19.1675H13.6665V17.5008H5.83317V7.00081H4.1665V19.1675Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6656 3.00081H9.66561V13.6675H17.6656V3.00081ZM8.33228 1.66748V15.0008H18.9989V1.66748H8.33228Z"
      />
    </svg>
  );
};

export default Copy;
