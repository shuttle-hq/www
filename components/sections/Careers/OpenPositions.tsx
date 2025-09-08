import React from "react"
import JobListItem, { JobData } from "../JobListItem"

interface OpenPositionsProps {
  jobData: JobData[]
}

export default function OpenPositions({ jobData }: OpenPositionsProps) {
  return (
    <div
      id="open-positions"
      className="relative custom-open-positions-bg bg-no-repeat flex flex-col justify-center"
    >
      <div className="w-full rounded-4xl backdrop-blur-xl bg-grey800 border border-grey700 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="border-b border-grey700 md:w-1/4 md:min-w-72 md:border-r md:border-grey700 md:border-b-0">
            <div className="p-12 h-full flex items-left md:justify-start">
              <h2 className="font-gradual font-bold text-5xl leading-64 text-grey500">
                Open <br /> Positions
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
  )
}
