import { FC, useState, useEffect } from "react";
import { Copy } from "components/svgs";
import { CheckIcon } from "components/svgs/pricing-icons/CheckIcon";
import clsx from "clsx";
import { useCopyToClipboard } from "react-use";

interface CopyButtonProps {
  code: string;
  className?: string;
}

const CopyButton: FC<CopyButtonProps> = ({ code, className }) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleCopy = () => {
    copyToClipboard(code);
    setCopied(true);
  };

  return (
    <button
      className={clsx(
        "rounded-lg border border-transparent p-1.5 text-sm transition-all duration-200",
        "hover:border-[#484848] hover:bg-[#343434]/50",
        "active:scale-95",
        "dark:text-white/80 dark:hover:text-white",
        className,
      )}
      onClick={handleCopy}
      aria-label="Copy code"
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-green-500" />
      ) : (
        <Copy width={16} height={16} />
      )}
    </button>
  );
};

export default CopyButton;
