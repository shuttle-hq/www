import { FC, SVGAttributes } from "react";

const HighPriorityBenefit: FC<Partial<SVGAttributes<SVGSVGElement>>> = (
  props,
) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.6667 25.3335H29.3333V22.6668H18.6667V25.3335ZM18.6667 18.0002H29.3333V15.3335H18.6667V18.0002ZM18.6667 10.6668H29.3333V8.00016H18.6667V10.6668ZM2.66667 16.6668C2.66667 11.8935 6.56 8.00016 11.3333 8.00016H12V5.3335L16 9.3335L12 13.3335V10.6668H11.3333C8 10.6668 5.33334 13.3335 5.33334 16.6668C5.33334 20.0002 8 22.6668 11.3333 22.6668H16V25.3335H11.3333C6.56 25.3335 2.66667 21.4402 2.66667 16.6668Z"
        fill="#D8D8D8"
      />
    </svg>
  );
};

export default HighPriorityBenefit;
