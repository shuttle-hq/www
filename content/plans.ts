import { PlanProps } from 'components/sections/Pricing/Plan'
import { CONTACT_US_URI } from 'lib/constants'

export const Plans: PlanProps[] = [
	{
		name: 'Community',
		description: 'Everything you need to simply run your hobby projects. On us.',
		price: '$0',
		term: '/ month',
		billsResources: false,
		features: [
			{
				feature: 'Up to 3 projects',
			},
			{
				feature: 'Infra config with code annotations',
			},
			{
				feature: 'Enough CPU to get you started',
				iText: 'See project budget estimator below.',
			},
			{
				feature: 'Starter Database',
			},
			{
				feature: 'Deploy from GitHub',
			},
			{
				feature: 'Easy plug-in instrumentation',
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
		name: 'Pro',
		description: 'For more professional use cases - raise limits and get access to more resources.',
		price: '$20',
		term: '/ user / month',
		billsResources: true,
		features: [
			{
				feature: 'More projects (up to 15)',
			},
			{
				feature: 'Higher vCPU limits (usage-based)',
				iText: 'See project budget estimator below.',
			},
			{
				feature: 'Custom Domains',
			},
			{
				feature: 'More storage',
			},
			{
				feature: 'Add-on: RDS',
			},
			{
				feature: 'Configurable instances',
			},
			{
				feature: 'Easy access to Shuttle AI (alpha)',
			},
			{
				feature: 'Longer logs retention',
			},
			{
				feature: 'Enhanced support',
			},
		],
		url: CONTACT_US_URI,
		textGradient:
			'linear-gradient(70deg, #FC540C -115.42%, rgba(255, 215, 111, 0.72) 61.13%, #38D4E9 291.19%)',
		cta: 'Get started',
	},
	{
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
				feature: 'Longer logs retention',
			},
			{
				feature: 'Higher CPU limits',
			},
			{
				feature: 'Bring your own cloud (Coming soon)',
			},
			{
				feature: 'Custom SLA',
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
