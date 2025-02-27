"use client";
import React from "react";
import { PricingCard } from "./PricingCard";

const PricingCards = () => {
  const pricingTiers = [
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
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/db5344f3c4a2e064669ed382b1317d8d225c7f54e117fbda42b037bca2097fbe?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/db5344f3c4a2e064669ed382b1317d8d225c7f54e117fbda42b037bca2097fbe?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/db5344f3c4a2e064669ed382b1317d8d225c7f54e117fbda42b037bca2097fbe?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52e43a52fd132813101fdf271c33d69ae7ea4f7aaa3552f18ebe9e488cac59b1?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
    },
  ];

  return (
    <section
      className="flex flex-wrap justify-center gap-4"
      aria-label="Pricing plans"
    >
      {pricingTiers.map((tier, index) => (
        <PricingCard key={index} {...tier} />
      ))}
    </section>
  );
};

export default PricingCards;
