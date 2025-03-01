export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const faqData: FaqItem[] = [
  {
    question: "Is payment information required to begin?",
    answer:
      "Not at all! You can begin building on Shuttle right away with our Community tier. Jump in and explore with a project, running with 512MB RAM and 0.25 vCPU. Perfect for learning Rust and experimenting with your ideas.",
  },
  {
    question: "What's included in the Community tier? Is it really free?",
    answer:
      "Our Community tier gives you everything needed to build and learn. You'll get two projects with dedicated resources, 100 monthly build minutes, and 1GB of data transfer. Want to scale up? Additional resources are available when you need them, like extra storage ($0.12/GB) or more build time.",
  },
  {
    question: "How does your usage-based pricing work?",
    answer: [
      "Our base tiers (community and pro) include generous allocations of resources. If you need more, additional resources are available at the following rates:",
      "Database storage: $0.12/GB",
      "Build minutes: $0.025/min",
      "Network egress: $0.10/GB",
      "Compute (only for pro): $0.06/vCPU hour",
    ],
  },
  {
    question: "What it is included in the Additional Infra Promo?",
    answer: [
      "Once the free subscription fee period expires, you get enhanced infrastructure resources for the following 3 months:",
      "Extra 1.5GB database storage (2GB total)",
      "Additional 150 build minutes (250 total per month)",
      "Extra 9 GB network egress (10GB total per month)",
      "After the promotional period, resources return to standard Pro tier levels, or you can choose to maintain higher limits by paying for additional usage.",
    ],
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens if I exceed my plan's limits?",
    answer:
      "We use soft and hard limits for requests. You'll receive notifications when approaching soft limits, giving you time to upgrade. Hard limits are enforced to maintain service quality. For resource usage (storage, build minutes, network), you'll be billed for additional usage at our standard rates.",
  },
  {
    question: "How does custom domain support work?",
    answer:
      "Setting up your domain is straightforward! Every plan includes custom domains. Community users get one domain included, Pro users get three, and Growth users get five domains. Need more? You can add extra domains for just $0.25 monthly.",
  },
  {
    question: "What kind of support is included with each plan?",
    answer:
      "Community tier includes Discord and email support. Pro tier adds 1-business-day response time and migration support. Growth tier includes priority support with faster response times and dedicated support channels. Enterprise plans come with custom SLAs.",
  },
  {
    question: "Does Shuttle only support Rust?",
    answer:
      "Yes, Shuttle is purpose-built for Rust applications. By focusing on Rust, we can provide seamless integration with popular frameworks like Axum, Actix-Web, Rig, and Rocket, enabling easy deployments without complex configuration. If you're building in Rust, Shuttle offers an unmatched developer experience.",
  },
  {
    question: "Is Shuttle open source?",
    answer:
      "While Shuttle is not fully open source at this time, we are committed to making our platform more open and transparent. We believe in the power of community collaboration and are actively working towards an open-source infrastructure, including code standards. This is a key priority for us, and we'll be sharing updates on our progress as we move forward.",
  },
  {
    question: "Can I bring my own cloud provider?",
    answer:
      "This option will be available for Enterprise customers. You will be able to use your existing cloud infrastructure while still benefiting from Shuttle's developer experience and tooling. Contact our team for more details.",
  },
];
