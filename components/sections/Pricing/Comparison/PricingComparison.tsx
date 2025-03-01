"use client";
import React from "react";
import { ComparisonSection } from "./ComparisonSection";
import { CheckIcon } from "components/svgs/pricing-icons/CheckIcon";
import { MinusIcon } from "components/svgs/pricing-icons/MinusIcon";

const computeSection = {
  title: "Compute & Infrastructure",
  rows: [
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "1",
          secondary: "project",
        },
        {
          icon: CheckIcon,
          primary: "3",
          secondary: "projects",
        },
        {
          icon: CheckIcon,
          primary: "10",
          secondary: "projects",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "Spot",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          primary: "Reserved",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          primary: "Reserved",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "Spot",
          secondary: "instance",
        },
        {
          icon: MinusIcon,
          primary: "Autoscaling",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Autoscaling",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "10",
          secondary: "request/second",
        },
        {
          icon: CheckIcon,
          primary: "50",
          secondary: "request/second",
        },
        {
          icon: CheckIcon,
          primary: "1000",
          secondary: "request/second",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "512",
          secondary: "MB memory",
        },
        {
          icon: CheckIcon,
          primary: "512",
          secondary: "MB memory",
        },
        {
          icon: CheckIcon,
          primary: "512",
          secondary: "MB memory",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Scalable",
          secondary: "memory available",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Scalable",
          secondary: "memory available",
        },
        {
          icon: CheckIcon,
          primary: "Scalable",
          secondary: "memory available",
        },
        {
          icon: CheckIcon,
          primary: "Scalable",
          secondary: "memory available",
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "0.25",
          secondary: "vCPU",
        },
        {
          icon: CheckIcon,
          primary: "0.25",
          secondary: "vCPU",
        },
        {
          icon: CheckIcon,
          primary: "Usage",
          secondary: "based",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Scalable",
          secondary: "vCPU available",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Scalable",
          secondary: "to vCPU available",
        },
        {
          icon: CheckIcon,
          primary: "Scalable",
          secondary: "to vCPU available",
        },
        {
          icon: CheckIcon,
          primary: "Scalable",
          secondary: "to vCPU available",
        },
      ],
    },
  ],
};

const storageSection = {
  title: "Storage & Database",
  rows: [
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "0.5",
          secondary: "GB (db storage)",
        },
        {
          icon: CheckIcon,
          primary: "0.5",
          secondary: "GB (db storage)",
        },
        {
          icon: CheckIcon,
          primary: "Usage",
          secondary: "Based",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Additional",
          secondary: "Storage available",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "storage available",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "storage available",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "Shared",
          secondary: "database",
        },
        {
          icon: CheckIcon,
          primary: "Shared",
          secondary: "database",
        },
        {
          icon: CheckIcon,
          primary: "Dedicated",
          secondary: "database",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Additional",
          secondary: "dedicated DB",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "dedicated DB",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "dedicated DB",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
  ],
};

const networkSection = {
  title: "Network & Performance",
  rows: [
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "1",
          secondary: "custom domain/project",
        },
        {
          icon: CheckIcon,
          primary: "1",
          secondary: "custom domain/project",
        },
        {
          icon: CheckIcon,
          primary: "1",
          secondary: "custom domain/project",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Additional",
          secondary: "Custom Domain",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Extra",
          secondary: "Custom Domain available",
        },
        {
          icon: CheckIcon,
          primary: "Extra",
          secondary: "Custom Domain available",
        },
        {
          icon: CheckIcon,
          primary: "Extra",
          secondary: "Custom Domain available",
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "1 GB/m",
          secondary: "Network Egress",
        },
        {
          icon: CheckIcon,
          primary: "1 GB/m",
          secondary: "Network Egress",
        },
        {
          icon: CheckIcon,
          primary: "Usage based",
          secondary: "network egress",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Additional",
          secondary: "Network Egress",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "Network Egress",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "Network Egress",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "Network Egress",
        },
      ],
    },
  ],
};

const devopsSection = {
  title: "DevOps & Tooling",
  rows: [
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "100",
          secondary: "Monthly build minutes",
        },
        {
          icon: CheckIcon,
          primary: "100",
          secondary: "Monthly build minutes",
        },
        {
          icon: CheckIcon,
          primary: "Usage",
          secondary: "based",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: MinusIcon,
          primary: "Additional Build Minutes",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "Build Minutes",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "Build Minutes",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "Build Minutes",
        },
      ],
    },
  ],
};

export function PricingComparison() {
  return (
    <article className="text-base leading-tight flex flex-col justify-center items-center">
      <ComparisonSection {...computeSection} />
      <ComparisonSection {...storageSection} />
      <ComparisonSection {...networkSection} className="mt-6" />
      <ComparisonSection {...devopsSection} className="mt-14 max-md:mt-10" />
    </article>
  );
}
