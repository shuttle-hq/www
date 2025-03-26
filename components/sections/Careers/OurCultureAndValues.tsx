import * as React from "react"
import PricingGrid from "../../../components/sections/Pricing/UsageBasedPricing/PricingGrid"
interface ValueCardProps {
	emoji: string
	title: string
	subtitle: string
}

const ValueCard: React.FC<ValueCardProps> = ({ emoji, title, subtitle }) => {
	return (
		<article className="h-full w-full" role="listitem">
			<div className="flex flex-col h-full gap-1 p-8 bg-black border border-solid border-white border-opacity-30 rounded-[32px]">
				<div className="text-2xl">{emoji}</div>
				<h4 className="font-atkinson font-normal text-xl leading-8 tracking-wide text-[#D8D8D8]">
					{title}
				</h4>
				<p className="font-atkinson font-normal text-base leading-6 tracking-wide text-[#A2A2A2]">
					{subtitle}
				</p>
			</div>
		</article>
	)
}

const cultureData = [
	{
		emoji: "😊",
		title: "Simplicity, ease and joy",
		subtitle: "At the heart of our platform and core of everything we do.",
	},
	{
		emoji: "👩‍💻",
		title: "Developer-first approach",
		subtitle: "We build tools that we'd love to use.",
	},
	{
		emoji: "🔧",
		title: "Be your best self",
		subtitle: "We encourage curiosity, experimentation and development",
	},
	{
		emoji: "🔑",
		title: "Ownership",
		subtitle: "Lead projects end-end. Big responsibilities, real impact.",
	},
]

export default function OurCultureAndValues() {
	return (
		<div className="relative min-h-[800px] flex flex-col justify-center custom-culture-bg bg-no-repeat">
			<div className="w-full max-w-[1344px] mx-auto px-5 sm:px-10">
				<div className="flex flex-col gap-14  xl:flex-row xl:justify-between items-center">
					<div className="w-full min-w-32 xl:w-auto text-center xl:text-left">
						<h3 className="text-4xl md:text-5xl font-bold text-gray-300 font-gradual">
							Our culture <br /> and values
						</h3>
					</div>

					<section className="w-full max-w-[800px]" aria-label="Culture Values">
						<div
							className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
							role="list"
						>
							{cultureData.map((item, index) => (
								<ValueCard key={index} {...item} />
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
