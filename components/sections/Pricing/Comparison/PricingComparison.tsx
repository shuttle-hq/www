"use client";
import React from "react";
import { ComparisonSection } from "./ComparisonSection";

const computeSection = {
  title: "Compute & Infrastructure",
  rows: [
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1",
          secondary: "project",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "3",
          secondary: "projects",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "10",
          secondary: "projects",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Spot",
          secondary: "instance",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Reserved",
          secondary: "instance",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Reserved",
          secondary: "instance",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Spot",
          secondary: "instance",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Autoscaling",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Autoscaling",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "10",
          secondary: "request/second",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "50",
          secondary: "request/second",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1000",
          secondary: "request/second",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "512",
          secondary: "MB memory",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "512",
          secondary: "MB memory",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "512",
          secondary: "MB memory",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "memory available",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "memory available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "memory available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "memory available",
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "0.25",
          secondary: "vCPU",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "0.25",
          secondary: "vCPU",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Usage",
          secondary: "based",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "vCPU available",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "to vCPU available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Scalable",
          secondary: "to vCPU available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "0.5",
          secondary: "GB (db storage)",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "0.5",
          secondary: "GB (db storage)",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Usage",
          secondary: "Based",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Storage available",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "storage available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "storage available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Shared",
          secondary: "database",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Shared",
          secondary: "database",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Dedicated",
          secondary: "database",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "dedicated DB",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "dedicated DB",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "dedicated DB",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1",
          secondary: "custom domain/project",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1",
          secondary: "custom domain/project",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1",
          secondary: "custom domain/project",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Custom Domain",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Extra",
          secondary: "Custom Domain available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Extra",
          secondary: "Custom Domain available",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Extra",
          secondary: "Custom Domain available",
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1 GB/m",
          secondary: "Network Egress",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "1 GB/m",
          secondary: "Network Egress",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Usage based",
          secondary: "network egress",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Network Egress",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Network Egress",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Network Egress",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "100",
          secondary: "Monthly build minutes",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "100",
          secondary: "Monthly build minutes",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Usage",
          secondary: "based",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          isCustom: true,
        },
      ],
    },
    {
      cells: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c73b0976e20a9d8143827ca115a2c6d0dd1547bbee2e1c9101d16d6246cc4e9?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional Build Minutes",
          isDisabled: true,
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Build Minutes",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
          primary: "Additional",
          secondary: "Build Minutes",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9259372b0e46b29bfaa1d2c97cec5177cd29a57f82f40c3d5a9710b35c7c92dd?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879",
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
