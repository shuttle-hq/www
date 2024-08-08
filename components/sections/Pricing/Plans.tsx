import Plan from './Plan'
import { Plans as PlansData } from 'content/plans'

const Plans = () => (
	<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-40'>
		<div className='grid gap-12 lg:grid-cols-3 lg:gap-5'>
			{PlansData.map((plan) => (
				<Plan
					key={plan.key}
					name={plan.name}
					description={plan.description}
					price={plan.price}
					term={plan.term}
					billsResources={plan.billsResources}
					features={plan.features}
					url={plan.url}
					textGradient={plan.textGradient}
					cta={plan.cta}
				/>
			))}
		</div>
	</div>
)

export default Plans
