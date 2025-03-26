import Image from "next/image"

export default function WhatWereLookingFor() {
	return (
		<section className="flex flex-col items-center gap-8 text-center max-w-[1344px] mx-auto px-5 sm:px-10 md:text-left lg:flex-row lg:justify-between lg:items-center lg:gap-[107px] lg:text-left">
			<div className="w-full max-w-[535px] h-auto flex items-center justify-center mx-auto order-1 sm:mx-auto md:mx-auto lg:order-1">
				<Image
					src="/images/pages/careers/sections/astronaut.png"
					alt="Astronaut on the moon"
					width={535}
					height={458}
					className="rounded-4xl object-cover"
				/>
			</div>

			<div className="flex-1 flex flex-col gap-6 mx-auto order-2 lg:order-2">
				<h2 className="font-gradual font-bold text-4xl leading-tight tracking-normal text-[#E0E0E0]">
					What we&apos;re looking for
				</h2>
				<p className="text-xl leading-7 tracking-wide text-[#A2A2A2]">
					We&apos;re a growth mindset company. We&apos;re honest, open-minded,
					driven, and ambitious and we are only looking for people who share
					these qualities with us.
				</p>
				<p className="text-xl leading-7 tracking-wide text-[#A2A2A2]">
					We are building a culture that brings out the best in people and we
					truly believe that the company you work at should be the launch pad
					for unleashing your full potential.
				</p>
				<p className="text-xl leading-7 tracking-wide text-[#A2A2A2]">
					We believe in ownership and responsibility. We&apos;re looking for
					people that propose ideas and then take them from start to finish.
				</p>
			</div>
		</section>
	)
}
