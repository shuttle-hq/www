import React from "react"
import HiringListItem from "../HiringListItem"
import { hiringSteps } from "content/hiring"

const HiringProcess: React.FC = () => {
  return (
    <div className="max-w-[1344px] w-full flex flex-col mx-auto px-5 sm:px-10">
      <h2 className="font-gradual font-bold text-4xl mb-8 leading-72 text-grey500">
        Our Hiring Process
      </h2>

      <>
        {hiringSteps.map((step, index) => (
          <HiringListItem
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </>
    </div>
  )
}

export default HiringProcess
