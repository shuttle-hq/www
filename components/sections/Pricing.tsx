import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'
import { Button } from 'components/elements'
import { ReactElement, useState } from 'react'
import { CONTACT_US_URI, GET_STARTED_URI } from 'lib/constants'
import { trackEvent } from 'lib/posthog'

export type TierName = 'community' | 'pro' | 'team'

interface PricingTier {
	name: TierName
	displayName: string
	desc: string
	cta: string
	ctaPrimaryButton?: boolean
	ctaLink: string
}
interface PricingTableRow {
	desc: string
	desc2?: string
	values: Record<TierName, PricingTableCell>
}
type PricingTableCell = string | boolean

const TIERS: PricingTier[] = [
	{
		name: 'community',
		displayName: 'Community',
		desc: 'Everything you need to run your hobby projects, on us. Get projects deployed in minutes.',
		cta: 'Start deploying',
		ctaLink: 'https://console.shuttle.rs',
	},
	{
		name: 'pro',
		displayName: 'Pro',
		desc: 'Raise limits and get access to custom domains, team features, and more.',
		cta: 'Start 30-Day Trial',
		ctaPrimaryButton: true,
		ctaLink: GET_STARTED_URI,
	},
	{
		name: 'team',
		displayName: 'Team',
		desc: "Custom-built tier to supercharge your team's productivity.",
		cta: 'Contact us',
		ctaLink: CONTACT_US_URI,
	},
]

const PRICING_ROWS: PricingTableRow[] = [
	{
		desc: 'Max Team Size',
		values: {
			community: '1',
			pro: '5',
			team: '∞',
		},
	},
	{
		desc: 'Number of Projects',
		values: {
			community: '3',
			pro: '15',
			team: '∞',
		},
	},
	{
		desc: 'Custom Domains',
		desc2: '(with SSL)',
		values: {
			community: false,
			pro: '1 per project',
			team: '∞',
		},
	},
	{
		desc: 'Shared DB Size',
		values: {
			community: '1 GB',
			pro: '10 GB',
			team: 'Custom',
		},
	},
	{
		desc: 'Dedicated Database',
		desc2: '(AWS RDS)',
		values: {
			community: 'Add-on',
			pro: 'Add-on',
			team: 'Add-on',
		},
	},
	{
		desc: 'Log Retention',
		values: {
			community: '1 day',
			pro: '7 days',
			team: '28 days',
		},
	},
	{
		desc: 'Support',
		values: {
			community: 'Community',
			pro: 'Enhanced',
			team: 'Dedicated',
		},
	},
	{
		desc: 'Free Network egress',
		desc2: 'per month',
		values: {
			community: '1 GB',
			pro: '10 GB',
			team: 'Custom',
		},
	},
	{
		desc: 'Max Deployments',
		desc2: 'per day',
		values: {
			community: '20',
			pro: 'Custom',
			team: 'Custom',
		},
	},
	{
		desc: 'Max Build Minutes',
		desc2: 'per deployment',
		values: {
			community: '10',
			pro: 'Custom',
			team: 'Custom',
		},
	},
	{
		desc: 'Free Object Storage',
		desc2: '(AWS S3) (coming soon)',
		values: {
			community: '1 GB',
			pro: '10 GB',
			team: 'Custom',
		},
	},
]

const CROSS = (
	<svg
		width={15}
		className='m-auto inline'
		height={15}
		viewBox='0 0 15 15'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M1 14L7.5 7.5M14 1L7.5 7.5M7.5 7.5L14 14M7.5 7.5L1 1' stroke='currentColor' strokeWidth='2' />
	</svg>
)

const CHECK = (
	<svg
		width={15}
		className='m-auto inline'
		height={15}
		viewBox='0 0 15 15'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M1 6.5L6.33333 12L17 1' stroke='currentColor' stroke-width='2' />
	</svg>
)

