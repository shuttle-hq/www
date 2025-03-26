import React from "react"

interface HiringStepProps {
	number: string
	title: string
	description: string
}

const HiringStep: React.FC<HiringStepProps> = ({
	number,
	title,
	description,
}) => {
	return (
		<div className="border-b border-[#FFFFFF4D] py-5">
			<div className="flex flex-wrap gap-5 items-start lg:flex-nowrap">
				<div className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#A2A2A2] w-10">
					{number}
				</div>
				<div className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#D8D8D8] w-full sm:w-full md:w-full lg:w-[300px] lg:min-w-[300px] lg:flex-shrink-0">
					{title}
				</div>
				<div className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#A2A2A2] w-full sm:w-full md:w-full lg:w-auto">
					{description}
				</div>
			</div>
		</div>
	)
}

const HiringProcess: React.FC = () => {
	const steps: HiringStepProps[] = [
		{
			number: "01",
			title: "Initial Call",
			description: "Chat with our team to learn more about you.",
		},
		{
			number: "02",
			title: "Technical Challenge",
			description: "Solve a real-world problem we face at Shuttle.",
		},
		{
			number: "03",
			title: "Meet the Founders",
			description: "Discuss your approach, vision, and culture fit.",
		},
		{
			number: "04",
			title: "Shuttle Docking Trial",
			description:
				"Spend a (fully-paid) day working alongside our team on a real task.",
		},
		{
			number: "05",
			title: "Offer & Onboarding",
			description: "Welcome aboard!",
		},
	]

	return (
		<div className="max-w-[1344px] w-full flex flex-col gap-8 mx-auto px-5 sm:px-10">
			<h2 className="font-gradual font-bold text-4xl leading-18 text-[#E0E0E0]">
				Our Hiring Process
			</h2>

			<>
				{steps.map((step, index) => (
					<HiringStep
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
