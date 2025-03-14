export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const faqData: FaqItem[] = [
  {
    question: "Is payment information required to start?",
    answer:
      "Not at all! You can begin building on Shuttle right away with our Community tier. Jump in and explore with a project, running with 512MB RAM and 0.25 vCPU. Perfect for learning experimenting with your ideas.",
  },
  {
    question: "What's included in the Community tier? Is it really free?",
    answer:
      "Our Community tier gives you everything needed to build and learn. You'll get one project with dedicated resources, 100 monthly build minutes, and 1GB of data transfer. Community tier is completely free with no credit card required. It's ideal for prototyping, personal projects, and learning Rust.",
  },
  {
    question: "How does your usage-based pricing work?",
    answer: [
      "Our Pro and Growth tiers include generous base allocations of resources. If you need more, additional resources are available at the following rates:",
      "Additional vCPU: from $0.06/vCPU hour",
      "Database storage: $0.12/GB",
      "Build minutes: $0.025/min",
      "Network egress: $0.10/GB",
      "Dedicated database (Pro tier): $20/month for 20GB storage",
    ],
  },
  {
    question: "How many projects can I create with each tier?",
    answer:
      "Community tier includes 1 project. Pro tier includes 3 projects, and you can add more (up to 10 total) with a minimum size of 0.5 vCPU and 1GB of Memory for $0.06/vCPU hour. Growth tier includes 10 projects, scalable up to 50 projects. Each additional project comes with its own resources and custom domain.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens if I exceed my plan's limits?",
    answer:
      "We use soft and hard limits for requests. You'll receive notifications when approaching soft limits, giving you time to upgrade. Hard limits are enforced to maintain service quality. Community tier has soft/hard limits of 5/10 requests per second, while Pro tier offers 25/50 requests per second. For resource usage (vCPU, storage, build minutes, network), you'll be billed for additional usage at our standard rates.",
  },
  {
    question: "How does custom domain support work?",
    answer:
      "Setting up your domain is straightforward! Every plan includes custom domains. Community users get one domain included. Pro users get one domain per project (up to 3 projects included in the base fee), and Growth users get one domain per project (up to 10 projects in the base fee). When purchasing an additional project, you will automatically get a new custom domain with it. Need more domains? You can add extra domains for just $0.25 monthly.",
  },
  {
    question: "What kind of support is included with each plan?",
    answer:
      "Community tier includes Discord and email support (without response time commitment). Pro tier adds 1-business-day response time and migration support. Growth tier includes priority support during business hours   and dedicated support channels. Enterprise plans come with custom SLAs.",
  },
  {
    question: "Does Shuttle only support Rust?",
    answer:
      "Yes, Shuttle is purpose-built for Rust applications. By focusing on Rust, we can provide seamless integration with popular frameworks like Axum, Actix-Web, Rig, and Rocket, enabling easy deployments without complex configuration. If you're building in Rust, Shuttle offers an unmatched developer experience.",
  },
  {
    question: "Is Shuttle open source?",
    answer:
      "While Shuttle is not fully open source at this time, we are committed to making our platform more open and transparent. We believe in the power of community collaboration and are actively working towards an open-source and self-hostable version of Shuttle. This is a key priority for us, and we'll be sharing updates on our progress as we move forward.",
  },
  {
    question: "Can I bring my own cloud provider?",
    answer:
      "This option will be available for Enterprise customers. You will be able to use your existing cloud infrastructure while still benefiting from Shuttle's developer experience and tooling. Contact our team for more details.",
  },
];
