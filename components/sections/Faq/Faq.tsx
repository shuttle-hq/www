"use client";

import * as React from "react";
import { FaqItem as FaqItemType } from "../Pricing/faqData";
import { FaqItem } from "./FaqItem";

interface FaqItemProps {
  faqData: FaqItemType[];
}

export const Faq: React.FC<FaqItemProps> = ({ faqData }) => {
  return (
    <section className="max-w-[1024px] my-16 mx-auto">
      <h3 className="text-left md:text-center font-gradual mb-8 md:mb-16 text-[40px] leading-[48px] md:text-5xl font-bold text-black dark:text-head lg:text-4">
        Frequently Asked Questions
      </h3>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default Faq;
