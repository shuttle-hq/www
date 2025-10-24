import Image from "next/image";

export const AddToCursor = () => (
  <a
    href="cursor://anysphere.cursor-deeplink/mcp/install?name=Shuttle&config=eyJjb21tYW5kIjoic2h1dHRsZSBtY3Agc3RhcnQifQ"
    target="_blank"
  >
    <Image
      src="/mcp-install-light.svg"
      width={126}
      height={28}
      alt="Install MCP Server"
    />
  </a>
);
