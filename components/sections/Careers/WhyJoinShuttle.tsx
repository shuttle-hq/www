import Image from "next/image"
import BenefitPoint from "../BenefitPoint"
import { benefits } from "content/benefits"

export default function WhyJoinShuttle() {
  return (
    <div className="max-w-[1344px] mx-auto px-5 tablet:px-10">
      <h2 className="font-gradual mb-14 text-center font-bold text-40 leading-72 text-grey500">
        Why Join Shuttle?
      </h2>

      <div className="flex flex-col gap-y-14">
        <div className="flex flex-col tablet:flex-row tablet:gap-12 tablet:items-center justify-between">
          <div className="w-full order-1 tablet:order-2 tablet:w-full tablet:max-w-[608px] flex tablet:items-center tablet:justify-end relative aspect-[608/432] tablet:flex-1 tablet:h-auto tablet:self-stretch">
            <div className="rounded-3xl overflow-hidden w-full tablet:w-full max-w-none tablet:max-w-none tablet:max-w-[608px]">
              <Image
                src="/images/pages/careers/sections/team1.png"
                alt="Team photo"
                fill
                sizes="(max-width: 767px) 100vw, 580px"
                className="rounded-4xl object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full order-2 tablet:order-1 mt-5 tablet:mt-0 tablet:max-w-[608px] flex flex-1 flex-col justify-center items-center text-left tablet:items-start tablet:mx-0">
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

        <div className="flex flex-col tablet:flex-row tablet:gap-12 tablet:items-center justify-between">
          <div className="w-full order-3 tablet:order-1 tablet:w-full tablet:max-w-[608px] flex tablet:items-center tablet:justify-start">
            <div className="rounded-3xl overflow-hidden w-full tablet:w-full max-w-none tablet:max-w-none tablet:max-w-[608px] mobileM:h-[432px]">
              <Image
                src="/images/pages/careers/sections/team2.png"
                alt="Team photo"
                width={608}
                height={432}
                className="w-full object-contain mobileM:object-cover mobileM:h-full"
                priority
              />
            </div>
          </div>

          <div className="w-full order-4 tablet:order-2 mt-5 tablet:mt-0 tablet:max-w-[608px]">
            <div className="w-full flex flex-1 flex-col justify-center items-center text-left tablet:items-start tablet:mx-0">
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
