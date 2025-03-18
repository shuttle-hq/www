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
          primaryTooltip: "Up to 10 available, see docs",
          secondary: "projects",
        },
        {
          icon: CheckIcon,
          primary: "10",
          primaryTooltip: "Up to 50 available, see docs",
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
          primary: "Reserved",
          secondary: "instance",
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
          primary: "Usage",
          secondary: "based",
        },
        {
          icon: CheckIcon,
          primary: "Usage",
          secondary: "based",
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
          primary: "Usage",
          secondary: "based",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Scaleable",
          secondary: "instance",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Scaleable",
          primaryTooltip:
            "Scale up to 4vCPU and  8GB Memory - see usage based pricing below",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          primary: "Scaleable",
          primaryTooltip: "Scale up to TBC Memory and TBC",
          secondary: "instance",
        },
        {
          icon: CheckIcon,
          primary: "Scaleable",
          secondary: "instance",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Horizontal",
          secondary: "scaling",
          isDisabled: true,
        },
        {
          icon: CloseIcon,
          primary: "Horizontal",
          secondary: "scaling",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Horizontal ",
          primaryTooltip:
            "Load balance across multiple instances, see usage based pricing",
          secondary: "scaling",
        },
        {
          icon: CheckIcon,
          primary: "Horizontal ",
          primaryTooltip:
            "Load balance across multiple instances, see usage based pricing",
          secondary: "scaling",
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
          primary: "Shared",
          secondary: "DB",
        },
        {
          icon: CheckIcon,
          primary: "Dedicated DB",
          secondary: "available",
          secondaryTooltip: "$20/month",
        },
        {
          icon: CheckIcon,
          primary: "Dedicated DB",
          secondary: "included",
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
          primary: "0.5",
          secondary: "GB included",
        },
        {
          icon: CheckIcon,
          primary: "0.5",
          secondary: "GB included",
        },
        {
          icon: CheckIcon,
          primary: "20",
          secondary: "GB included",
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
          isDisabled: true,
          primary: "",
          secondary: "More storage",
        },
        {
          icon: CheckIcon,
          primary: "More",
          secondary: "storage",
          secondaryTooltip: "See usage based pricing below",
        },
        {
          icon: CheckIcon,
          primary: "More",
          secondary: "storage",
          secondaryTooltip: "See usage based pricing below",
        },
        {
          icon: CheckIcon,
          primary: "More",
          secondary: "storage",
          secondaryTooltip: "See usage based pricing below",
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
          secondary: "custom domain",
        },
        {
          icon: CheckIcon,
          primary: "3",
          secondary: "custom domains",
          secondaryTooltip: "1 c.d. per project included, see docs for extra",
        },
        {
          icon: CheckIcon,
          primary: "10",
          secondary: "custom domains",
          secondaryTooltip: "1 c.d. per project included, see docs for extra",
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
          primary: "1 GB",
          secondary: "egress included",
        },
        {
          icon: CheckIcon,
          primary: "1 GB",
          secondary: "egress included",
        },
        {
          icon: CheckIcon,
          primary: "1 GB",
          secondary: "egress included",
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
          primary: "More",
          secondary: "egress",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "More",
          secondary: "egress",
          secondaryTooltip: "See usage based pricing below",
        },
        {
          icon: CheckIcon,
          primary: "More",
          secondary: "egress",
          secondaryTooltip: "See usage based pricing below",
        },
        {
          icon: CheckIcon,
          primary: "More",
          secondary: "egress",
          secondaryTooltip: "See usage based pricing below",
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
          secondary: "monthly build minutes",
        },
        {
          icon: CheckIcon,
          primary: "100",
          secondary: "monthly build minutes",
        },
        {
          icon: CheckIcon,
          primary: "250",
          secondary: "monthly build minutes",
        },
        {
          icon: CheckIcon,
          primary: "Custom",
          secondary: "monthly build minutes",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Additional build minutes",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "build minutes",
          secondaryTooltip: "See usage based pricing below",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "build minutes",
          secondaryTooltip: "See usage based pricing below",
        },
        {
          icon: CheckIcon,
          primary: "Additional",
          secondary: "build minutes",
          secondaryTooltip: "See usage based pricing below",
        },
      ],
    },
  ],
};

