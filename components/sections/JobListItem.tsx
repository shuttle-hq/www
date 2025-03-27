import CustomButton from "components/elements/CustomButton"

export interface JobData {
  jobTitle: string
  jobDescription: string
  jobLink: string
}

export default function JobListItem({
  jobTitle,
  jobDescription,
  jobLink,
}: JobData) {
  return (
    <li className="border-b border-grey700 last:border-b-0">
      <div className="p-8 flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-4">
        <div className="flex-1 min-w-60 flex flex-col gap-2.5">
          <h3 className="text-xl leading-8 font-normal sm:text-2xl sm:leading-8 sm:tracking-1 text-grey100">
            {jobTitle}
          </h3>
          <p className="leading-6 text-base font-normal sm:text-xl sm:leading-7 sm:tracking-1 text-body">
            Description: {jobDescription}
          </p>
        </div>
        <CustomButton
          className="justify-center w-full sm:w-auto"
          variant="secondary"
          href={jobLink}
        >
          Apply now
        </CustomButton>
      </div>
    </li>
  )
}
