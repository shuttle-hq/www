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

export const formatNumberToK = (number: number) => {
  if (number >= 1000) {
    const suffixes = ["", "k", "M", "G", "T", "P"];
    const magnitude = Math.floor(Math.log10(number) / 3);
    const scaledNumber = number / Math.pow(1000, magnitude);
    const formattedNumber = scaledNumber.toFixed(1);
    return `${formattedNumber}${suffixes[magnitude]}`;
  }
  return number.toString();
};
