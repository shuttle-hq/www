import { PropsWithChildren } from "react"
import { Page } from "components/templates"
import { ReactNode } from "react"
import Hero from "components/sections/Careers/Hero"
import CompanyMission from "components/sections/Careers/CompanyMission"
import OurCultureAndValues from "components/sections/Careers/OurCultureAndValues"
import WhatWereLookingFor from "components/sections/Careers/WhatWereLookingFor"
import WhyJoinShuttle from "components/sections/Careers/WhyJoinShuttle"
import OpenPositions from "components/sections/Careers/OpenPositions"
import HiringProcess from "components/sections/Careers/OurHiringProcess"
import { jobData } from "content/positions"

export default function CareersPage() {
  return (
    <div className="flex-grow overflow-x-clip">
      <Hero />
      <div className="max-w-[1440px] px-5 sm:px-10 lg:px-20 mx-auto flex flex-col my-28 gap-28 sm:mt-52 sm:mb-32 sm:gap-52">
        <CompanyMission />
        <OurCultureAndValues />
        <WhatWereLookingFor />
        <WhyJoinShuttle />
        <OpenPositions jobData={jobData} />
        <HiringProcess />
      </div>
    </div>
  )
}

CareersPage.getLayout = (children: ReactNode) => <Page>{children}</Page>