const toCellContent = (c: PricingTableCell): ReactElement => {
	if (typeof c === 'boolean') {
		return c ? CHECK : CROSS
	}
	return <>{c}</>
}

const Pricing = () => {
	const [selectedMobilePlan, setSelectedMobilePlan] = useState<TierName>('community')

	return (
		<div className='mx-auto mt-36 w-full max-w-7xl px-4 sm:px-10 lg:mt-28'>
			<div className='mt-24 lg:mt-32'>
				<div className='mt-16'>
					{/* Mobile */}
					<Splide
						onMove={(splide, index) => {
							setSelectedMobilePlan(TIERS[index].name)
						}}
						options={{
							perPage: 3,
							pagination: false,
							autoWidth: true,
							autoHeight: true,
							arrows: false,
							gap: '2rem',
							mediaQuery: 'min',
							isNavigation: true,
							clones: 0,
							perMove: 1,
						}}
						className='py-2 lg:hidden'
					>
						{TIERS.map((t) => (
							<SplideSlide
								key={t.name}
								className={clsx(
									selectedMobilePlan === t.name ? 'text-head' : 'text-body',
									'!mt-auto mb-[8px] text-xl font-bold leading-none transition-all'
								)}
							>
								{t.displayName}
								<div
									className={clsx(
										'absolute -top-1 z-[100] h-1 w-[calc(100%+10px)] translate-x-[-5px] translate-y-[1.5em]',
										selectedMobilePlan === t.name ? 'block' : 'hidden'
									)}
									style={{
										background:
											'linear-gradient(71.78deg, #FC540C 1.89%, rgba(255, 215, 111, 0.72) 52.56%, #38D4E9 87.48%)',
									}}
								/>
							</SplideSlide>
						))}
					</Splide>
					<div className='pt-2 lg:hidden'>
						{TIERS.map((t) => (
							<div
								key={t.name}
								className='divide-y divide-white/10 text-xl'
								hidden={selectedMobilePlan !== t.name}
							>
								{PRICING_ROWS.map((r) => (
									<div key={r.desc} className='flex justify-between gap-6 py-[0.625rem]'>
										<div className='grow basis-3/5 text-body'>
											{r.desc}
											{r.desc2 ? (
												<>
													{' '}
													<span className='text-sm'>{r.desc2}</span>
												</>
											) : null}
										</div>
										<div className='text-right text-head'>
											{toCellContent(r.values[t.name])}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
					{/* Desktop */}
					<div className='hidden divide-y divide-black/10 text-xl dark:divide-white/10 lg:block'>
						<div className='mb-8 grid grid-cols-[5fr_4fr_4fr_4fr] py-[0.875rem]'>
							<div>{/* grid filler */}</div>
							{TIERS.map((t) => (
								<div key={t.name} className='text-center text-black dark:text-body'>
									<div className='mb-4 font-gradual text-2xl font-bold'>{t.displayName}</div>
									<div className='mx-auto mb-4 w-4/5 text-base text-body'>{t.desc}</div>
									<Button
										variant={t.ctaPrimaryButton ? 'tertiary' : 'blackwhite'}
										className='mx-auto scale-[0.95] hover:bg-gradient-2'
										href={t.ctaLink}
										onClick={() => {
											trackEvent(`pricing_comparison_${t.name}`)
										}}
									>
										{t.cta}
									</Button>
								</div>
							))}
						</div>
						{PRICING_ROWS.map((r) => (
							<div
								key={r.desc}
								className='text-main grid grid-cols-[5fr_4fr_4fr_4fr] items-center py-2 text-center'
							>
								<div className='text-left text-body'>
									{r.desc}
									{r.desc2 ? (
										<>
											{' '}
											<span className='text-sm'>{r.desc2}</span>
										</>
									) : null}
								</div>
								<div>{toCellContent(r.values['community'])}</div>
								<div>{toCellContent(r.values['pro'])}</div>
								<div>{toCellContent(r.values['team'])}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Pricing
