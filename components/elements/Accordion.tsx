import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

export const Accordion = ({
  accordionItems,
}: {
  accordionItems: AccordionItem[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-2">
      {accordionItems.map((item, idx) => (
        <div key={item.title} className="border-b border-white/30">
          <button
            className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${idx}`}
          >
            <span className="text-neutral-200 text-xl font-bold">
              {item.title}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
              }}
              className="transition-transform duration-200 w-3"
            >
              <path
                d="M5.99998 18L4.58331 16.5833L11.1666 10L4.58331 3.41667L5.99998 2L14 10L5.99998 18Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {openIndex === idx && (
            <div
              id={`accordion-content-${idx}`}
              className="px-6 pb-5 text-zinc-400 text-xl font-normal"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
