import { Button } from 'components/elements'

const Contact = () => (
	<div className='mx-auto mt-24 flex max-w-7xl flex-col items-center'>
		<h1 className='mb-2.5 font-gradual text-[40px] font-bold text-white'>
			Still not sure which plan is right for you?
		</h1>
		<h3 className='mb-8 text-2xl text-[#7A7A7A]'>Let us help you choose.</h3>
		<Button variant='tertiary' invertOnDark>
			Contact Us
		</Button>
	</div>
)

export default Contact
