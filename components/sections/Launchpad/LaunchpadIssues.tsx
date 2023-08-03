import { Issue } from 'lib/launchpad/issues'
import Link from 'next/link'
import { FC } from 'react'

interface IssueProps {
	issues: Issue[]
}

const LaunchpadIssues: FC<IssueProps> = ({ issues }) => {
	return (
		<div className='mt-16 flex w-full flex-col lg:mx-auto lg:mt-20  lg:max-w-7xl lg:px-10'>
			<h1 className='mb-16 text-[56px] font-bold text-[#C2C2C2]'>Shuttle Launchpad</h1>

			<p className='my-6 text-[#7A7A7A]'>
				Dive into previous Launchpad issues that empower you with in-depth knowledge of Rust concepts while
				building real-world web applications.
			</p>
			<div className='mt-5 px-5'>
				{issues.map((issue, idx) => (
					<Issue key={issue.slug} idx={idx} issue={issue} />
				))}
			</div>
		</div>
	)
}

export function Issue({ issue, idx }: { idx: number; issue: Issue }) {
	return (
		<div className={`flex justify-between gap-4 border-b border-[#1A1A1A] py-5 ${idx === 0 && 'border-t'}`}>
			<div className='flex gap-4'>
				<Link href={`/launchpad/issues/${issue.url}`}>
					<h2 className='text-xl text-[#D8D8D8]'>{issue.title}</h2>
				</Link>
			</div>

			<p className='text-[#7A7A7A]'>{issue.date}</p>
		</div>
	)
}

export default LaunchpadIssues
