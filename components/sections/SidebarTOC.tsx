import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface TocItem {
  slug: string;
  content: string;
  lvl?: number; // markdown-toc key
  level?: number; // sometimes different naming
}

interface SidebarTOCProps {
  toc?: TocItem[];
}

// Track nesting depth of ULs to compute indentation
const DepthContext = createContext(0);
const ActiveIdContext = createContext<string | null>(null);

// Build hierarchical tree from flat list
interface TocNode extends TocItem {
  children: TocNode[];
  depth: number; // normalized depth starting at 1
}

function normalizeDepth(item: TocItem) {
  return item.lvl ?? item.level ?? 1;
}

function buildTree(items: TocItem[]): TocNode[] {
  const root: TocNode[] = [];
  const stack: TocNode[] = [];
  items.forEach((item) => {
    const depth = normalizeDepth(item);
    const node: TocNode = { ...item, depth, children: [] };
    while (stack.length && stack[stack.length - 1].depth >= depth) stack.pop();
    if (!stack.length) root.push(node);
    else stack[stack.length - 1].children.push(node);
    stack.push(node);
  });
  return root;
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

const TOCUl: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const depth = useContext(DepthContext) + 1;
  return (
    <DepthContext.Provider value={depth}>
      <ul className="my-1 space-y-1">{children}</ul>
    </DepthContext.Provider>
  );
};

interface TocBranchProps {
  node: TocNode;
}

const TocBranch: React.FC<TocBranchProps> = ({ node }) => {
  const activeId = useContext(ActiveIdContext);
  const hasChildren = node.children.length > 0;
  const [open, setOpen] = useState(node.depth === 1); // default open top-level
  const isActive = activeId === node.slug;

  // Auto-open if active is within subtree
  const subtreeSlugs = useMemo(() => {
    const acc: string[] = [];
    const walk = (n: TocNode) => {
      acc.push(n.slug);
      n.children.forEach(walk);
    };
    walk(node);
    return new Set(acc);
  }, [node]);

  useEffect(() => {
    if (activeId && subtreeSlugs.has(activeId)) setOpen(true);
  }, [activeId, subtreeSlugs]);

  return (
    <li className="list-none">
      <div className="flex items-start gap-2">
        {hasChildren ? (
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
          <span className="mt-0.5 h-4 w-4 text-center text-xs text-grey700">
            -
          </span>
        )}
        <div className="min-w-0 flex-1">
          <a
            href={`#${node.slug}`}
            className={
              "relative left-0 text-sm transition-all duration-300 hover:left-1 " +
              (isActive
                ? "font-medium bg-gradient-to-r from-[#FC540C] to-[#FFD76F] bg-clip-text text-transparent "
                : "text-slate-500 dark:text-body dark:hover:text-white ")
            }
          >
            {node.content}
          </a>
          {hasChildren && open && (
            <TOCUl>
              {node.children.map((c) => (
                <TocBranch key={c.slug} node={c} />
              ))}
            </TOCUl>
          )}
        </div>
      </div>
    </li>
  );
};

export const SidebarTOC: React.FC<SidebarTOCProps> = ({ toc }) => {
  // Track active heading based on scroll position
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionsRef = useRef<{ id: string; top: number }[]>([]);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const selector =
      "article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]";

    const collect = () => {
      sectionsRef.current = Array.from(
        document.querySelectorAll<HTMLElement>(selector),
      ).map((el) => ({ id: el.id, top: el.offsetTop }));
      if (sectionsRef.current.length && !activeId) {
        setActiveId(sectionsRef.current[0].id);
      }
    };

    collect();

    const handleResize = () => {
      collect();
      handleScroll();
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        // Adjust for any fixed headers + small buffer
        const offset = 120;
        const pos = scrollY + offset;
        const sections = sectionsRef.current;
        if (!sections.length) return;
        // Find last section whose top <= pos
        let current = sections[0].id;
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].top <= pos) current = sections[i].id;
          else break;
        }
        if (current !== activeId) setActiveId(current);
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    // Also recalc on fonts load (layout shift)
    window.addEventListener("load", handleResize);
    // Initial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll as any);
      window.removeEventListener("resize", handleResize as any);
      window.removeEventListener("load", handleResize as any);
    };
  }, [activeId]);

  const tree = useMemo(() => (toc ? buildTree(toc) : []), [toc]);
  if (!toc || !toc.length) return null;

  return (
    <div className="text-sm">
      <ActiveIdContext.Provider value={activeId}>
        <ul className="space-y-1">
          {tree.map((n) => (
            <TocBranch key={n.slug} node={n} />
          ))}
        </ul>
      </ActiveIdContext.Provider>
    </div>
  );
};

export default SidebarTOC;
