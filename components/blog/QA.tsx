import React, { useState, ReactNode } from "react";

interface QAProps {
  question: string;
  answer?: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

export const QA: React.FC<QAProps> = ({
  question,
  answer,
  children,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-6 rounded-xl border border-black/10 bg-gradient-to-br from-[#FC540C]/5 via-transparent to-[#38D4E9]/5 dark:border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-gradual font-semibold text-black dark:text-head">
          Q: {question}
        </span>
        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#FC540C]/30 text-sm text-[#FC540C]">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-black/10 p-4 dark:border-white/10">
          <span className="font-semibold text-[#FC540C]">A: </span>
          {answer ? (
            <span className="text-body">{answer}</span>
          ) : (
            <div className="mt-2 text-body prose-p:my-2">{children}</div>
          )}
        </div>
      )}
    </div>
  );
};
