import React from "react"
import JobListItem, { JobData } from "../JobListItem"

interface OpenPositionsProps {
  jobData: JobData[]
}

export default function OpenPositions({ jobData }: OpenPositionsProps) {
  return (
    <div
      id="open-positions"
      // custom-open-positions-bg bg-no-repeat
      className="relative  fle flex flex-col justify-center"
    >
      <div className="max-w-[1344px] w-full mx-auto px-5 sm:px-10">
        <div className="w-full rounded-[32px] backdrop-blur-[20px] bg-grey800 border border-grey700 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="border-b border-grey700 lg:w-1/4 lg:min-w-[300px] lg:border-r lg:border-grey700 lg:border-b-0">
              <div className="p-12 h-full flex items-left justify-center lg:justify-start">
                <h2 className="font-gradual font-bold text-5xl leading-64 tracking-normal text-grey500">
                  Open Positions
                </h2>
              </div>
            </div>

            <div className="flex-1">
              <ul className="list-none m-0 p-0">
                {jobData.map((job, index) => (
                  <JobListItem
                    key={index}
                    jobTitle={job.jobTitle}
                    jobDescription={job.jobDescription}
                    jobLink={job.jobLink}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
