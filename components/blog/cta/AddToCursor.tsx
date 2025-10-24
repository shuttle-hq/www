"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackEvent } from "lib/posthog";

export const AddToCursor = () => {
  const pathname = usePathname();

  return (
    <a
      href="cursor://anysphere.cursor-deeplink/mcp/install?name=Shuttle&config=eyJjb21tYW5kIjoic2h1dHRsZSBtY3Agc3RhcnQifQ"
      target="_blank"
      onClick={() => trackEvent("blog_add_to_cursor_cta", { page: pathname })}
    >
      <Image
        src="/mcp-install-light.svg"
        width={126}
        height={28}
        alt="Install MCP Server"
      />
    </a>
  );
};
