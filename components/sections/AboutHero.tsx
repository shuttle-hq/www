import Image from 'next/image'

const AboutHero = () => {
	return (
		<header className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<h1 className='w-fit font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5'>
				We’re helping developers
				<span className='text-gradient block bg-clip-text text-transparent'>do what they do best.</span>
			</h1>
			<p className='mt-4 sm:text-xl lg:text-2xl'>
				We are a worldwide team that believes Rust has the potential to become the next JavaScript for
				backend web development and far overtake Go, taking over the entire web dev culture.
			</p>
		</header>
	)
}

export default AboutHero
