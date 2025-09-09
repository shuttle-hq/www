import { XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ExpandableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  caption?: string;
}

export function ExpandableImage({
  src,
  alt,
  width = 0,
  height = 0,
  className = "",
  caption,
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    console.log("Image clicked, expanding...");
    setIsExpanded(true);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsExpanded(false);
    }
  };

  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="100vw"
          className={`h-auto w-auto cursor-pointer overflow-hidden rounded-md object-contain transition-opacity duration-200 hover:opacity-90 ${className}`}
          onClick={handleImageClick}
          title="Click to expand image"
        />
        {caption && <span className="-mt-6 text-sm text-body">{caption}</span>}
      </div>

      {/* Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleModalClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] p-4">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-2 -right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-colors hover:bg-white dark:bg-gray-800/90 dark:text-white dark:hover:bg-gray-800"
              aria-label="Close expanded image"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="90vw"
              className="object-contain shadow-2xl w-[100vh] h-full max-h-[80vh]"
              priority
            />
            {caption && (
              <div className="mt-4 text-center text-white">
                <span className="text-sm">{caption}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
