"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackEvent } from "lib/posthog";
import Link from "next/link";

export const AddToCursor = () => {
  const pathname = usePathname();

  return (
    <Link
      href="cursor://anysphere.cursor-deeplink/mcp/install?name=Shuttle&config=eyJjb21tYW5kIjoic2h1dHRsZSBtY3Agc3RhcnQifQ"
      target="_blank"
      onClick={() => trackEvent("blog_cta_add_to_cursor", { page: pathname })}
    >
      <Image
        src="/mcp-install-light.svg"
        width={126}
        height={28}
        alt="Install MCP Server"
      />
    </Link>
  );
};
