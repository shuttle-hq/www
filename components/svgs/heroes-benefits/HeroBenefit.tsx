import { FC, SVGAttributes } from "react";

const HeroBenefit: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0002 29.3C12.8891 28.5222 10.3335 26.7166 8.3335 23.8833C6.3335 21.05 5.3335 17.9444 5.3335 14.5666V6.6333L16.0002 2.6333L26.6668 6.6333V14.5666C26.6668 17.9444 25.6668 21.05 23.6668 23.8833C21.6668 26.7166 19.1113 28.5222 16.0002 29.3ZM17.7986 12.5244L16 9L14.2014 12.5244L10.2937 13.1459L13.0898 15.9456L12.4733 19.8541L16 18.06L19.5267 19.8541L18.9102 15.9456L21.7063 13.1459L17.7986 12.5244Z"
        fill="#D8D8D8"
      />
    </svg>
  );
};

export default HeroBenefit;
