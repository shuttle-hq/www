import Image from "next/image"

interface BenefitPointProps {
	title: string
	description: string
	iconSrc: string
}

const BenefitPoint = ({ title, description, iconSrc }: BenefitPointProps) => {
	return (
		<div className="flex gap-5 py-8 items-center w-full max-w-[608px]">
			<div className="flex-shrink-0 w-10 h-10">
				<img
					src={iconSrc}
					alt={`${title} icon`}
					className="w-10 h-10 object-contain"
					width={40}
					height={40}
				/>
			</div>
			<div>
				<h3 className="font-normal text-xl leading-7 tracking-wide text-[#D8D8D8] mb-1">
					{title}
				</h3>
				<p className="font-normal text-base leading-6 tracking-wide text-[#A2A2A2]">
					{description}
				</p>
			</div>
		</div>
	)
}

const topBenefits = [
	{
		id: 1,
		title: "Work on exciting problems and have real impact",
		description:
			"Join us in pushing the boundaries of what's possible at the intersection of cloud infrastructure and developer experience.",
		iconSrc: "/images/pages/careers/sections/rocket.svg",
	},
	{
		id: 2,
		title: "Growth opportunities in a fast-paced startup",
		description:
			"Develop your skills and career in a rapidly evolving environment with plenty of challenges.",
		iconSrc: "/images/pages/careers/sections/potted_plant.svg",
	},
	{
		id: 3,
		title: "Competitive compensation & stock options",
		description:
			"Share in the company's success with a comprehensive package that values your contributions.",
		iconSrc: "/images/pages/careers/sections/money_bag.svg",
	},
]

const bottomBenefits = [
	{
		id: 4,
		title: "Regular company off-sites",
		description:
			"Connect with your teammates in person at our exciting global retreats.",
		iconSrc: "/images/pages/careers/sections/airplane_ticket.svg",
	},
	{
		id: 5,
		title: "Flexible holidays and paid time off",
		description:
			"We believe in work-life balance and trust you to manage your time effectively.",
		iconSrc: "/images/pages/careers/sections/beach_access.svg",
	},
	{
		id: 6,
		title: "Remote-first & async-friendly environment",
		description:
			"Work from anywhere in the world with a team that respects your timezone and schedule.",
		iconSrc: "/images/pages/careers/sections/public.svg",
	},
]

export default function WhyJoinShuttle() {
	return (
		<div className="max-w-[1344px] mx-auto px-5 sm:px-10">
			<h2 className="font-gradual mb-14 text-center font-bold text-4xl leading-18 text-[#E0E0E0]">
				Why Join Shuttle?
			</h2>

			<div className="flex flex-col gap-y-14">
				<div className="flex flex-col lg:flex-row justify-between lg:items-center">
					<div className="w-full lg:px-8 lg:max-w-[608px]">
						{topBenefits.map((benefit) => (
							<BenefitPoint
								key={benefit.id}
								title={benefit.title}
								description={benefit.description}
								iconSrc={benefit.iconSrc}
							/>
						))}
					</div>

					<div className="w-full mt-14 lg:mt-0 lg:max-w-[608px] flex lg:items-center lg:justify-end">
						<div className="rounded-3xl overflow-hidden w-full max-w-[608px] h-[432px]">
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

				<div className="flex flex-col lg:flex-row justify-between lg:items-center">
					<div className="w-full order-2 lg:order-1 mt-14 lg:mt-0 lg:max-w-[608px] flex lg:items-center lg:justify-start">
						<div className="rounded-3xl overflow-hidden w-full max-w-[608px] h-[432px]">
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
							{bottomBenefits.map((benefit) => (
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
