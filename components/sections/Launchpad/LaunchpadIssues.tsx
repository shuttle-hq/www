import { Issue } from 'lib/launchpad/issues'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface IssueProps {
	tags: string[]
	issues: Issue[]
}

const LaunchpadIssues: FC<IssueProps> = ({ tags, issues }) => {
	const router = useRouter()

	const activeTag = router.query.tag

	return (
		<div className='mt-16 flex w-full flex-col lg:mx-auto lg:mt-20  lg:max-w-7xl lg:px-10'>
			<h1 className='mb-16 text-[56px] font-bold text-[#C2C2C2]'>Shuttle launchpad</h1>

			<div className='flex gap-2 overflow-x-scroll'>
				{tags.map((tag) => (
					<div
						key={tag}
						className={`flex items-center justify-center whitespace-nowrap rounded-[42px] border border-[#1A1A1A] px-3 py-1 text-[#C2C2C2] ${
							(activeTag === tag || (!activeTag && tag === 'all')) && 'border-[#474747] bg-[#333333]'
						}`}
					>
						<Link href={`/launchpad/issues/tags/${tag}`}>{tag}</Link>
					</div>
				))}
			</div>
			<p className='my-6 text-[#7A7A7A]'>
				Here’s some text about how this works that Ivan Černja will come up with at some point.
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
				<div className='flex flex-wrap items-center gap-[0.625rem] text-sm text-black dark:text-[#C2C2C2]'>
					{(issue?.tags || []).map((tag) => (
						<Link
							key={tag}
							href={`/launchpad/issues/tags/${tag}`}
							className='border-gradient-h relative rounded-full px-2 py-1 outline outline-1 outline-black/10 hover:outline-transparent hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-[#FC540C] hover:after:to-[#FFD76F] dark:bg-black dark:outline-[#1E1B19]'
						>
							{tag}
						</Link>
					))}
				</div>
			</div>

			<p className='text-[#7A7A7A]'>{issue.date}</p>
		</div>
	)
}

export default LaunchpadIssues
