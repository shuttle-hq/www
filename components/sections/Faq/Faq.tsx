"use client";

import * as React from "react";
import { FaqItem } from "./FaqItem";

interface FaqItemProps {
  question: string;
  answer: string | string[];
}

export const Faq: React.FC = ({ faqData }: any) => {
  return (
    <section className="max-w-[1024px] my-16 mx-auto">
      <h1 className="text-left md:text-center font-gradual mb-8 md:mb-16 text-[40px] md:text-5xl font-bold text-black dark:text-head lg:text-4">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq: FaqItemProps, index: number) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default Faq;
