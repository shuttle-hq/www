import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary'
	children: ReactNode
}

const Button: FC<ButtonProps> = ({ variant, children }) => {
	const variantClasses =
		variant === 'primary'
			? 'bg-[#D8D8D8] text-black hover:text-white'
			: variant === 'secondary'
			? 'bg-black text-[#C2C2C2]'
			: ''

	return (
		<button
			className={clsx(
				'flex items-center gap-2 whitespace-nowrap rounded-button px-6 py-3 font-bold transition-all duration-500',
				variantClasses
			)}
		>
			{children}
		</button>
	)
}

export default Button
