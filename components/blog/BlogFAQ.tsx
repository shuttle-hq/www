'use client';

import React, { useState } from "react";
import Head from "next/head";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  items: FAQItem[];
  title?: string;
}

export const BlogFAQ: React.FC<BlogFAQProps> = ({ items, title = "Frequently Asked Questions" }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Generate JSON-LD structured data for FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="my-8 rounded-2xl border border-black/10 p-6 dark:border-white/10">
        <h3 className="mb-6 font-gradual text-2xl font-bold text-black dark:text-head">
          {title}
        </h3>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between text-left transition-colors hover:text-[#FC540C]"
                aria-expanded={openItems.has(index)}
              >
                <h4 className="pr-4 text-sm font-medium text-black dark:text-head">
                  {item.question}
                </h4>
                <span className="flex-shrink-0 text-xl">
                  {openItems.has(index) ? "−" : "+"}
                </span>
              </button>
              {openItems.has(index) && (
                <div className="mt-3 text-body">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}; 