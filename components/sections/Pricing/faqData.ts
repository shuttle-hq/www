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
    question:
      "What is the difference between a Spot Instance and a Reserved Instance?",
    answer:
      "A Spot Instance is a flexible, cost-effective option available on the Community tier that may be interrupted or terminated based on system demand. These instances run on shared infrastructure and are ideal for development and testing. \n\n A Reserved Instance, available on Pro tier and above, provides dedicated, guaranteed computing resources that won't be interrupted. These instances offer consistent performance and reliability, making them suitable for production workloads and applications that require high availability.",
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
