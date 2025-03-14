import { HTMLAttributes } from "react";

export const CloseIcon = (props: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.9391 5.49218L0.964844 9.46644L2.0255 10.5271L5.99976 6.55284L9.97402 10.5271L11.0347 9.46644L7.06042 5.49218L11.0223 1.53033L9.96162 0.469666L5.99976 4.43152L2.0379 0.469666L0.977242 1.53033L4.9391 5.49218Z"
        fill="currentColor"
      />
    </svg>
  );
};
