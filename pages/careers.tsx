import React from "react"
import { Page } from "components/templates"
import { ReactNode } from "react"
import Hero from "components/sections/Careers/Hero"
import CompanyMission from "components/sections/Careers/CompanyMission"
import OurCultureAndValues from "components/sections/Careers/OurCultureAndValues"
import WhatWereLookingFor from "components/sections/Careers/WhatWereLookingFor"
import WhyJoinShuttle from "components/sections/Careers/WhyJoinShuttle"
import OpenPositions from "components/sections/Careers/OpenPositions"
import HiringProcess from "components/sections/Careers/OurHiringProcess"

const jobData = [
  {
    jobTitle: "Product Engineer (Front-end)",
    jobDescription: "Lorem ipsum de stata co varium",
    jobLink: "/careers/product-engineer",
  },
  {
    jobTitle: "DevRel Engineer",
    jobDescription: "Lorem ipsum de stata co varium",
    jobLink: "/careers/devrel-1",
  },
  {
    jobTitle: "DevRel Engineer",
    jobDescription: "Lorem ipsum de stata co varium",
    jobLink: "/careers/devrel-2",
  },
  {
    jobTitle: "DevRel Engineer",
    jobDescription: "Lorem ipsum de stata co varium",
    jobLink: "/careers/devrel-3",
  },
  {
    jobTitle: "DevRel Engineer",
    jobDescription: "Lorem ipsum de stata co varium",
    jobLink: "/careers/devrel-4",
  },
]

export default function CareersPage() {
  return (
    <div className="flex-grow overflow-x-clip">
      <Hero />
      <div className="my-[110px]">
        <CompanyMission />
      </div>
      <OurCultureAndValues />
      <div className="flex flex-col mt-[110px] mb-[206px] gap-[220px]">
        <WhatWereLookingFor />
        <WhyJoinShuttle />
        <OpenPositions jobData={jobData} />
        <HiringProcess />
      </div>
    </div>
  )
}

CareersPage.getLayout = (children: ReactNode) => <Page>{children}</Page>
