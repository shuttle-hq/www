import React from "react";

interface HiringStepProps {
  number: string;
  title: string;
  description: string;
}

const HiringStep: React.FC<HiringStepProps> = ({ number, title, description }) => {
  return (
    <div className="border-b border-[#FFFFFF4D] py-6">
      <div className="flex flex-wrap items-start lg:flex-nowrap">
        <div className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#A2A2A2] mr-5 w-10">
          {number}
        </div>
        <div className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#D8D8D8] w-full sm:w-full md:w-full lg:w-[300px] lg:min-w-[300px] lg:flex-shrink-0">
          {title}
        </div>
        <div className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#A2A2A2] w-full sm:w-full md:w-full lg:w-auto lg:ml-5">
          {description}
        </div>
      </div>
    </div>
  );
};

const HiringProcess: React.FC = () => {
  const steps: HiringStepProps[] = [
    {
      number: "01",
      title: "Initial Call",
      description: "Chat with our team to learn more about you."
    },
    {
      number: "02",
      title: "Technical Challenge",
      description: "Solve a real-world problem we face at Shuttle."
    },
    {
      number: "03",
      title: "Meet the Founders",
      description: "Discuss your approach, vision, and culture fit."
    },
    {
      number: "04",
      title: "Shuttle Docking Trial",
      description: "Spend a (fully-paid) day working alongside our team on a real task."
    },
    {
      number: "05",
      title: "Offer & Onboarding",
      description: "Welcome aboard!"
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 mb-16 sm:px-6 md:mb-24 lg:px-8">
      <h2 className="font-gradual font-bold text-4xl leading-tight tracking-normal text-[#E0E0E0] mb-8">
        Our Hiring Process
      </h2>
      
      <div className="mt-8">
        {steps.map((step, index) => (
          <HiringStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HiringProcess;