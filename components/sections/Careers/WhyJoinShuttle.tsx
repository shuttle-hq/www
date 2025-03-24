import Image from "next/image";

interface BenefitPointProps {
  title: string;
  description: string;
  icon: any;
}

const BenefitPoint = ({ title, description, icon }: BenefitPointProps) => {
  return (
    <div className="flex gap-5 mb-10 items-center">
      <div className="flex-shrink-0 w-10 h-10">
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      </div>
      <div>
        <h3 className="font-atkinson font-normal text-[20px] leading-[28px] tracking-[0.01em] text-[#D8D8D8] mb-1">{title}</h3>
        <p className="font-atkinson font-normal text-base leading-6 tracking-[0.01em] text-[#A2A2A2]">{description}</p>
      </div>
    </div>
  );
};

const topBenefits = [
  {
    id: 1,
    title: "Work on exciting problems and have real impact",
    description: "Join us in pushing the boundaries of what's possible at the intersection of cloud infrastructure and developer experience."
  },
  {
    id: 2,
    title: "Growth opportunities in a fast-paced startup",
    description: "Develop your skills and career in a rapidly evolving environment with plenty of challenges."
  },
  {
    id: 3,
    title: "Competitive compensation & stock options",
    description: "Share in the company's success with a comprehensive package that values your contributions."
  }
];

const bottomBenefits = [
  {
    id: 4,
    title: "Regular company off-sites",
    description: "Connect with your teammates in person at our exciting global retreats."
  },
  {
    id: 5,
    title: "Flexible holidays and paid time off",
    description: "We believe in work-life balance and trust you to manage your time effectively."
  },
  {
    id: 6,
    title: "Remote-first & async-friendly environment",
    description: "Work from anywhere in the world with a team that respects your timezone and schedule."
  }
];

export default function WhyJoinShuttle() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <h2 className="text-center font-gradual font-bold text-4xl md:text-5xl text-white mb-16">
        Why Join Shuttle?
      </h2>

      <div className="flex flex-wrap justify-between gap-y-14">
        <div className="w-full lg:w-[45%] order-1">
          <div className="max-w-lg">
            {topBenefits.map((benefit) => (
              <BenefitPoint
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                icon={<div className="w-10 h-10 bg-gray-700 rounded-full"></div>}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[calc(50%-48px)] order-2 lg:order-2 mb-0">
          <div className="rounded-3xl overflow-hidden h-[400px] w-full">
            <div className="bg-gray-700 w-full h-full">
              <Image 
                src="/images/pages/careers/sections/team1.png"
                alt="Team photo" 
                width={600} 
                height={400} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] order-3 lg:order-4">
          <div className="max-w-lg ml-auto">
            {bottomBenefits.map((benefit) => (
              <BenefitPoint
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                icon={<div className="w-10 h-10 bg-gray-700 rounded-full"></div>}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[calc(50%-48px)] order-4 lg:order-3">
          <div className="rounded-3xl overflow-hidden h-[400px] w-full">
            <div className="bg-gray-700 w-full h-full">
              <Image 
                src="/images/pages/careers/sections/team2.png"
                alt="Team photo" 
                width={600} 
                height={400} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}