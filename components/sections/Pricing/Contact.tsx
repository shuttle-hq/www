import { Button } from 'components/elements'
import { CONTACT_US_URI } from 'lib/constants'
import { trackEvent } from 'lib/posthog'

const Contact = () => (
	<div className='mx-auto mt-24  max-w-7xl '>
		<div className=' mobile:border-gradient-card relative mx-5 flex flex-col items-center rounded-[32px] bg-black px-5 py-12 sm:mx-0 sm:px-0 sm:py-0'>
			<h1 className='mb-2.5 text-center font-gradual text-2xl font-bold text-white sm:text-[40px]'>
				Still not sure which plan is right for you?
			</h1>
			<h3 className='mb-8 text-base text-[#7A7A7A] sm:text-2xl'>Let us help you choose.</h3>
			<Button
				variant='tertiary'
				invertOnDark
				className='hover:bg-gradient-2'
				href={CONTACT_US_URI}
				onClick={() => {
					trackEvent('contact-intent', {
						domain: 'www',
					})
				}}
			>
				Contact Us
			</Button>
		</div>
	</div>
)

export default Contact
