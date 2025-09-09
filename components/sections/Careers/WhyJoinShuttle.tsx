import Image from "next/image";
import BenefitPoint from "../BenefitPoint";
import { benefits } from "content/benefits";

export default function WhyJoinShuttle() {
  return (
    <div>
      <h2 className="font-gradual mb-14 text-center font-bold text-40 leading-72 text-grey500">
        Why Join Shuttle?
      </h2>

      <div className="flex flex-col gap-y-14">
        <div className="flex flex-col md:flex-row md:gap-12 md:items-stretch justify-between">
          <div className="w-full order-1 md:order-2 md:w-full md:max-w-[608px] flex md:items-stretch md:justify-end flex-1">
            <div className="relative rounded-3xl overflow-hidden w-full h-auto md:h-full">
              <Image
                src="/images/pages/careers/sections/team-1.jpg"
                alt="Team photo"
                width={608}
                height={432}
                className="w-full h-auto md:absolute md:inset-0 md:h-full object-contain md:object-cover rounded-3xl"
                priority
              />
            </div>
          </div>

          <div className="w-full order-2 md:order-1 mt-5 md:mt-0 md:max-w-[608px] flex flex-1 flex-col justify-center items-center text-left md:items-start md:mx-0">
            {benefits.slice(0, 3).map((benefit) => (
              <BenefitPoint
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                iconSrc={benefit.iconSrc}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-12 md:items-center justify-between">
          <div className="w-full order-3 md:order-1 md:w-full md:max-w-[608px] flex md:items-center md:justify-start">
            <div className="w-full order-3 md:order-1 md:w-full md:max-w-[608px] flex md:items-center md:justify-start">
              <div className="relative rounded-3xl overflow-hidden w-full h-auto md:h-[432px]">
                <Image
                  src="/images/pages/careers/sections/team-2.jpg"
                  alt="Team photo"
                  width={608}
                  height={432}
                  className="w-full h-auto md:w-auto md:h-full object-contain md:object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full order-4 md:order-2 mt-5 md:mt-0 md:max-w-[608px]">
            <div className="w-full flex flex-1 flex-col justify-center items-center text-left md:items-start md:mx-0">
              {benefits.slice(3, 6).map((benefit) => (
                <BenefitPoint
                  key={benefit.id}
                  title={benefit.title}
                  description={benefit.description}
                  iconSrc={benefit.iconSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
