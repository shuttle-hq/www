import { useLocalStorage } from 'react-use'

const StarOnGithub = () => {
	const [starOpen, setStarOpen] = useLocalStorage<boolean>('star-open', true)

	return (
		<div
			className='relative items-center justify-center py-2 text-sm font-bold text-white'
			style={{
				background: 'linear-gradient(85.52deg, #FC540C -7.27%, rgba(255, 215, 111, 0.72) 108.87%)',
				display: starOpen ? 'flex' : 'none',
			}}
		>
			<a href='https://github.com/shuttle-hq/shuttle' target='_blank' rel='noopener noreferrer'>
				⭐️ If you like Shuttle, give it a star on github!
			</a>
			<button className='absolute right-3' onClick={() => setStarOpen(false)}>
				<svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M6.49023 6.48926L18.511 18.5101' stroke='white' strokeWidth='2' />
					<path d='M6.49023 18.5107L18.511 6.48993' stroke='white' strokeWidth='2' />
				</svg>
			</button>
		</div>
	)
}

export default StarOnGithub
