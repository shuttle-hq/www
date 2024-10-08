import { PlanProps } from 'components/sections/Pricing/Plan'
import { CONTACT_US_URI, GET_STARTED_URI } from 'lib/constants'

export const Plans: PlanProps[] = [
	{
		key: 'community',
		name: 'Community',
		description: 'Everything you need to simply run your hobby projects. On us.',
		price: '$0',
		term: '/ month',
		billsResources: false,
		features: [
			{
				feature: '1 project',
			},
			{
				feature: 'Enough CPU & RAM to get you started',
				iText: 'See project budget estimator below.',
			},
			{
				feature: 'Starter Database',
			},
			{
				feature: 'Infra config with code annotations',
			},
			{
				feature: 'Easy plug-in instrumentation',
			},
			{
				feature: 'Deploy from GitHub Actions',
			},
			{
				feature: '20 deploys per day',
			},
			{
				feature: '1 day logs retention',
			},
			{
				feature: 'Community support',
			},
		],
		url: 'https://console.shuttle.rs/login',
		textGradient: 'linear-gradient(69deg, #FC540C -4.04%, rgba(255, 215, 111, 0.72) 218.65%, #38D4E9 304.95%)',
		cta: 'Start deploying',
	},
	{
		key: 'pro',
		name: 'Pro',
		description: 'For more professional use cases - raise limits and get access to more resources.',
		price: '$20',
		term: '/ user / month',
		billsResources: true,
		features: [
			{
				feature: 'Up to 3 projects',
			},
			{
				feature: 'Higher CPU & RAM limits',
				iText: 'See project budget estimator below.',
			},
			{
				feature: 'Custom Domains',
			},
			{
				feature: 'More storage',
			},
			{
				feature: 'Configurable instances',
			},
			{
				feature: 'Early access to Shuttle AI (coming soon)',
			},
			{
				feature: 'Longer logs retention',
			},
			{
				feature: 'Book 1:1 support sessions',
			},
		],
		url: GET_STARTED_URI,
		textGradient:
			'linear-gradient(70deg, #FC540C -115.42%, rgba(255, 215, 111, 0.72) 61.13%, #38D4E9 291.19%)',
		cta: 'Start 30-Day Trial',
	},
	{
		key: 'team',
		name: 'Team',
		description: `Custom-built tier to supercharge your team's productivity.`,
		price: 'Custom',
		term: '',
		billsResources: true,
		features: [
			{
				feature: 'Unlimited projects',
			},
			{
				feature: 'Higher CPU & RAM limits',
				iText: 'See project budget estimator below.',
			},
			{
				feature: 'Bring your own cloud (coming soon)',
			},
			{
				feature: 'Custom SLA',
			},
			{
				feature: 'Longer logs retention',
			},
			{
				feature: 'Dedicated support',
			},
		],
		url: CONTACT_US_URI,
		textGradient:
			'linear-gradient(70deg, #FC540C -115.42%, rgba(255, 215, 111, 0.72) -8.73%, #38D4E9 114.38%)',
		cta: 'Contact us',
	},
]

export default Plans
