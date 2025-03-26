import React from "react"
import CustomButton from "components/elements/CustomButton"

interface JobData {
	jobTitle: string
	jobDescription: string
	jobLink: string
}

interface JobItemProps extends JobData {}

interface OpenPositionsProps {
	jobData: JobData[]
}

const JobItem: React.FC<JobItemProps> = ({
	jobTitle,
	jobDescription,
	jobLink,
}) => {
	return (
		<div className="border-b border-[#FFFFFF4D] last:border-b-0">
			<div className="p-8 flex flex-wrap justify-between items-center gap-4">
				<div className="flex-1 min-w-[250px] flex flex-col gap-2.5">
					<h3 className="font-normal text-2xl leading-8 tracking-wide text-[#D8D8D8]">
						{jobTitle}
					</h3>
					<p className="font-normal text-xl leading-7 tracking-wide text-[#A2A2A2]">
						{jobDescription}
					</p>
				</div>
				<CustomButton
					className="w-[175px] justify-center"
					variant="secondary"
					href={jobLink}
				>
					Apply now
				</CustomButton>
			</div>
		</div>
	)
}

const OpenPositions: React.FC<OpenPositionsProps> = ({ jobData }) => {
	return (
		<div
			id="open-positions"
			className="relative min-h-[900px] custom-open-positions-bg bg-no-repeat fle flex flex-col justify-center"
		>
			<div className="max-w-[1344px] w-full mx-auto px-5 sm:px-10">
				<div className="w-full rounded-[32px] backdrop-blur-[20px] bg-[#000000CC] border border-[#FFFFFF4D] overflow-hidden">
					<div className="flex flex-col lg:flex-row">
						<div className="border-b border-[#FFFFFF4D] lg:w-1/4 lg:min-w-[300px] lg:border-r lg:border-[#FFFFFF4D] lg:border-b-0">
							<div className="p-12 h-full flex items-left justify-center lg:justify-start">
								<h2 className="font-gradual font-bold text-5xl leading-tight tracking-normal text-[#E0E0E0]">
									Open Positions
								</h2>
							</div>
						</div>

						<div className="flex-1">
							{jobData.map((job, index) => (
								<JobItem
									key={index}
									jobTitle={job.jobTitle}
									jobDescription={job.jobDescription}
									jobLink={job.jobLink}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OpenPositions
