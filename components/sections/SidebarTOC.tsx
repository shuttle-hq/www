import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface SidebarTOCProps {
  toc?: MDXRemoteSerializeResult<Record<string, unknown>>;
}

// Track nesting depth of ULs to compute indentation
const DepthContext = createContext(0);
const ActiveIdContext = createContext<string | null>(null);

function isReactElement(child: React.ReactNode): child is React.ReactElement {
  return !!child && typeof child === "object" && "type" in (child as any);
}

const Caret: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-90" : "rotate-0"}`}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M6 4l5 4-5 4V4z" fill="currentColor" />
  </svg>
);

const TOCUl: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...props
}) => {
  const depth = useContext(DepthContext);
  const nextDepth = depth + 1;
  return (
    <DepthContext.Provider value={nextDepth}>
      <ul {...props} className="my-1 space-y-1">
        {children}
      </ul>
    </DepthContext.Provider>
  );
};
TOCUl.displayName = "TOCUl";

const TOCLi: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  ...props
}) => {
  const depth = useContext(DepthContext);
  const activeId = useContext(ActiveIdContext);
  const [open, setOpen] = useState(false);

  const kids = React.Children.toArray(children);
  const hasSublist = kids.some(
    (c) =>
      isReactElement(c) &&
      (c.type === "ul" ||
        c.type === TOCUl ||
        (c.type as any)?.displayName === "TOCUl"),
  );

  const content = useMemo(() => {
    return kids.map((child, idx) => {
      if (
        isReactElement(child) &&
        (child.type === "ul" ||
          child.type === TOCUl ||
          (child.type as any)?.displayName === "TOCUl")
      ) {
        return open ? (
          <div key={`sub-${idx}`} className="mt-1">
            {child}
          </div>
        ) : null;
      }
      return <React.Fragment key={idx}>{child}</React.Fragment>;
    });
  }, [kids, open]);

  const indentPx = Math.max(0, depth - 1) * 12; // 12px per level after top

  // Auto-open when the active heading is within this subtree
  const containsActive = useMemo(() => {
    const target = activeId ? `#${activeId}` : null;
    if (!target) return false;

    const search = (nodes: React.ReactNode[]): boolean => {
      for (const n of nodes) {
        if (isReactElement(n)) {
          const t: any = n.type as any;
          const isLink =
            t === "a" || t === TOCLink || t?.displayName === "TOCLink";
          if (isLink) {
            const href = (n.props?.href as string) || "";
            if (href === target) return true;
          }
          const childNodes = React.Children.toArray(n.props?.children);
          if (childNodes.length && search(childNodes)) return true;
        }
      }
      return false;
    };

    return search(kids);
  }, [kids, activeId]);

  useEffect(() => {
    if (containsActive) setOpen(true);
  }, [containsActive]);

  return (
    <li {...props} style={{ ...(props.style || {}) }} className="list-none">
      <div className="flex items-start gap-2">
        {hasSublist ? (
          <button
            type="button"
            aria-label={open ? "Collapse section" : "Expand section"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-base hover:text-black dark:hover:text-white"
          >
            <Caret open={open} />
          </button>
        ) : (
          // spacer to align text when there's no caret
          <span className="mt-0.5 h-4 w-4 text-xs items-center flex justify-center text-grey700">
            -
          </span>
        )}
        <div className="min-w-0 flex-1">{content}</div>
      </div>
    </li>
  );
};

// Anchor styling to match sidebar widgets (Recent articles)
const TOCLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => {
  const activeId = useContext(ActiveIdContext);
  const href = (props.href as string) || "";
  const isActive = activeId && href === `#${activeId}`;
  return (
    <a
      {...props}
      className={
        "relative left-0 text-sm transition-all duration-300 hover:left-1 " +
        (isActive
          ? "font-medium bg-gradient-to-r from-[#FC540C] to-[#FFD76F] bg-clip-text text-transparent "
          : "text-slate-500 dark:text-body dark:hover:text-white ") +
        (className ? ` ${className}` : "")
      }
      aria-current={isActive ? "true" : undefined}
    />
  );
};

export const SidebarTOC: React.FC<SidebarTOCProps> = ({ toc }) => {
  // Track active heading based on scroll position
  const [activeId, setActiveId] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getHeadings = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          "article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]",
        ),
      );

    const compute = () => {
      const headings = getHeadings();
      if (!headings.length) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const offset = 120; // account for sticky headers
      const current = headings
        .map((el) => ({
          id: el.id,
          top: el.getBoundingClientRect().top + scrollY,
        }))
        .filter((h) => !!h.id)
        .sort((a, b) => a.top - b.top)
        .reduce<string | null>((acc, h) => {
          return h.top <= scrollY + offset ? h.id : acc;
        }, headings[0].id);
      setActiveId(current);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // initial compute after paint
    const t = setTimeout(compute, 0);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onScroll as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!toc) return null;

  return (
    <div className="text-sm">
      <ActiveIdContext.Provider value={activeId}>
        <MDXRemote
          {...toc}
          // Override only the parts we need for a collapsible tree
          components={{
            ul: TOCUl,
            li: TOCLi,
            a: TOCLink,
          }}
        />
      </ActiveIdContext.Provider>
    </div>
  );
};

export default SidebarTOC;
