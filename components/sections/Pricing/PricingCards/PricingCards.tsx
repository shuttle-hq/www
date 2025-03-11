"use client";
import React, { useEffect, useRef, useState } from "react";
import { PricingCard, PricingCardProps } from "./PricingCard";
import { CheckIcon } from "components/svgs/pricing-icons/CheckIcon";
import { CONTACT_US_URI, GET_STARTED_URI } from "../../../../lib/constants";
import { BackgroundShape } from "../../../BackgroundShape";

const pricingTiers: PricingCardProps[] = [
  {
    title: "Community",
    description: "For learning, experimentation, and personal projects",
    price: "$0",
    priceSuffix: "/ month",
    features: [
      "1 project",
      "Spot instance",
      "Starter database",
      "1 custom domain per project",
    ],
    buttonText: "Start for free",
    buttonVariant: "highlight",
    href: GET_STARTED_URI,
    icon: CheckIcon,
  },
  {
    title: "Pro",
    description: "Production-ready for small to medium projects",
    price: "$20",
    priceSuffix: "/ month + usage based",
    features: [
      "3 projects",
      "Reserved instance",
      "Scalable vCPU & memory",
      "Monitoring & observability",
    ],
    buttonText: "Start 30 day trial",
    buttonVariant: "highlight",
    href: GET_STARTED_URI,
    icon: CheckIcon,
  },
  {
    title: "Growth",
    description: "For teams and complex production workloads",
    price: "$250",
    priceSuffix: "/ month + usage based",
    features: [
      "10 projects",
      "Auto-scaling",
      "Team access",
      "Choice of 3 regions",
    ],
    buttonText: "Start 30 day trial",
    href: GET_STARTED_URI,
    icon: CheckIcon,
  },
  {
    title: "Enterprise",
    description: "Production experience tailored for larger organisations",
    price: "Custom",
    priceSuffix: "+ usage based",
    features: [
      "Custom project limit",
      "Bring your own cloud or tenant",
      "Multi-region flexibility",
      "Custom RAM & CPU",
    ],
    buttonText: "Book a call",
    buttonVariant: "highlight",
    href: CONTACT_US_URI,
    icon: CheckIcon,
  },
];

const PricingCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const priceSectionsRef = useRef<HTMLDivElement>(null);
  const [collapseSections, setCollapseSections] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) {
      return;
    }

    const onScroll = () => {
      const collapse = section.getBoundingClientRect().top < 0;
      if (collapse !== collapseSections) {
        setCollapseSections(collapse);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [collapseSections]);

  return (
    <>
      <div
        ref={ref}
        className="absolute left-0 w-full h-[100px] opacity-0 -z-10 -translate-y-[10px]"
      />
      <BackgroundShape
        style={{ transform: "translateY(75px)" }}
        className="w-full top-auto left-0 hidden lg:block h-[200px]"
        background="linear-gradient(62.43deg, rgba(252, 84, 12, 0.425) 54.71%, rgba(56, 212, 233, 0.325) 79.8%)"
      />
      <div
        ref={priceSectionsRef}
        className="relative flex justify-center xl:sticky top-0 mb-14 z-10"
      >
        <section className="relative max-w-[1280px]" aria-label="Pricing plans">
          <div className="relative flex flex-wrap justify-center md:gap-0 mx-[-0.5rem] overflow-x-clip backdrop-blur">
            {pricingTiers.map((tier, index) => (
              <PricingCard collapsed={collapseSections} key={index} {...tier} />
            ))}
            <BackgroundShape left className="top-[10%] block md:hidden" />
            <BackgroundShape right className="top-[60%] block md:hidden" />
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingCards;
