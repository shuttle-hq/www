import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function generateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} minute read`;
}

export const mergeClasses = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
