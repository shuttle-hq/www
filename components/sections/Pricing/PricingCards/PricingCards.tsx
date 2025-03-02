"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PricingCard, PricingCardProps } from "./PricingCard";
import { CheckIcon } from "components/svgs/pricing-icons/CheckIcon";

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
    buttonVariant: "highlight",
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
    icon: CheckIcon,
  },
];

const PricingCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [collapseSections, setCollapseSections] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) {
      return;
    }

    const onScroll = () => {
      setCollapseSections(section.getBoundingClientRect().top < 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="absolute w-full h-[100px] opacity-0 -z-10" />
      <div className="relative flex justify-center xl:sticky z-10 top-0 mb-14">
        <section className=" max-w-[1280px]" aria-label="Pricing plans">
          <div className="flex flex-wrap justify-center mx-[-0.5rem]">
            {pricingTiers.map((tier, index) => (
              <PricingCard collapsed={collapseSections} key={index} {...tier} />
            ))}
          </div>
        </section>
        <Image
          fill
          src="/images/sections/pricing-tiers/bg.png"
          alt="bg"
          className="absolute left-0 -top-[100%] -z-10 hidden w-auto h-[300%] object-cover md:aspect-auto xl:block"
        />
      </div>
    </>
  );
};

export default PricingCards;