const monitoringSection = {
  title: "Monitoring & Observability",
  icon: "/images/pages/pricing/sections/pricingComparison/monitoring-and-observability.svg",
  rows: [
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "7-day",
          secondary: "log retention",
        },
        {
          icon: CheckIcon,
          primary: "14-day",
          secondary: "log retention",
        },
        {
          icon: CheckIcon,
          primary: "30-day",
          secondary: "log retention",
        },
        {
          icon: CheckIcon,
          primary: "Custom",
          secondary: "log retention",
        },
      ],
    },
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "Basic",
          secondary: "usage metrics",
        },
        {
          icon: CheckIcon,
          primary: "Basic",
          secondary: "usage metrics",
        },
        {
          icon: CheckIcon,
          primary: "Basic",
          secondary: "usage metrics",
        },
        {
          icon: CheckIcon,
          primary: "Basic",
          secondary: "usage metrics",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Custom app metrics & traces",
          secondary: "",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Custom",
          secondary: "app metrics & traces",
          secondaryTooltip: "Metrics & traces",
        },
        {
          icon: CheckIcon,
          primary: "Custom",
          secondary: "app metrics & traces",
          secondaryTooltip: "Metrics & traces",
        },
        {
          icon: CheckIcon,
          primary: "Custom",
          secondary: "app metrics & traces",
          secondaryTooltip: "Metrics & traces",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Custom log destinations",
          secondary: "",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Custom ",
          secondary: "log destinations",
        },
        {
          icon: CheckIcon,
          primary: "Custom ",
          secondary: "log destinations",
        },
        {
          icon: CheckIcon,
          primary: "Custom ",
          secondary: "log destinations",
        },
      ],
    },
  ],
};

const teamAccessSection = {
  title: "Team access",
  icon: "/images/pages/pricing/sections/pricingComparison/team-access.svg",
  rows: [
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Team",
          secondary: "access",
          isDisabled: true,
        },
        {
          icon: CloseIcon,
          primary: "Team",
          secondary: "access",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "10",
          primaryTooltip: "$25 per additional seat",
          secondary: "seats",
        },
        {
          icon: CheckIcon,
          isCustom: true,
        },
      ],
    },
  ],
};

const supportSection = {
  title: "Support",
  icon: "/images/pages/pricing/sections/pricingComparison/support.svg",
  rows: [
    {
      cells: [
        {
          icon: CheckIcon,
          primary: "Community",
          primaryTooltip:
            "Access to all help threads and Shuttle team when available",
          secondary: "support",
        },
        {
          icon: CheckIcon,
          primary: "Priority",
          primaryTooltip:
            "White glove migration and response time < 1 business day",
          secondary: "support",
        },
        {
          icon: CheckIcon,
          primary: "Dedicated",
          primaryTooltip:
            "White glove migration and response time < 1 business day ",
          secondary: "support",
        },
        {
          icon: CheckIcon,
          primary: "Dedicated",
          primaryTooltip:
            "White glove migration and response time < 1 business day ",
          secondary: "support",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Private",
          secondary: "support channel",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Private",
          secondary: "support channel",
        },
        {
          icon: CheckIcon,
          primary: "Private",
          secondary: "support channel",
        },
        {
          icon: CheckIcon,
          primary: "Private",
          secondary: "support channel",
        },
      ],
    },
    {
      cells: [
        {
          icon: CloseIcon,
          primary: "Uptime",
          secondary: "SLA",
          isDisabled: true,
        },
        {
          icon: CloseIcon,
          primary: "Uptime",
          secondary: "SLA",
          isDisabled: true,
        },
        {
          icon: CloseIcon,
          primary: "Uptime",
          secondary: "SLA",
          isDisabled: true,
        },
        {
          icon: CheckIcon,
          primary: "Uptime",
          secondary: "SLA",
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
        <ComparisonSection {...storageSection} className="mt-12" />
        <ComparisonSection {...networkSection} className="mt-12" />
        <ComparisonSection {...devopsSection} className="mt-12" />
        <ComparisonSection {...monitoringSection} className="mt-12" />
        <ComparisonSection {...teamAccessSection} className="mt-12" />
        <ComparisonSection {...supportSection} className="mt-12 max-md:mt-10" />
      </article>
      <article className="flex lg:hidden text-base leading-tight flex-col justify-center items-center mb-14 md:mb-28">
        <div className="w-full sticky lg:hidden top-0 resize z-10">
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
          className="mt-10"
        />
        <ComparisonSection
          {...networkSection}
          rows={networkSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-10"
        />
        <ComparisonSection
          {...devopsSection}
          rows={devopsSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-10"
        />
        <ComparisonSection
          {...monitoringSection}
          rows={monitoringSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-10"
        />
        <ComparisonSection
          {...teamAccessSection}
          rows={teamAccessSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-10"
        />
        <ComparisonSection
          {...supportSection}
          rows={supportSection.rows.map((row) => ({
            cells: [row.cells[sectionIndex]],
          }))}
          className="mt-10"
        />
      </article>
    </>
  );
}
