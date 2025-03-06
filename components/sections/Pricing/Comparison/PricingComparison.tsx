"use client";
import React, { useState } from "react";
import { ComparisonSection } from "./ComparisonSection";
import { CheckIcon } from "components/svgs/pricing-icons/CheckIcon";
import { CloseIcon } from "components/svgs/pricing-icons/CloseIcon";
import { Select } from "../../../Select";

const computeSection = {
  title: "Compute & Infrastructure",
  icon: "/images/pages/pricing/sections/pricingComparison/compute-and-infrastructure.svg",
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
          icon: CloseIcon,
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
          secondary: "rps",
          secondaryTooltip: "Requests per Second.",
        },
        {
          icon: CheckIcon,
          primary: "50",
          secondary: "rps",
          secondaryTooltip: "Requests per Second.",
        },
        {
          icon: CheckIcon,
          primary: "1000",
          secondary: "rps",
          secondaryTooltip: "Requests per Second.",
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
          icon: CloseIcon,
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
          icon: CloseIcon,
          primary: "Configurable",
          secondary: "instance",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Configurable",
          primaryTooltip: "Configurable",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          primary: "Configurable",
          primaryTooltip: "Configurable",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          primary: "Configurable",
          primaryTooltip: "Configurable",
          secondary: "instance",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
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
  icon: "/images/pages/pricing/sections/pricingComparison/storage-and-database.svg",
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
          icon: CloseIcon,
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
          icon: CloseIcon,
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
  icon: "/images/pages/pricing/sections/pricingComparison/network-and-performance.svg",
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
          icon: CloseIcon,
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
          icon: CloseIcon,
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
  icon: "/images/pages/pricing/sections/pricingComparison/dev-ops-and-tooling.svg",
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
          icon: CloseIcon,
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

const options = [
  { label: "Community", value: "0" },
  { label: "Pro", value: "1" },
  { label: "Growth", value: "2" },
  { label: "Enterprise", value: "3" },
];

export function PricingComparison() {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <>
      <article className="hidden lg:flex text-base leading-tight flex-col justify-center items-center">
        <ComparisonSection {...computeSection} />
        <ComparisonSection {...storageSection} />
        <ComparisonSection {...networkSection} className="mt-6" />
        <ComparisonSection {...devopsSection} className="mt-14 max-md:mt-10" />
      </article>
      <article className="flex lg:hidden text-base leading-tight flex-col justify-center items-center mb-28">
        <div className="w-full sticky lg:hidden top-4">
          <Select
            className="mb-5"
            options={options}
            onChange={(option) => setSectionIndex(Number(option.value))}
            value={options[sectionIndex]}
          />
        </div>
        <ComparisonSection
          {...computeSection}
          rows={computeSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
        />
        <ComparisonSection
          {...storageSection}
          rows={storageSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
        />
        <ComparisonSection
          {...networkSection}
          rows={networkSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-6"
        />
        <ComparisonSection
          {...devopsSection}
          rows={devopsSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-14 max-md:mt-10"
        />
      </article>
    </>
  );
}
