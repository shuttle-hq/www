"use client";

import * as React from "react";
import { FaqItem } from "./FaqItem";

interface FaqItemProps {
  question: string;
  answer: string | string[];
}

export const Faq: React.FC = ({ faqData }: any) => {
  return (
    <section className="max-w-[1280px] mx-auto">
      <h1 className="text-center font-gradual text-5xl font-bold text-black my-16 dark:text-head lg:text-4">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq: FaqItemProps, index: number) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default Faq;
