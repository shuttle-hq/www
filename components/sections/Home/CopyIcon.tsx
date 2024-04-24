export default function Copy({ onClick, className }: { onClick?: () => void; className?: string }) {
	return (
		<svg
			onClick={onClick}
			className={className}
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4.5 18C4.0875 18 3.73437 17.8531 3.44062 17.5594C3.14687 17.2656 3 16.9125 3 16.5V5H4.5V16.5H14V18H4.5ZM7.5 15C7.0875 15 6.73437 14.8531 6.44062 14.5594C6.14687 14.2656 6 13.9125 6 13.5V3.5C6 3.0875 6.14687 2.73437 6.44062 2.44062C6.73437 2.14687 7.0875 2 7.5 2H15.5C15.9125 2 16.2656 2.14687 16.5594 2.44062C16.8531 2.73437 17 3.0875 17 3.5V13.5C17 13.9125 16.8531 14.2656 16.5594 14.5594C16.2656 14.8531 15.9125 15 15.5 15H7.5Z'
				fill='#5E5E5E'
			/>
		</svg>
	)
}
