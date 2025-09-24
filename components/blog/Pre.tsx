import clsx from "clsx";
import { CopyButton } from "components/elements";

export const Pre = ({ children, ...props }: any) => {
  let line = 1;

  function getChildren(children: any): string[] {
    return [children].flat().flatMap((child: any) => {
      // This is a fix for such code breaking mdx parser:
      // <script src="/main.js"></script>
      if (typeof child === "string" || !child) {
        return child;
      }

      return getChildren(child.props.children);
    });
  }

  const code = getChildren(children.props.children).join("");

  // rehype-prism-plus now nests tokens inside elements with className "code-line".
  // Previously we relied on a top-level child having className "token table class-name".
  // We still need to strip the "table" class from TOML table identifiers so they don't
  // get interpreted/styled incorrectly. We do this recursively now.
  function sanitizeTomlTables(node: any): any {
    if (!node || typeof node === "string") return node;
    if (!node.props) return node;

    let className = node.props.className;
    if (
      props.className === "language-toml" &&
      typeof className === "string" &&
      className.includes("token") &&
      className.includes("table") &&
      className.includes("class-name")
    ) {
      // Remove just the 'table' class token
      className = className
        .split(/\s+/)
        .filter((c) => c !== "table")
        .join(" ");
    }

    const newChildren = [node.props.children]
      .flat()
      .map((c: any) => sanitizeTomlTables(c));

    return {
      ...node,
      props: {
        ...node.props,
        className,
        children: newChildren,
      },
    };
  }

  return (
    <div className={clsx("relative shuttle-scrollbar")}>
      <CopyButton
        code={code}
        className="absolute right-2 top-2 inline-flex items-center"
      />
      <pre
        {...props}
        className={clsx(
          "shuttle-scrollbar !border !border-black/10 !bg-white !pr-16 !text-sm dark:!border-white/10 dark:!bg-black dark:text-body [&>*]:!bg-white dark:[&>*]:!bg-black",
          props.className ?? "language-",
        )}
      >
        {{
          ...children,
          props: {
            ...children.props,
            className: children.props.className ?? "language-",
            children: [
              ...[children.props.children].flat().flatMap((child) => {
                if (typeof child === "string") {
                  const [head, ...tail] = child.split("\n");
                  return [
                    head,
                    ...tail.flatMap((child) => {
                      line++;

                      return ["\n", child];
                    }),
                  ];
                }
                // Recursively sanitize TOML table tokens inside nested structures
                return sanitizeTomlTables(child);
              }),
            ],
          },
        }}
      </pre>
    </div>
  );
};
