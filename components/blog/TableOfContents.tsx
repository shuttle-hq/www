interface HeaderProps {
  slug: string;
  content: string;
  lvl: number;
}

const TOCHeader = ({ slug, content, lvl }: HeaderProps) => {
  const margin = `${lvl - 1}rem`;
  return (
    <li
      className={`block text-xl text-slate-300 transition duration-150 ease-in-out hover:translate-x-2 hover:text-white`}
      style={{ marginLeft: margin }}
    >
      <a href={`#${slug}`}>- {content}</a>
    </li>
  );
};

interface Props {
  toc: HeaderProps[];
}

export const TableOfContents = ({ toc }: Props) => {
  return (
    <div className="mb-12 mt-16 pb-8 pt-4">
      <h2 className="pb-4 pt-4 text-2xl font-bold leading-10 text-white lg:text-5xl">
        Overview
      </h2>

      <ol>
        {toc.map((header) => (
          <TOCHeader
            key={header.slug}
            slug={header.slug}
            content={header.content}
            lvl={header.lvl}
          />
        ))}
      </ol>
    </div>
  );
};
