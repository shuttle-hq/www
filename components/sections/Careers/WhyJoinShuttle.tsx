import Image from "next/image"
import BenefitPoint from "../BenefitPoint"
import { benefits } from "content/benefits"

export default function WhyJoinShuttle() {
  return (
    <div className="max-w-[1344px] mx-auto px-5 sm:px-10">
      <h2 className="font-gradual mb-14 text-center font-bold text-40 leading-72 text-grey500">
        Why Join Shuttle?
      </h2>

      <div className="flex flex-col gap-y-14">
        <div className="flex flex-col lg:gap-12 lg:flex-row justify-between lg:items-center">
          <div className="w-full lg:px-8 lg:max-w-[608px]">
            {benefits.slice(0, 3).map((benefit) => (
              <BenefitPoint
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                iconSrc={benefit.iconSrc}
              />
            ))}
          </div>

          <div className="w-full mt-14 lg:mt-0 md:w-full lg:max-w-[608px] flex lg:items-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden w-full md:w-full max-w-none md:max-w-none lg:max-w-[608px] h-[432px]">
              <Image
                src="/images/pages/careers/sections/team1.png"
                alt="Team photo"
                width={608}
                height={432}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:gap-12 lg:items-center">
          <div className="w-full order-2 lg:order-1 mt-14 lg:mt-0 md:w-full lg:max-w-[608px] flex lg:items-center lg:justify-start">
            <div className="rounded-3xl overflow-hidden w-full md:w-full max-w-none md:max-w-none lg:max-w-[608px] h-[432px]">
              <Image
                src="/images/pages/careers/sections/team2.png"
                alt="Team photo"
                width={608}
                height={432}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full order-1 lg:order-2 lg:max-w-[608px]">
            <div className="w-full lg:px-8 max-w-[608px] ml-auto">
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
  )
}
