"use client";

import * as React from "react";

interface FaqItemProps {
  question: string;
  answer: string | string[];
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const renderAnswer = () => {
    if (Array.isArray(answer)) {
      return answer.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }
    return answer;
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex gap-4 justify-center items-center p-8 w-full border-b border-slate-600 border-opacity-30 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch w-full basis-0 min-w-60 max-md:max-w-full">
        <button
          onClick={toggleAccordion}
          className="flex justify-between items-center w-full text-left cursor-pointer group"
          aria-expanded={isOpen}
        >
          <h2 className="text-xl tracking-wide leading-relaxed text-zinc-300 max-md:max-w-full group-hover:text-zinc-100 transition-colors">
            {question}
          </h2>
          <span className="flex items-center justify-center w-6 h-6 ml-4 text-zinc-300 group-hover:text-zinc-100 transition-transform duration-300">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div
            className="transform-gpu transition-all duration-300 ease-in-out"
            style={{
              animation: isOpen ? "fadeIn 0.3s ease-in-out" : "none",
            }}
          >
            <p className="mt-2 text-base leading-6 text-neutral-400 max-md:max-w-full">
              {renderAnswer()}
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
