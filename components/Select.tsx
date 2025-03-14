import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { DownIcon } from "./svgs/DownIcon";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: Option;
  onChange?: (option: Option) => void;
  className?: string;
}

export const Select = ({
  options,
  onChange: propOnChange,
  value,
  placeholder,
  className,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [focused, setFocused] = useState(0);

  useEffect(() => setSelectedValue((prev) => value ?? prev), [value]);

  const onChange = useCallback(
    (option: Option) => {
      setSelectedValue(option);
      propOnChange?.(option);
      setOpen(false);
    },
    [propOnChange],
  );

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.code === "ArrowUp") {
        setFocused((prev) => {
          const newIndex = prev - 1;
          return newIndex < 0 ? options.length - 1 : newIndex;
        });
      } else if (e.code === "ArrowDown") {
        setFocused((prev) => {
          const newIndex = prev + 1;
          return newIndex > options.length - 1 ? 0 : newIndex;
        });
      } else if (e.code === "Enter") {
        onChange(options[focused]);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, options, focused, onChange]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.srcElement as HTMLElement | undefined;

      if (
        !["select", "select-option"].includes(
          el?.getAttribute("datatype") ?? "",
        )
      ) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  const toggleSelect = () => {
    setFocused(
      options.findIndex((option) => option.value === selectedValue?.value) ?? 0,
    );
    setOpen((prev) => !prev);
  };

  return (
    <div className={clsx("relative", className)}>
      <button
        datatype="select"
        className={clsx(
          "w-full flex items-center justify-between outline-none",
          "cursor-pointer bg-black active:bg-zinc-600 focus:bg-zinc-800 hover:bg-zinc-600 text-white",
          "text-xl py-3 px-4 border border-[#4A677B4D]",
          {
            "rounded-t-2xl rounded-b-none border-b-0": open,
            "rounded-2xl": !open,
          },
        )}
        onClick={toggleSelect}
      >
        <span>{selectedValue?.label ?? placeholder}</span>
        <DownIcon
          className={clsx({
            "rotate-180": open,
          })}
        />
      </button>
      <div
        className={clsx(
          "absolute w-full bg-black top-full flex-col overflow-hidden rounded-b-2xl border-t-0 border border-[#4A677B4D]",
          {
            hidden: !open,
            flex: open,
          },
        )}
      >
        {options.map((option, index) => (
          <button
            className={clsx(
              "text-xl py-3 px-4 active:bg-zinc-600 focus:bg-zinc-900 hover:bg-zinc-800 outline-none",
              {
                "bg-zinc-900": index === focused,
              },
            )}
            datatype="select-option"
            onClick={(e) => {
              e.stopPropagation();
              onChange(option);
            }}
            key={option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
