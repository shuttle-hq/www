import { Page } from 'components/templates'
import { trackEvent } from 'lib/posthog'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState, useEffect } from 'react'

export default function CCHPage() {
	const [scoreboard, setScoreboard] = useState([])

	 const getScoreboard = async () => {
		let res = await fetch("https://cch23.shuttleapp.rs/leaderboard");
		if (!res.ok) {
		 console.log(res)	
		}
		
		let data = await res.json();
		
		data.sort((a, b) => (b.points - a.points));
		setScoreboard(data) 
		
	}

	useEffect(() => {
		getScoreboard()
	}, [])

	return (
		<section className='mx-auto w-full max-w-5xl px-4 py-12 font-mono font-normal text-[#DEDEDE]'>
			<div className='mx-auto mb-8 flex max-w-[686px] flex-col items-end'>
				<h1 className='text-center text-[60px]'>
					<span className='relative'>
						<Image
							src='/images/cch/santa-hat.png'
							alt=''
							width={80}
							height={60}
							className='z-1 absolute left-[-28px] top-0 ml-auto mr-auto max-w-5xl'
						/>
						C
					</span>
					hristmas Code Hunt
				</h1>

				<p className='flex items-center gap-2 self-end text-base text-[#AFAFAF]'>
					powered by
					<Link href='/'>
						<Image src='/images/cch/logo.svg' alt='' width={115} height={37} />
					</Link>
				</p>
			</div>

			<div className='flex flex-col text-base mb-8'>
				<Link
					href='https://shuttlerust.typeform.com/to/hkPkbXab'
					target='_blank'
					className='text-[#F09050] text-center text-xl font-bold border rounded p-6'
					onClick={() => {
						trackEvent('cch_sign_up')
					}}
				>
					Click here to sign up!
				</Link>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> what
				</p>
				<p>
					Shuttle&apos;s Christmas Code Hunt, inspired by Advent of Code, invites you to solve daily
					challenges using Rust in a relaxed environment. Each weekday, you will be implementing an HTTP
					endpoint that returns the solution to the daily challenge, and deploy it on{' '}
					<Link href='/' className='text-[#F09050]'>
						Shuttle
					</Link>
					. Join the fun, solve puzzles, embrace the holiday spirit, and get rewarded! 🎄🚀
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> why
				</p>
				<p>
					By participating, you get the chance to improve your Rust skills,
					build new friendships with like minded Rusteceans and enjoy the run up to the holidays!
					We also have an array of prizes in store for this years winners.
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> when
				</p>
				<p>
					The first challenge will be released on December 1, 12:00 UTC (
					<Link href='https://everytimezone.com/s/297d565e' target='_blank' className='text-[#F09050]'>
						check your timezone
					</Link>
					). A total of 16 challenges will be released each weekday between December 1 and December 22.
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> where
				</p>
				<p>
					The Shuttle Discord will serve as the main point for getting announcements, discussing
					challenges, and more. You can also sign up for announcements via email. Participating requires
					logging in to the Shuttle Console with a GitHub account. Register now to stay updated and have
					a chance to win exciting prizes!{' '}
					<Link
						href='https://shuttlerust.typeform.com/to/hkPkbXab'
						target='_blank'
						className='text-[#F09050]'
						onClick={() => {
							trackEvent('cch_sign_up')
						}}
					>
						Sign up now
					</Link>
					!
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> prizes
				</p>
				<p>
					1st place: $200 Amazon voucher + Shuttle swag box + 6 months of Shuttles PRO Tier
					<br />
					2nd place: &nbsp;$50 Amazon voucher + Shuttle swag box + 3 months of Shuttles PRO Tier
					<br />
					3rd place: &nbsp;Shuttle swag box + 1 month of Shuttles PRO Tier
					<br />
					Completing all the challenges: &nbsp;TBA
				</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> scoring system
				</p>
				<p>
					The scoring is determined by gathering points:
				</p>
				<ul className="list-disc ml-8">
					<li>Complete the core tasks of a challenge: 1000 points</li>
					<li>Complete bonus tasks on challenges: Up to 800 points per challenge</li>
					<li>Time score based on when your solution was submitted: Up to 48 points</li>
					<li>Tie breaker: TBA</li>
				</ul>
				<p>Time score is added based on the time between the challenge release and your submission time:</p>
				<ul className="list-disc ml-8">
					<li>Under 24 hours: 48 time points</li>
					<li>After 24 hours, lose 1 time point per hour that passes</li>
					<li>After 72 hours, you’ll get 0 time points</li>
				</ul>
				<p>Your highest scoring submission (sum of task points and time points) per challenge is the one that counts.</p>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> rules
				</p>
				<ul className="list-disc ml-8">
					<li>The competition ends on December 31, 23:59 UTC. A snapshot of the scoreboard will be taken at that time.</li>
					<li>Challenges are released at 12:00 UTC each weekday between Dec 1 and Dec 22.</li>
					<li>In order to be eligible for prizes, the solutions need to be genuine. In other words, you can&apos;t return hard-coded or pre-computed answers to the tests. Additionally, your solutions should be your own work. (These conditions will be verified.)</li>
					<li>Shuttle reserves the right to change, update, or amend: release times of challenges, challenge contents, the scoring system, the prizes, and these rules.</li>
					<li>Challenge -1 is a warmup challenge and gives no score.</li>
					<li>Sharing tips about how to solve tasks is allowed, but don&apos;t spoil any solution in the official Discord channel. Feel free to use the Discord to find collaborators</li>
					<li>Follow the Shuttle <Link href='https://www.shuttle.rs/acceptable-use' target='_blank' className='text-[#F09050]'>Acceptable Use Policy</Link>. TL;DR It is not allowed to disrupt access to our services or other participants&apos; projects.</li>
					<li>Shuttle employees are not eligible for leaderboard spots.</li>
				</ul>

				<p className='mt-8 font-bold'>
					<span className='text-[#F09050]'>&gt;</span> scoreboard
				</p>

				{ scoreboard.length > 0 ?
				<div className='flex flex-row justify-center'> 
				<table className='border-spacing-x-10 gap-4 w-max'>
				<thead>
				<tr>
					<th className='w-min'>Position</th>
					<th className='w-min  px-20'>Name</th>
					<th className='w-min  px-8'>Completed</th>
					<th className='w-max  px-20'>Score</th>
				</tr>
				</thead>
				<tbody>
				 { scoreboard.map((score, position) => (
				<tr key={score.name}>
					<td className='w-min text-right px-8'>{position + 1}</td>
					<td className='w-max text-left px-10 block'>{score.name}</td>
					<td className='w-min text-right px-20'>{score.completed}</td>
					<td className='w-min text-right px-24'>{score.points}</td>
				</tr>	
				)) }
				</tbody>
				</table>
				</div>
				:
				<p> Nothing submitted yet :(</p> }
			</div>
		</section>
	)
}

CCHPage.getLayout = (children: ReactNode) => (
	<Page disableFooter disableHeader>
		{children}
	</Page>
)
