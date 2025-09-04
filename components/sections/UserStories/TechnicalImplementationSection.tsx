type AccordionItem = {
  title: string;
  content: string;
};

export const TechnicalImplementationSection = ({
  items,
}: {
  items: AccordionItem[];
}) => {
  return (
    <ul className="w-full flex flex-col gap-4">
      {items.map((item, idx) => (
        <li
          key={item.title}
          className={`w-full py-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 border-b border-white/20 ${idx === items.length - 1 ? "" : ""}`}
        >
          <span className="text-xl bg-gradient-3 bg-clip-text text-transparent mr-4">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="text-neutral-200 text-xl font-bold">
            {item.title}
          </span>
          <span className="text-neutral-200 text-xl font-normal">
            {item.content}
          </span>
        </li>
      ))}
    </ul>
  );
};
