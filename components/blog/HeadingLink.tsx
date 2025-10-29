import React from "react";

interface HeadingLinkProps {
  level: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  id?: string;
}

export const HeadingLink: React.FC<HeadingLinkProps> = ({
  level,
  children,
  id: providedId,
  ...props
}) => {
  const id =
    providedId ||
    String(children)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  const HeadingTag = level;

  return (
    <HeadingTag id={id} className="group" {...props}>
      <a
        href={`#${id}`}
        className="no-underline hover:no-underline flex items-center gap-2 font-bold"
      >
        <span>{children}</span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#FC540C] flex items-center">
          #
        </span>
      </a>
    </HeadingTag>
  );
};
