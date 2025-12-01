import { FC } from "react";
import SidebarTOC from "./SidebarTOC";
import { SidebarCTA } from "components/blog/cta";

interface TocItem {
  slug: string;
  content: string;
  lvl?: number;
  level?: number;
}

interface BlogSidebarProps {
  toc?: TocItem[];
}

const BlogSidebar: FC<BlogSidebarProps> = ({ toc }) => {
  return (
    <div className="relative w-full">
      <div className="w-full space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2 scrollbar-none">
        <div className="rounded-3xl border border-black/10 px-6 py-4 dark:border-white/10">
          <div className="mb-2 dark:text-head">On this page</div>
          <SidebarTOC toc={toc} />
        </div>

        <SidebarCTA />
      </div>
    </div>
  );
};

export default BlogSidebar;
