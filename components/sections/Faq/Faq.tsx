"use client";

import * as React from "react";
import { FaqItem } from "./FaqItem";

interface FaqItemProps {
  question: string;
  answer: string | string[];
}

export const Faq: React.FC = ({ faqData }: any) => {
  return (
    <section className="max-w-[800px]">
      {faqData.map((faq: FaqItemProps, index: number) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default Faq;
