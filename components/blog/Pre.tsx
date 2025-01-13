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

  return (
    <div className={clsx("relative")}>
      <CopyButton
        code={code}
        className="absolute right-2 top-2 inline-flex items-center"
      />
      <pre
        {...props}
        className={clsx(
          "!border !border-black/10 !bg-white !pr-16 !text-sm dark:!border-white/10 dark:!bg-black dark:text-body [&>*]:!bg-white dark:[&>*]:!bg-black",
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

                // This is a hack to prevent toml tables from being interpreted as HTML tables

                // Before this fix:
                // [
                //   dependencies
                // ]

                // After this fix:
                // [dependencies]
                if (
                  props.className === "language-toml" &&
                  child.props.className === "token table class-name"
                ) {
                  return {
                    ...child,
                    props: {
                      ...child.props,
                      className: "token class-name",
                    },
                  };
                }

                return child;
              }),
            ],
          },
        }}
      </pre>
    </div>
  );
};
