import Image from 'next/image'

const Info = () => {
	return (
		<section className='relative mx-auto mt-[277px] flex max-w-screen-xl flex-col gap-40 px-4'>
			<div className='grid items-center gap-24 lg:grid-cols-50/50'>
				<div>
					<h2 className='font-gradual text-5xl font-bold text-[#F0F0F0]'>You just need an idea</h2>
					<p className='mt-8 text-xl leading-8'>
						Want to build a revolutionary new blogging service? <br /> <br /> Just write&nbsp;
						<span className='text-orange'>build me a blog service</span>. Shuttle&apos;s AI will then
						break down your prompt, and shall ask you a range of questions to help you iterate on the
						concept. <br /> <br /> Finally, once you have agreed on the design, Shuttle AI will
						generate the needed code, ensure it compiles, provision the infrastructure and deploy it to
						Shuttle&apos;s Cloud, returning you a live, fully-working backend app. <br /> <br />
						What&apos;s more, you can elect to have your new blogging service be powered by AI.
					</p>
				</div>
				<div className='flex aspect-square w-full items-center justify-center'>
					<Image
						src='/images/pages/shuttle-ai/Short-1.png'
						alt=''
						width={543}
						height={501}
						className='w-full rounded-xl border border-[#434343] p-2'
					/>
				</div>
			</div>
			<div className='grid items-center gap-24 lg:grid-cols-50/50'>
				<div className='flex aspect-square w-full items-center justify-center'>
					<Image
						src='/images/pages/shuttle-ai/Short-2.png'
						alt=''
						width={543}
						height={501}
						className='w-full rounded-xl border border-[#434343] p-2'
					/>
				</div>
				<div>
					<h2 className='font-gradual text-5xl font-bold text-[#F0F0F0]'>
						That you can continuously refine
					</h2>
					<p className='mt-8 text-xl leading-8'>
						Upgrade and improve your concept at every stage of the process. <br />
						<br />
						Rather than relying on poor quality code that is inflexible and expensive to adjust during
						development, work with Shuttle AI to build an application that meets all your requirements
						in the design phase.
					</p>
				</div>
			</div>
			<div className='grid items-center gap-24 lg:grid-cols-50/50'>
				<div>
					<h2 className='font-gradual text-5xl font-bold text-[#F0F0F0]'>With your helpful assistant</h2>
					<p className='mt-8 text-xl leading-8'>
						Shuttle AI understands the features that you may want for your application, and will
						communicate with you to ensure that you build with control.
						<br />
						<br />
						For Example:
					</p>
				</div>
				<div className='flex aspect-square w-full items-center justify-center'>
					<Image
						src='/images/pages/shuttle-ai/Short-1.png'
						alt=''
						width={543}
						height={501}
						className='w-full rounded-xl border border-[#434343] p-2'
					/>
				</div>
			</div>
			<div className='grid items-center gap-24 lg:grid-cols-50/50'>
				<div className='flex aspect-square w-full items-center justify-center'>
					<Image
						src='/images/pages/shuttle-ai/Short-4.png'
						alt=''
						width={543}
						height={501}
						className='w-full rounded-xl border border-[#434343] p-2'
					/>
				</div>
				<div>
					<h2 className='font-gradual text-5xl font-bold text-[#F0F0F0]'>And deploy it hassle-free</h2>
					<p className='mt-8 text-xl leading-8'>
						As ShuttleAI is not trained on your code, you can be confident that your data will remain
						private.
						<br />
						<br /> Furthermore, with the ability to utilize secure database options, all your
						applications&apos; data will be protected, adding an additional layer of security.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Info
